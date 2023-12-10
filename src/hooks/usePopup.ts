import { useContext } from "react";
import PopupContext from "../apple-design/components/Popup/PopupContext";

const usePopup = (content: SetPopupAction) => {
    const ctx = useContext(PopupContext);

    const loadedContent =
        content instanceof Function
            ? content((vis: boolean) => {
                  ctx.popupSetVisible(vis);
              })
            : content;

    return (visibility: boolean) => {
        const newPopup = content;

        const pop =
            newPopup instanceof Function
                ? newPopup((visibility: boolean) => {
                      ctx.popupSetVisible(visibility);
                      ctx.popupSetContent(
                          newPopup((vsb: boolean) => {
                              ctx.popupSetVisible(vsb);
                              ctx.popupSetContent(loadedContent);
                          })
                      );
                  })
                : newPopup;

        ctx.popupSetContent(pop);
        ctx.popupSetVisible(visibility);
    };
};

export type SetPopupAction =
    | React.ReactNode
    | ((setPopup: (visibility: boolean) => void) => React.ReactNode);

export default usePopup;
