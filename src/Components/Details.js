import { useContext, useEffect, useState } from "react";
import { FirstContext } from "../store/first-context";
import { TitleContext } from "../store/title-context";
import { ImageContext } from "../store/image-context";
import { UuidContext } from "../store/uuid-context";
import setBodyColor from '../setBodyColor'


import classes from "../css/Details.module.css";
import { DescriptionContext } from "../store/description-ctx";
import { useNavigate } from "react-router-dom";

function Details() {

  setBodyColor({color: "#839fa8"});


  const { first, setFirst } = useContext(FirstContext);
  const { title, setTitle } = useContext(TitleContext);
  const { image, setImage } = useContext(ImageContext);
  const { description, setDescription } = useContext(DescriptionContext);

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
