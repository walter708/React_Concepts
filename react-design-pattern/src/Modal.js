import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  overflow:auto;
  background-color:rgba(0 , 0 , 0 , 0.5);
`;

const ModalBody = styled.div`
   background-color:#ffff;
   border-radius:.5rem;
   padding:2rem;
   margin:10% auto;
   max-width: 70rem;
   width:100%
   
`;

export const Modal = ({children})=>{
  const [show , setShow] = useState(false)
  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (<ModalBackground onClick={() => setShow(false)} >
                  <ModalBody onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setShow(false)}>Hide Modal</button>
                    {children}
                  </ModalBody>
                </ModalBackground>)}
  </>
  )
}