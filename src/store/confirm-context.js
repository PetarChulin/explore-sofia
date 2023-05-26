import React from "react";

export const ConfirmContext = React.createContext(
    {
        open: false,
        setOpen: () => {}
    }
);