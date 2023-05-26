import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../css/Card.module.css";
import { EditContext } from "../store/isedit-context";
import { FirstContext } from "../store/first-context";
import { TitleContext } from "../store/title-context";
import { UuidContext } from "../store/uuid-context";
import { ImageContext } from "../store/image-context";
import { Swiper, SwiperSlide } from "swiper/react";
import setBodyColor from '../setBodyColor'

import "swiper/css";
import "swiper/css/pagination";
import "../css/swiper.css";

import { Navigation, Pagination } from "swiper";
import Modal from "./Modal";
import { ModalContext } from "../store/modal-ctx";
import { SelectedContext } from "../store/selected-ctx";
import { DescriptionContext } from "../store/description-ctx";
import { Slide } from "react-reveal";

function Card(props) {

  setBodyColor({color: "#aae3ce"});

  const { setIsEdit } = useContext(EditContext);
  const { setFirst } = useContext(FirstContext);
  const { setTitle } = useContext(TitleContext);
  const { setImage } = useContext(ImageContext);
  const { setDescription} = useContext(DescriptionContext);
  const { setTempUuid } = useContext(UuidContext);
  const {modal, setModal} = useContext(ModalContext);
  const {setSelected} = useContext(SelectedContext);

  const [selectedItem, setSelectedItem] = useState("");

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const navigate = useNavigate();

  const handleUpdate = (item) => {
    setIsEdit(true);
    setTempUuid(item.uuid);
    setFirst(item.first);
    setTitle(item.title);
    setSelected(item.title);
    setImage(item.image);
    setDescription(item.description)
    navigate("/inputForm");
  };

  const showDetails = (item) => {
    setTempUuid(item.uuid);
    setFirst(item.first);
    setTitle(item.title);
    setSelected(item.title);
    setImage(item.image);
    setDescription(item.description)
    console.log(item);
    navigate("/details");

  }

  const deleteModal = (item) => {
    setSelectedItem(item);
    setSelected(item.title);
    setModal(!modal);
    console.log(modal);
  };

  const closeHandler = () => {
    setModal(false);
  };

  return (
    <>
     {modal && <Modal id={selectedItem} name={selectedItem.title} onClose={closeHandler} />}
        <Swiper
        pagination={pagination}
        modules={[Pagination, Navigation]}
        slidesPerView={4}
        spaceBetween={5}
        centeredSlides={true}
        slideToClickedSlide={true}
      >
        {props.data.length > 0 ? (
          props.data.map((item) => (
            <SwiperSlide>
              <div key={item.id}
                className={`${classes.item} ${classes.boxshadow}`}
              >
                <div className={classes.image}>
                  <div className={classes.content}>
                    <>
                      <h1>
                        {item.title + " "}
                        <br></br>
                      </h1>
                      <h2>{item.first}</h2>
                      <img src={item.image} alt="" />
                      <div className={classes.actions}>
                        <button className={classes.editBtn} onClick={() => handleUpdate(item)}>
                          edit
                        </button>
                        <button className={classes.deleteBtn} onClick={() => deleteModal(item)}>
                          delete
                        </button>
                      <button onClick={() => showDetails(item)}>
                          details
                        </button>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <section className={classes.section}>
            <h1 style={{ textAlign: "center" }}>No places to show!</h1>
          </section>
        )}
       
      </Swiper>
    </>
  );
}
export default Card;
