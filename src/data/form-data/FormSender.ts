import supabase, { supabasePersonal } from "../../supabase/supabase-client";
import { CollectFormData } from "./FormDataCollector";
import { IGuardian } from "./IFormData";

const SendForm = async () => {
    console.log(await CollectFormData());

    await SetupSession();
    await SendApplication();
    await SendCandidate();
    await SendGuardians();
};

const SetupSession = async () => {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
        return;
    }

    await supabasePersonal.auth.setSession(data.session);
};

const SendApplication = async () => {
    const application = (await CollectFormData()).application;
    const { data } = await supabasePersonal.auth.getUser();

    if (!data.user) return;

    const { error } = await supabasePersonal.from("application").insert({
        user_id: data.user.id,
        first_choice: application.isOurSchoolFirstChoice,
        finished_school: application.finishedSchoolName,
        id_competition:
            application.curatorialCompetitionName == 0
                ? null
                : application.curatorialCompetitionName,
        id_first_profile: application.mainProfile,
        id_second_profile:
            application.secondaryProfile == 0
                ? null
                : application.secondaryProfile,
        id_first_lang: application.mainLanguague,
        id_second_lang: application.secondaryLanguague,
        comments: application.comments,
    });

    console.log(error);
};

const SendCandidate = async () => {
    const candidate = (await CollectFormData()).candidate;
    const { data } = await supabasePersonal.auth.getUser();

    if (!data.user) return;

    const { error } = await supabasePersonal.from("candidate").insert({
        user_id: data.user.id,
        first_name: candidate.firstName,
        second_name: candidate.secondName || null,
        last_name: candidate.lastName,
        pesel: candidate.pesel,
        place_of_birth: candidate.placeOfBirth,
        date_of_birth: candidate.dateOfBirth,
        id_address: candidate.addressId,
    });

    console.log(error);
};

const SendGuardians = async () => {
    const guardians = await CollectFormData();

    const gaurdian1 = guardians.gaurdian1;
    const gaurdian2 = guardians.gaurdian2;
    const { data } = await supabasePersonal.auth.getUser();

    if (!data.user) return;

    await SendOneGuardian(gaurdian1, data.user.id);
    await SendOneGuardian(gaurdian2, data.user.id);
};

const SendOneGuardian = async (guardian: IGuardian, userId: string) => {
    const { error } = await supabasePersonal.from("guardian").insert({
        user_id: userId,
        first_name: guardian.firstName,
        last_name: guardian.lastName,
        phone_number: guardian.phone,
        id_address: guardian.addressId,
    });

    console.log(error);
};

export { SendForm };
