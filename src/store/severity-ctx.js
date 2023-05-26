import React from "react";

export const SeverityContext = React.createContext(
    {
        severity: "",
        setSeverity: () => {}
    }
);