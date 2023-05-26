import Card from "./Components/Card";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { FirstContext } from "./store/first-context";
import { TitleContext } from "./store/title-context";
import { EditContext } from "./store/isedit-context";
import { ImageContext } from "./store/image-context";
import { UuidContext } from "./store/uuid-context";
import InputForm from "./Components/InputForm";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./Components/ConfirmMessage";
import { ConfirmContext } from "./store/confirm-context";
import { TextContext } from "./store/text-ctx";
import { SeverityContext } from "./store/severity-ctx";
import { ModalContext } from "./store/modal-ctx";
import { SelectedContext } from "./store/selected-ctx";
import { DescriptionContext } from "./store/description-ctx";
import Details from "./Components/Details";
import HomePage from "./Components/Home";

function App() {
  const [first, setFirst] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([
    { first: "", title: "", image: "", uuid: "", description: "" },
  ]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const firstValue = { first, setFirst };
  const titletValue = { title, setTitle };
  const isEditValue = { isEdit, setIsEdit };
  const imageValue = { image, setImage };
  const uuidValue = { tempUuid, setTempUuid };
  const descValue = {description, setDescription};


  const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);
  const [severity, setSeverity] = useState(false);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("");

  const value = { open, setOpen };
  const textValue = { text, setText };
  const sevValue = { severity, setSeverity };
  const modValue = { modal, setModal };
  const selValue = { selected, setSelected };

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      console.log(data);
      if (data !== null) {
        Object.values(data).map(({ first, title, image, uuid, description }) => {
          setTodos((oldArray) => [...oldArray, { first, title, image, uuid, description }]);
        });
      }
    });
  }, []);

  return (
    <>
      <EditContext.Provider value={isEditValue}>
        <TitleContext.Provider value={titletValue}>
          <FirstContext.Provider value={firstValue}>
            <ImageContext.Provider value={imageValue}>
              <UuidContext.Provider value={uuidValue}>
                <ConfirmContext.Provider value={value}>
                  <TextContext.Provider value={textValue}>
                    <SeverityContext.Provider value={sevValue}>
                      <ModalContext.Provider value={modValue}>
                        <SelectedContext.Provider value={selValue}>
                          <DescriptionContext.Provider value={descValue}>
                          <div style={{ marginTop: "100px" }}>
                            <Navigation />
                            <Routes>
                            <Route
                                path="/"
                                element={<HomePage />}
                              />
                              <Route
                                path="/inputForm"
                                element={<InputForm />}
                              />
                              <Route
                                path="/all"
                                element={<Card data={todos} />}
                              />
                              <Route
                                path="/details"
                                element={<Details data={todos} />}
                              />
                            </Routes>
                          </div>
                          {open && <Confirmation />}
                          </DescriptionContext.Provider>
                        </SelectedContext.Provider>
                      </ModalContext.Provider>
                    </SeverityContext.Provider>
                  </TextContext.Provider>
                </ConfirmContext.Provider>
              </UuidContext.Provider>
            </ImageContext.Provider>
          </FirstContext.Provider>
        </TitleContext.Provider>
      </EditContext.Provider>
    </>
  );
}

export default App;
