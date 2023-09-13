import { createContext, useState } from "react";

export const OthersContext = createContext({
  isEdit: false,
  setIsEdit: () => {},
  tempUuid: "",
  setTempUuid: () => {},
  selected: "",
  setSelected: () => {},
  severity: "",
  setSeverity: () => {},
  text: "",
  setText: () => {},
  open: false,
  setOpen: () => {},
});

export const OthersProvider = ({ children }) => {

  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);
  const [severity, setSeverity] = useState(false);
  const [selected, setSelected] = useState("");

  const value = {
    isEdit,
    setIsEdit,
    tempUuid,
    setTempUuid,
    open,
    setOpen,
    text,
    setText,
    severity,
    setSeverity,
    selected,
    setSelected
  };

  return (
    <OthersContext.Provider value={value}>{children}</OthersContext.Provider>
  );
};
