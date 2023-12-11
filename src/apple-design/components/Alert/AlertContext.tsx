import { createContext } from "react";
import { AlertActionProps } from "./AlertAction";

interface IAlertContext {
    alertVisible: boolean;
    alertSetVisible: (value: boolean) => void;
    alertSetMessage: (value: string) => void;
    alertSetTitle: (value: string) => void;
    alertSetActions: (value: AlertActionProps[]) => void;
    alertSetOrientation: (value: Orientation) => void;
}

const AlertContext = createContext<IAlertContext>({
    alertVisible: false,
    alertSetVisible: () => {},
    alertSetMessage: () => {},
    alertSetTitle: () => {},
    alertSetActions: () => {},
    alertSetOrientation: () => {},
});

export type Orientation = "vertical" | "horizontal";

export default AlertContext;
