import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, update } from "firebase/database";
import { useContext, useEffect } from "react";
import { FirstContext } from "../store/first-context";
import { TitleContext } from "../store/title-context";
import { EditContext } from "../store/isedit-context";
import { ImageContext } from "../store/image-context";
import { UuidContext } from "../store/uuid-context";
import { useNavigate } from "react-router-dom";
import { ConfirmContext } from "../store/confirm-context";
import { TextContext } from "../store/text-ctx";
import { SeverityContext } from "../store/severity-ctx";
import { SelectedContext } from "../store/selected-ctx";
import { DescriptionContext } from "../store/description-ctx";
import setBodyColor from '../setBodyColor'


function InputForm() {

  setBodyColor({color: "#ddebe5"});


  const { first, setFirst } = useContext(FirstContext);
  const { title, setTitle } = useContext(TitleContext);
  const { image, setImage } = useContext(ImageContext);
  const {description, setDescription} = useContext(DescriptionContext);
  const { isEdit, setIsEdit } = useContext(EditContext);
  const { tempUuid } = useContext(UuidContext);
  const { open, setOpen } = useContext(ConfirmContext);
  const { text, setText } = useContext(TextContext);
  const { setSeverity } = useContext(SeverityContext);
  const { selected } = useContext(SelectedContext);

  const navigate = useNavigate();

  const handleTodoChange = (e) => {
    setFirst(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  let itemName = title;

  const writeToDatabase = (e) => {
    let additionSuccess = `You added '${itemName}' successfully!`;
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      first,
      title,
      image,
      description,
      uuid,
    });

    setFirst("");
    setTitle("");
    setImage("");
    setDescription("");
    setOpen(true);
    setSeverity("success");
    setText(additionSuccess);
    navigate("/all");
    console.log(open);
    console.log(text);
  };

  const handleSubmitChange = (e) => {
    let updateSuccess = `You updated '${selected}' successfully!`;

    e.preventDefault();
    update(ref(db, `/${tempUuid}`), {
      first,
      title,
      image,
      description,
      uuid: tempUuid,
    });
    console.log(tempUuid);

    setFirst("");
    setTitle("");
    setImage("");
    setDescription("");
    setIsEdit(false);
    setOpen(true);
    setSeverity("info");
    setText(updateSuccess);
    navigate("/all");
  };

  return (
      <form onSubmit={writeToDatabase}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          placeholder="Some title" 
          onChange={handleTitleChange}
        />
        <label>Location</label>
        <input type="text" required value={first} placeholder="Some address" onChange={handleTodoChange} />
        <label>Image</label>
        <input  type="url" required value={image} placeholder="Some image from Sofia" onChange={handleImageChange} />
        <label>Description</label>
        <input type="text" required minLength={10} maxLength={120} value={description} placeholder="Short description" onChange={handleDescriptionChange}></input>
        {isEdit ? (
          <div style={{ textAlign: "center" }}>
            <button onClick={handleSubmitChange}>submit change</button>
            <button
              onClick={() => {
                setIsEdit(false);
                setFirst("");
                setTitle("");
                setImage("");
                navigate("/all");
              }}
            >
              close
            </button>
          </div>
        ) : (
          <>
            <button>submit</button>
            <button
              onClick={() => {
                navigate("/all");
              }}
            >
              Back
            </button>
          </>
        )}
      </form>
  );
}
export default InputForm;
