import React, { useContext} from "react";
import { db } from "../firebase";
import { ref, remove } from "firebase/database";

import classes from "../css/Modal.module.css";
import { ConfirmContext } from "../store/confirm-context";
import { ModalContext } from "../store/modal-ctx";
import { InputContext } from "../store/input-context";

const Modal = (props) => {

  const {  setText, setSeverity, selected} = useContext(InputContext);
  const { setOpen } = useContext(ConfirmContext);

  const {modal, setModal} = useContext(ModalContext);

  const closeHandler = () => {
    setModal(null);
  };

  const handleDelete = (item) => {
    remove(ref(db, `/${item.uuid}`));
    console.log("deleting..." + item.uuid);
    setModal(false);
    setOpen(true);
    setSeverity("warning");
    setText(`You deleted '${selected}'!`);
    console.log(modal);
  };


  return (
    <div >
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={`${classes.modal} ${classes.card}`} >
        <header className={classes.header} >
          <h2>Delete item</h2>
        </header>
        <div className={classes.content}>
          <p>Delete '{props.name}', are you sure?</p>
        </div>
        <footer className={classes.actions}>
          <button
            className={classes.button}
            onClick={() => {handleDelete(props.id); closeHandler();}}
          >
            Yes
          </button>
          <button className={classes.button} onClick={props.onClose}>
            No
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
