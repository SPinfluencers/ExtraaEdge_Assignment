import React, { useEffect, useRef, useState } from "react";
import styles from "../Components/singlecard.module.css";
import { HeartOutlined } from "@ant-design/icons";
import { GlobalOutlined } from "@ant-design/icons";
import { MobileOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const ViewDetails = ({ item, styles }) => {
  return (
    <div className={styles.info}>
      <h4 key={item.id}>{item.name}</h4>
      <div className={styles.icon}>
        <MailOutlined />
        <p style={{ marginTop: "-5px" }}>{item.email}</p>
      </div>
      <div className={styles.icon}>
        <MobileOutlined /> <p style={{ marginTop: "-5px" }}>{item.phone}</p>
      </div>
      <div className={styles.icon}>
        <GlobalOutlined /> <p style={{ marginTop: "-5px" }}>{item.website}</p>
      </div>
    </div>
  );
};

const EditDetails = ({ item, handleEdit, id }) => {
  const details = useRef(item);
  useEffect(() => {
    
    return () => {
      const modifiedData = details.current;
      handleEdit({ id, modifiedData });
    };
  }, []);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name :-</label>
          <input
            type="text"
            name="name"
            defaultValue={item.name}
            onChange={(e) => (details.current.name = e.target.value)}
          />
        </div>  
        <br />
        <div>
          <label htmlFor="email">Email :- </label>
          <input
            type="email"
            name="email"
            defaultValue={item.email}
            onChange={(e) => (details.current.email = e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="phone">Phone :-</label>
          <input
            type="text"
            name="phone"
            defaultValue={item.phone}
            onChange={(e) => (details.current.phone = e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="website">Website :-</label>
          <input
            type="text"
            name="website"
            defaultValue={item.website}
            onChange={(e) => (details.current.website = e.target.value)}
          />
        </div>
        <br />
      </form>
    </div>
  );
};

export const SingleCard = ({ item, handleRemove, id, handleEdit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [edit, setEdit] = useState(false);

  const handleDelet = () => {
    handleRemove(id);
  };

  return (
    <div className={styles.container}>
      <img
        src="https://fs-assets-fs.s3-us-west-2.amazonaws.com/res/img/2021/04/bWjMbx6FQXuDmF2PJbEj_dummy.png"
        alt="img"
      />
      <div>
        {edit ? (
          <EditDetails item={item} handleEdit={handleEdit} id={id} />
        ) : (
          <ViewDetails item={item} styles={styles} />
        )}

        <div className={styles.box_1}>
          <HeartOutlined />
          <EditOutlined
            onClick={() => {
              setEdit(!edit);
            }}
          />
          <DeleteOutlined onClick={handleDelet} />
        </div>
      </div>
      <div></div>
    </div>
  );
};
