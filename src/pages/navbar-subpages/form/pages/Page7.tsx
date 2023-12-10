import Button from "../../../../apple-design/components/Buttons/Button";
import { useLoaderData, useNavigate } from "react-router-dom";
import { transitionFade } from "../../../../apple-design/animation/page-transition";
import TextInput from "../../../../apple-design/components/TextInput/TextInput";
import { useStoredUserField } from "../../../../hooks/useFieldForm";
import {
    PhoneCallbackRegex,
    PolishNameCallbackRegex,
} from "../../../../security/validation/FormRegex";
import { FormFieldsAliases } from "../../../../data/form-data/FormFiledsAliases";
import usePopup from "../../../../hooks/usePopup";
import { IFormData } from "../../../../data/data-loader/FormDataLoader";
import AddressButton from "../../../../components/AddressButton/AddressButton";
import AddressPicker from "../../../../components/AddressPicker/AddressPicker";

const Page7 = () => {
    const navigate = useNavigate();

    const loaderData = useLoaderData() as IFormData;
    const address = loaderData.address;

    const [firstName, setFirstName] = useStoredUserField(
        "",
        FormFieldsAliases.personal.gaurdian2.firstName,
        PolishNameCallbackRegex
    );
    const [lastName, setLastName] = useStoredUserField(
        "",
        FormFieldsAliases.personal.gaurdian2.lastName,
        PolishNameCallbackRegex
    );
    const [phone, setPhone] = useStoredUserField(
        "",
        FormFieldsAliases.personal.gaurdian2.phone,
        PhoneCallbackRegex
    );

    const [addressId, setAddressId] = useStoredUserField(
        0,
        FormFieldsAliases.personal.gaurdian2.addressId
    );

    const selectedAddress = address?.find((a) => a.id === addressId);

    const addressPicker = usePopup((set) => (
        <AddressPicker
            close={() => set(false)}
            addresses={address}
            setAddressId={setAddressId}
        />
    ));

    return transitionFade(
        <div className="form-page">
            <span className="form-title-page">Opiekun 2 - Dane osobowe</span>
            <TextInput
                label="Imię"
                value={firstName}
                onTextChange={setFirstName}
            />
            <TextInput
                label="Nazwisko"
                value={lastName}
                onTextChange={setLastName}
            />
            <TextInput
                label="Numer telefonu"
                type="tel"
                placeholder="+48"
                value={phone}
                onTextChange={setPhone}
            />

            {addressId != 0 ? (
                <AddressButton
                    city={selectedAddress?.city || ""}
                    street={selectedAddress?.street || ""}
                    zipcode={selectedAddress?.zip_code || ""}
                    building={selectedAddress?.building_number || ""}
                    apartment={selectedAddress?.apartment_number || ""}
                    onClick={() => {
                        addressPicker(true);
                    }}
                />
            ) : (
                <Button
                    title="AddressPicker"
                    onClick={() => {
                        addressPicker(true);
                    }}
                />
            )}

            <div className="inline-actions">
                <Button
                    title="Wstecz"
                    leadingIcon={<i className="ri-arrow-left-s-line" />}
                    onClick={() => navigate("/form/lo11/6")}
                />
                <Button
                    title="Dalej"
                    trailingIcon={<i className="ri-arrow-right-s-line" />}
                    onClick={() => navigate("/form/lo11/final")}
                    disabled={!firstName || !lastName || !addressId || !phone}
                />
            </div>
        </div>
    );
};

export default Page7;
