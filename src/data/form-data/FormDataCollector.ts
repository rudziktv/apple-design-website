import { IDropdownItem } from "../../apple-design/components/Dropdown/DropdownItem";
import supabase from "../../supabase/supabase-client";
import { LoadUserDataID } from "../data-handler/DataHandler";
import { FormFieldsAliases } from "./FormFiledsAliases";
import { IFormData } from "./IFormData";

const CollectFormData = async () => {
    const user =
        (await supabase.auth.getUser()).data.user?.id || "unknown-user";

    const data: IFormData = {
        application: {
            isOurSchoolFirstChoice: await LoadUserDataID(
                FormFieldsAliases.application.isOurSchoolFirstChoice,
                false,
                user
            ),
            finishedSchoolName: await LoadUserDataID(
                FormFieldsAliases.application.finishedSchoolName,
                "",
                user
            ),

            curatorialCompetitionParticipation: await LoadUserDataID(
                FormFieldsAliases.application
                    .curatorialCompetitionParticipation,
                false,
                user
            ),
            curatorialCompetitionName: (
                await LoadUserDataID<IDropdownItem>(
                    FormFieldsAliases.application.curatorialCompetitionName,
                    { id: 0, label: "" },
                    user
                )
            ).id,

            mainProfile: (
                await LoadUserDataID<IDropdownItem>(
                    FormFieldsAliases.application.mainProfile,
                    { id: 0, label: "" },
                    user
                )
            ).id,
            secondaryProfile: (
                await LoadUserDataID<IDropdownItem>(
                    FormFieldsAliases.application.secondaryProfile,
                    { id: 0, label: "" },
                    user
                )
            ).id,

            mainLanguague: (
                await LoadUserDataID<IDropdownItem>(
                    FormFieldsAliases.application.mainLanguague,
                    { id: 0, label: "" },
                    user
                )
            ).id,
            secondaryLanguague: (
                await LoadUserDataID<IDropdownItem>(
                    FormFieldsAliases.application.secondaryLanguague,
                    { id: 0, label: "" },
                    user
                )
            ).id,

            comments: await LoadUserDataID(
                FormFieldsAliases.application.comments,
                "",
                user
            ),
        },
        candidate: {
            firstName: await LoadUserDataID(
                FormFieldsAliases.personal.candidate.firstName,
                "",
                user
            ),
            secondName: await LoadUserDataID(
                FormFieldsAliases.personal.candidate.secondName,
                "",
                user
            ),
            lastName: await LoadUserDataID(
                FormFieldsAliases.personal.candidate.lastName,
                "",
                user
            ),
            pesel: await LoadUserDataID(
                FormFieldsAliases.personal.candidate.pesel,
                "",
                user
            ),
            placeOfBirth: await LoadUserDataID(
                FormFieldsAliases.personal.candidate.placeOfBirth,
                "",
                user
            ),
            dateOfBirth: await LoadUserDataID(
                FormFieldsAliases.personal.candidate.dateOfBirth,
                "",
                user
            ),
            addressId: await LoadUserDataID(
                FormFieldsAliases.personal.candidate.addressId,
                0,
                user
            ),
        },
        gaurdian1: {
            firstName: await LoadUserDataID(
                FormFieldsAliases.personal.gaurdian1.firstName,
                "",
                user
            ),
            lastName: await LoadUserDataID(
                FormFieldsAliases.personal.gaurdian1.lastName,
                "",
                user
            ),
            phone: await LoadUserDataID(
                FormFieldsAliases.personal.gaurdian1.phone,
                "",
                user
            ),
            addressId: await LoadUserDataID(
                FormFieldsAliases.personal.gaurdian1.addressId,
                0,
                user
            ),
        },
        gaurdian2: {
            firstName: await LoadUserDataID(
                FormFieldsAliases.personal.gaurdian2.firstName,
                "",
                user
            ),
            lastName: await LoadUserDataID(
                FormFieldsAliases.personal.gaurdian2.lastName,
                "",
                user
            ),
            phone: await LoadUserDataID(
                FormFieldsAliases.personal.gaurdian2.phone,
                "",
                user
            ),
            addressId: await LoadUserDataID(
                FormFieldsAliases.personal.gaurdian2.addressId,
                0,
                user
            ),
        },
    };

    return data;
};

export { CollectFormData };
