import "./AddressButton.css";

const AddressButton = ({
    street,
    building,
    apartment,
    city,
    zipcode,
    ...props
}: AddressButtonProps) => {
    const nr = apartment ? `${building}/${apartment}` : building;

    return (
        <button className="button button-adress" {...props}>
            {street ? (
                <>
                    <span>
                        ul. {street} {nr}
                    </span>
                    <span>
                        {city} {zipcode}
                    </span>
                </>
            ) : (
                <>
                    <span>
                        {city} {nr}
                    </span>
                    <span>
                        {city} {zipcode}
                    </span>
                </>
            )}
        </button>
    );
};

export interface AddressButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    street?: string;
    building: string;
    apartment?: string;
    city: string;
    zipcode: string;
}

export default AddressButton;
