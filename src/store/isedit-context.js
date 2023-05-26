import React from "react";

export const EditContext = React.createContext(
    {
        isEdit: false,
        setIsEdit: () => {}
    }
);