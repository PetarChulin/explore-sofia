import classes from "../css/Navigation.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "../css/Home.module.css"
import { FirstContext } from "../store/first-context";
import { TitleContext } from "../store/title-context";
import { ImageContext } from "../store/image-context";
import { DescriptionContext } from "../store/description-ctx";

function Navigation() {

  const { first, setFirst } = useContext(FirstContext);
  const { title, setTitle } = useContext(TitleContext);
  const { image, setImage } = useContext(ImageContext);
  const {description, setDescription} = useContext(DescriptionContext);

  const clearFields = () => {

    setFirst("");
    setTitle("");
    setImage("");
    setDescription("");
  }

    return(
        <header className={classes.header}>
            <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all">Items</Link>
          </li>
          <li>
            <Link to="/inputForm" onClick={clearFields} >New item</Link>
          </li>
          <li>
            <Link to="/details"></Link>
          </li>
        </ul>
      </nav>
        </header>
    )
}
export default Navigation;