import Card from "./Components/Card";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import InputForm from "./Components/InputForm";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./Components/ConfirmMessage";
import { ConfirmContext } from "./store/confirm-context";
import { ModalContext } from "./store/modal-ctx";
import Details from "./Components/Details";
import HomePage from "./Components/Home";
import { InputProvider } from "./store/input-context";

function App() {
  const [todos, setTodos] = useState([
    { first: "", title: "", image: "", uuid: "", description: "" },
  ]);
 
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  
  const value = { open, setOpen };
  const modValue = { modal, setModal };

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      console.log(data);
      if (data !== null) {
        Object.values(data).map(
          ({ first, title, image, uuid, description }) => {
            setTodos((oldArray) => [
              ...oldArray,
              { first, title, image, uuid, description },
            ]);
          }
        );
      }
    });
  }, []);

  return (
    <>
      <InputProvider>
        <ConfirmContext.Provider value={value}>
          <ModalContext.Provider value={modValue}>
            <div style={{ marginTop: "100px" }}>
              <Navigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/inputForm" element={<InputForm />} />
                <Route path="/all" element={<Card data={todos} />} />
                <Route
                  path="/details"
                  element={<Details data={todos} />}
                />
              </Routes>
            </div>
            {open && <Confirmation />}
          </ModalContext.Provider>
        </ConfirmContext.Provider>
      </InputProvider>
    </>
  );
}

export default App;
