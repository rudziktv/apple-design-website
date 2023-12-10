import { useRevalidator } from "react-router-dom";
import Button from "../../apple-design/components/Buttons/Button";
import TextInput from "../../apple-design/components/TextInput/TextInput";
import useFormField from "../../hooks/useFieldForm";
import "./AddressPopup.css";
import { PopupChildProps } from "../../apple-design/components/Popup/Popup";
import supabase, { supabasePersonal } from "../../supabase/supabase-client";
import {
    PolishNameCallbackRegex,
    ZipCodeCallbackRegex,
} from "../../security/validation/FormRegex";

const AddressPopup = ({ close }: AddressProps) => {
    const [street, setStreet] = useFormField("", PolishNameCallbackRegex);
    const [city, setCity] = useFormField("", PolishNameCallbackRegex);
    const [zip, setZip] = useFormField("", ZipCodeCallbackRegex);
    const [building, setBuilding] = useFormField("");
    const [apartment, setApartment] = useFormField("");

    const revalidator = useRevalidator();

    const submitAddress = async () => {
        if (!city || !zip || !building) {
            return;
        }

        const { data } = await supabase.auth.getSession();

        if (!data.session) {
            return;
        }

        await supabasePersonal.auth.setSession(data.session);
        const response = await supabasePersonal
            .from("address")
            .insert({
                city: city,
                street: street,
                zip_code: zip,
                building_number: building,
                apartment_number: apartment,
                user_id: data.session.user.id,
            })
            .select();

        console.log(response);

        revalidator.revalidate();
        // close();
    };

    return (
        <div className="address-popup">
            <div className="address-header">
                <span className="address-title">Dodaj adres</span>
                <Button
                    leadingIcon={<i className="ri-close-line" />}
                    buttonType="tertiary-text"
                    onClick={() => {
                        close();
                        console.log("close address popup");
                    }}
                />
            </div>
            <hr className="address-hr" />
            <div className="address-content">
                <div className="address-inline">
                    <TextInput
                        label="Ulica"
                        boxId="address-street"
                        value={street}
                        onTextChange={setStreet}
                    />
                    <TextInput
                        label="Nr. budynku"
                        boxId="address-building"
                        value={building}
                        onTextChange={setBuilding}
                    />
                    <TextInput
                        label="Nr. lokalu"
                        boxId="address-apartment"
                        value={apartment}
                        onTextChange={setApartment}
                    />
                </div>
                <div className="address-inline">
                    <TextInput
                        label="Miejscowość"
                        boxId="address-city"
                        value={city}
                        onTextChange={setCity}
                    />
                    <TextInput
                        label="Kod pocztowy"
                        boxId="address-zip"
                        placeholder="np. 00-000"
                        value={zip}
                        onTextChange={setZip}
                    />
                </div>
            </div>
            <div className="address-actions">
                <Button
                    title="Zapisz"
                    // buttonType="primary"
                    leadingIcon={<i className="ri-save-line" />}
                    onClick={submitAddress}
                />
            </div>
        </div>
    );
};

export interface AddressProps extends PopupChildProps {
    setAddressId?: (id: number) => void;
}

export default AddressPopup;
