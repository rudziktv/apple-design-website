import { createContext } from "react";

interface IPopupContext {
    popupVisible: boolean;
    popupContent: React.ReactNode;
    popupSetVisible: (value: boolean) => void;
    popupSetContent: (value: React.ReactNode) => void;
}

const PopupContext = createContext<IPopupContext>({
    popupVisible: false,
    popupContent: null,
    popupSetVisible: () => {},
    popupSetContent: () => {},
});

export default PopupContext;
