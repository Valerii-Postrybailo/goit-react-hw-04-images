import React from "react"
import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom"
import { ModalOvarlay, ModalWindow} from "./Modal.styled";

const modalReact = document.querySelector("#modal-root")

export default function Modal ({onClose, url}) {

  // componentDidMount(){
  //   window.addEventListener("keydown", this.handleKeyDown)
  // }

  // componentWillUnmount(){
  //   window.removeEventListener("keydown", this.handleKeyDown)
  // }

  useEffect(() => {
    const handleKeyDown = evt =>{
      if(evt.code === "Escape"){
        onClose()
      }
    }

    // handleBackdropClick();

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  },[onClose])
  
  // const handleKeyDown = evt =>{
  //   if(evt.code === "Escape"){
  //     onClose()
  //   }
  // }

  const handleBackdropClick = evt => {
    console.log(evt)
    if(evt.currentTarget === evt.target){
      onClose()
    }
  }
  
  
  // useEffect(() => {
  //   const onTap = (event) => {
  //       if (event.code === "Escape") {
  //     onCloseModal();
  //   }
  // };
      
  //   window.addEventListener("keydown", onTap);
  
  //   return () => {
  //     window.removeEventListener("keydown", onTap);
  //   };
  // }, [this.props.onClose()]);

  
    return createPortal(
      <ModalOvarlay onClick = {handleBackdropClick}>
        <ModalWindow >
          <img src={url} alt=""
            style={{width:"900px"}}
          />
        </ModalWindow>
      </ModalOvarlay>,
      modalReact
    )
  }

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
}
