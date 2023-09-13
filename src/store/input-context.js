import { createContext, useState } from "react";

export const InputContext = createContext({
  first: "",
  setFirst: () => {},
  title: "",
  setTitle: () => {},
  image: "",
  setImage: () => {},
  description: "",
  setDescription: () => {},
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
//   open: false,
//   setOpen: () => {}
});

export const InputProvider = ({ children }) => {

  const [first, setFirst] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
//   const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);
  const [severity, setSeverity] = useState(false);
  const [selected, setSelected] = useState("");

  const value = {
    first,
    setFirst,
    title,
    setTitle,
    image,
    setImage,
    description,
    setDescription,
    isEdit,
    setIsEdit,
    tempUuid,
    setTempUuid,
    // open,
    // setOpen,
    text,
    setText,
    severity,
    setSeverity,
    selected,
    setSelected
  };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
