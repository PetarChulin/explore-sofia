import React from "react";

export const UuidContext = React.createContext(
    {
        tempUuid: "",
        setTempUuid: () => {}
    }
);