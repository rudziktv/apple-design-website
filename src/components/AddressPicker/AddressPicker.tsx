// import { useRevalidator } from "react-router-dom";
import Button from "../../apple-design/components/Buttons/Button";
import "./AddressPicker.css";
import { PopupChildProps } from "../../apple-design/components/Popup/Popup";
import { Database } from "../../supabase/types/personal";
import AddressButton from "../AddressButton/AddressButton";
import AddressPopup from "../AddressPopup/AddressPopup";
import usePopup from "../../hooks/usePopup";

const AddressPicker = ({
    close,
    addresses,
    setAddressId,
}: AddressPickerProps) => {
    // const revalidator = useRevalidator();

    const addressPopup = usePopup((set) => (
        <AddressPopup close={() => set(false)} />
    ));

    return (
        <div className="address-picker">
            <div className="address-header">
                <span className="address-title">Wybierz adres</span>
                <Button
                    leadingIcon={<i className="ri-close-line" />}
                    buttonType="tertiary-text"
                    onClick={() => {
                        close();
                    }}
                />
            </div>
            <hr className="address-hr" />
            <div className="scrollable address-content">
                {addresses?.map((address) => (
                    <AddressButton
                        key={address.id}
                        city={address.city}
                        street={address.street || ""}
                        zipcode={address.zip_code}
                        building={address.building_number}
                        apartment={address.apartment_number || ""}
                        onClick={() => {
                            setAddressId?.(address.id);
                            close();
                            // revalidator.revalidate();
                        }}
                    />
                ))}
            </div>
            <div className="address-actions">
                <Button
                    title="Dodaj"
                    leadingIcon={<i className="ri-add-line" />}
                    onClick={() => {
                        addressPopup(true);
                    }}
                />
                {/* <Button
                    title="Zapisz"
                    leadingIcon={<i className="ri-save-line" />}
                /> */}
            </div>
        </div>
    );
};

export interface AddressPickerProps extends PopupChildProps {
    addresses?: Database["personal_data"]["Tables"]["address"]["Row"][];
    setAddressId?: (addressId: number) => void;
}

export default AddressPicker;
