import { useContext } from "react";
import setBodyColor from '../setBodyColor'
import { InputContext } from "../store/input-context";


import classes from "../css/Details.module.css";
import { useNavigate } from "react-router-dom";

function Details() {

  setBodyColor({color: "#839fa8"});

  const  {
    first,
    setFirst,
    title,
    setTitle,
    image,
    setImage,
    description,
    setDescription,
  } = useContext(InputContext);

  const navigate = useNavigate();

  const handleBack = () => {
    setFirst("");
    setTitle("");
    setImage("");
    setDescription("");
    navigate("/all");
  };

  return (
    <div className={classes.box}>
      {first}
      <div className={classes.title}>{title}</div>
      <div className={classes.image}>
        <img src={image} />
      </div>
      <div className={classes.description}>{description}</div>
      <button className={classes.button} onClick={handleBack}>
        Back
      </button>
    </div>
  );
}
export default Details;
