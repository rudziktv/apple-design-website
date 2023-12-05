import { useContext } from "react";
import { AlertActionProps } from "../apple-design/components/Alert/AlertAction";
import AlertContext from "../apple-design/components/Alert/AlertContext";

/**
 * Hook to set the content and visibility of alert
 * @param title Title of the alert
 * @param message Message of the alert
 * @param actions Actions on bottom of alert
 * @returns Function which can set the visibility of the alert
 */
const useAlert = (
    title: string,
    message: string,
    actions: (setVisible: (value: boolean) => void) => AlertActionProps[]
) => {
    const alert = useContext(AlertContext);

    alert.alertSetTitle(title);
    alert.alertSetMessage(message);
    alert.alertSetActions(actions(alert.alertSetVisible));

    return alert.alertSetVisible;
};

export default useAlert;