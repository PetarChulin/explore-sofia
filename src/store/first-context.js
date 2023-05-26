import React from "react";

export const FirstContext = React.createContext(
    {
        first: "",
        setFirst: () => {}
    }
);