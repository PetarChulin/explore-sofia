import React from "react";

export const ModalContext = React.createContext(
    {
        modal: false,
        setModal: () => {}
    }
);