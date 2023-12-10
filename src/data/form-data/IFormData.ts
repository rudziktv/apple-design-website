interface IFormData {
    application: {
        isOurSchoolFirstChoice: boolean;
        finishedSchoolName: string;

        curatorialCompetitionParticipation: boolean;
        curatorialCompetitionName: number;

        mainProfile: number;
        secondaryProfile: number;

        mainLanguague: number;
        secondaryLanguague: number;

        comments: string;
    };

    candidate: {
        firstName: string;
        secondName: string;
        lastName: string;
        pesel: string;
        placeOfBirth: string;
        dateOfBirth: string;
        addressId: number;
    };

    gaurdian1: IGuardian;
    gaurdian2: IGuardian;
}

interface IGuardian {
    firstName: string;
    lastName: string;
    phone: string;
    addressId: number;
}

export type { IFormData, IGuardian };
