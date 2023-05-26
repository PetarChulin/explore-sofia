import React from "react";

export const DescriptionContext = React.createContext(
    {
        description: "",
        setDescription: () => {}
    }
);