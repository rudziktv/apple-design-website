import Button from "../../../../apple-design/components/Buttons/Button";
import { useLoaderData, useNavigate } from "react-router-dom";
import { transitionFade } from "../../../../apple-design/animation/page-transition";
import TextInput from "../../../../apple-design/components/TextInput/TextInput";
import { useStoredUserField } from "../../../../hooks/useFieldForm";
import {
    NameCallbackRegex,
    PeselCallbackRegex,
} from "../../../../security/validation/FormRegex";
import { FormFieldsAliases } from "../../../../data/form-data/FormFiledsAliases";
import usePopup from "../../../../hooks/usePopup";
import { IFormData } from "../../../../data/data-loader/FormDataLoader";
import AddressButton from "../../../../components/AddressButton/AddressButton";
import AddressPicker from "../../../../components/AddressPicker/AddressPicker";

const Page5 = () => {
    const navigate = useNavigate();

    const loaderData = useLoaderData() as IFormData;
    const address = loaderData.address;

    const [firstName, setFirstName] = useStoredUserField(
        "",
        FormFieldsAliases.personal.candidate.firstName,
        NameCallbackRegex
    );
    const [secondName, setSecondName] = useStoredUserField(
        "",
        FormFieldsAliases.personal.candidate.secondName,
        NameCallbackRegex
    );
    const [lastName, setLastName] = useStoredUserField(
        "",
        FormFieldsAliases.personal.candidate.lastName,
        NameCallbackRegex
    );
    const [pesel, setPesel] = useStoredUserField(
        "",
        FormFieldsAliases.personal.candidate.pesel,
        PeselCallbackRegex
    );
    const [placeOfBirth, setPlaceOfBirth] = useStoredUserField(
        "",
        FormFieldsAliases.personal.candidate.placeOfBirth,
        NameCallbackRegex
    );

    const [dateOfBirth, setDateOfBirth] = useStoredUserField(
        "",
        FormFieldsAliases.personal.candidate.dateOfBirth
    );

    const [addressId, setAddressId] = useStoredUserField(
        0,
        FormFieldsAliases.personal.candidate.addressId
    );

    const selectedAddress = address?.find((a) => a.id === addressId);

    const maxDate = new Date();

    maxDate.setDate(31);
    maxDate.setMonth(11);
    maxDate.setFullYear(maxDate.getFullYear() - 12);

    const addressPicker = usePopup((set) => (
        <AddressPicker
            close={() => set(false)}
            addresses={address}
            setAddressId={setAddressId}
        />
    ));

    return transitionFade(
        <div className="form-page">
            <span className="form-title-page">Dane osobowe</span>
            <TextInput
                label="Imię"
                value={firstName}
                onTextChange={setFirstName}
            />
            <TextInput
                label="Drugie imie"
                value={secondName}
                onTextChange={setSecondName}
            />
            <TextInput
                label="Nazwisko"
                value={lastName}
                onTextChange={setLastName}
            />
            <TextInput
                label="PESEL"
                maxLength={11}
                value={pesel}
                onTextChange={setPesel}
            />
            <TextInput
                label="Miejsce urodzenia"
                value={placeOfBirth}
                onTextChange={setPlaceOfBirth}
            />
            <TextInput
                type="date"
                label="Data urodzenia"
                value={dateOfBirth}
                onTextChange={setDateOfBirth}
                max={maxDate.toISOString().split("T")[0]}
            />

            {/* <Button
                title="Adres"
                onClick={() => {
                    addressPopup(true);
                }}
            /> */}

            {addressId != 0 ? (
                <AddressButton
                    city={selectedAddress?.city || ""}
                    street={selectedAddress?.street || ""}
                    zipcode={selectedAddress?.zip_code || ""}
                    building={selectedAddress?.building_number || ""}
                    apartment={selectedAddress?.apartment_number || ""}
                    onClick={() => {
                        // setPickerVisible(true);
                        addressPicker(true);
                    }}
                />
            ) : (
                <Button
                    title="AddressPicker"
                    onClick={() => {
                        // setPickerVisible(true);
                        addressPicker(true);
                    }}
                />
            )}

            {/* {address.map((a) => (
                <AddressButton
                    key={a.id}
                    street={a.street || ""}
                    city={a.city}
                    zipcode={a.zip_code}
                    building={a.building_number}
                    apartment={a.apartment_number || ""}
                />
            ))} */}

            <div className="inline-actions">
                <Button
                    title="Wstecz"
                    leadingIcon={<i className="ri-arrow-left-s-line" />}
                    onClick={() => navigate("/form/lo11/4")}
                />
                <Button
                    title="Dalej"
                    trailingIcon={<i className="ri-arrow-right-s-line" />}
                    onClick={() => navigate("/form/lo11/6")}
                    disabled={
                        !firstName ||
                        !lastName ||
                        pesel.length != 11 ||
                        !placeOfBirth ||
                        !dateOfBirth ||
                        !addressId
                    }
                />
            </div>
        </div>
    );
};

export default Page5;
