import React from "react";
import styles from '../Components/singlecard.module.css'
import { HeartOutlined } from "@ant-design/icons";
import { GlobalOutlined } from "@ant-design/icons";
import { MobileOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'

export const SingleCard = ({item, handleRemove, id, handleEdit}) => {

    const handleDelet = () => {
        handleRemove(id)
    }

    return (
        <div className={styles.container}>
            <img src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-vector-business-man-icon-png-image_966609.jpg" alt="img" />
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
                <EditOutlined onClick={handleEdit}/>
                <DeleteOutlined onClick={handleDelet}/>
            </div>
            </div>

        </div>
    )
}