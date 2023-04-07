// import React from 'react'
// import { useState } from 'react'
// // import { AiOutlineClose } from 'react-icons/ai'

// export const SingleCard = ({el,ind,len,handleClick,setVal}) => {
//  const handleRemove = (event,ind)=>{
//      handleClick(ind)
//  }
//   return (
//           <div>
//                 <div key={ind} style={{border:"1px solid teal"}}>
//                    {len>3? <div style={{display:"flex"  ,justifyContent:"end" }} >
//                     <AiOutlineClose onClick={(event)=>handleRemove(event,ind)} color={"white"} fontSize={"30px"}  />
//                     </div>:""}
//                     <div>
//                     <img height="150px" src="https://fs-assets-fs.s3-us-west-2.amazonaws.com/res/img/2021/04/bWjMbx6FQXuDmF2PJbEj_dummy.png" alt="bishnu" />
//                     </div>
//                     <h3 style={{color:"white"}}>Name: {el.name}</h3>
//                     <p style={{color:"white"}}>Email: {el.email}</p>
//                     <h4 style={{color:"white"}}>City: {el.address.city}</h4>
//                 </div>
//     </div>
//   )
// }