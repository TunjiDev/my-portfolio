import React from "react";
import { Dialog, DialogContent } from "@/components/ui/popup/dialog";

export interface PopupType {
  setPopupOpen: (popupOpen: boolean) => void;
  popupOpen: boolean;
  children?: JSX.Element | JSX.Element[];
}

function Popup({ setPopupOpen, popupOpen, children }: PopupType) {
  return (
    <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
