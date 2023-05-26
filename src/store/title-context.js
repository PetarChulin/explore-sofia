import React from "react";

export const TitleContext = React.createContext(
    {
        title: "",
        setTitle: () => {}
    }
);