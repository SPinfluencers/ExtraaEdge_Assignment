import React from "react";
import styles from '../Components/singlecard.module.css'
import { HeartOutlined } from "@ant-design/icons";
import { GlobalOutlined } from "@ant-design/icons";
import { MobileOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const SingleCard = ({item, handleRemove, id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDelet = () => {
        handleRemove(id)
    }

    return (
        <div className={styles.container}>
            <img src="https://fs-assets-fs.s3-us-west-2.amazonaws.com/res/img/2021/04/bWjMbx6FQXuDmF2PJbEj_dummy.png" alt="img" />
            <div className={styles.info}>
               <h4 key={item.id}>{item.name}</h4>
               <div className={styles.icon}>
                <MailOutlined /><p style={{marginTop:'-5px'}}>{item.email}</p>
            </div>
            <div className={styles.icon}>
              <MobileOutlined /> <p style={{marginTop:'-5px'}}>{item.phone}</p>
            </div>
            <div className={styles.icon}>
              <GlobalOutlined /> <p style={{marginTop:'-5px'}}>{item.website}</p>
            </div>
            <div className={styles.box_1}>
                <HeartOutlined /> 
                <NavLink to='/edited'><EditOutlined onClick={onOpen}/></NavLink>
                <DeleteOutlined onClick={handleDelet}/>
            </div>
            </div>
            <div>

            {/* <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay /> */}

            {/* <ModalContent border='1px solid red' width='40%' margin='auto' backgroundColor='white'>
                <ModalHeader>Basic Modal</ModalHeader> */}
                
                {/* <ModalBody> */}
                    {/* <form>
                        <div>
                            <label htmlFor="name">Name :</label>
                            <input type="text" name="name" value={data.name} onChange={e=> setData({...data, name: e.target.value})} />
                        </div>
                    </form> */}
                {/* </ModalBody> */}

                {/* <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                       cancle
                    </Button>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                       ok
                    </Button>
                </ModalFooter> */}
                {/* </ModalContent> */}
                 
            {/* </Modal> */}

            </div>

        </div>
    )
}