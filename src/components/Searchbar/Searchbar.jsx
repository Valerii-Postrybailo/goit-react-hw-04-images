import React from 'react';
import { useState } from "react";
import PropTypes from "prop-types";
import {Header, SearchingForm, SearchingFormBtn, BtnLabel, SearchingFormInput, } from "./Searchbar.styled"

export  default function Searchbar ({onSubmit, isLoading}) {

  const [inputValue, setinputValue] = useState("");

  // state = { 
  //   inputValue: "",
  // }

  // handleSubmit = evt =>{
  //   evt.preventDefault();
  //   this.setState({
  //     items: [],
  //     inputValue: evt.target.elements.pictureSearch.value,
  //     page: 1,
  //   })
  //   evt.target.reset()
  // }

  const handleInputChange = evt => {
    setinputValue( evt.target.value)
    // evt.preventDefault();
    // console.log(evt.target.elements.pictureSearch.value)
    // this.setState({inputValue: evt.target.elements.pictureSearch.value})
  }

  const reset = () => {
    setinputValue("")
  }

  
  // handleInputChange = event => {
  //   console.log(this.state.inputValue)
  //   this.setState({
  //     [event.target]: event.target
  //   })
  // }

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(inputValue);
    reset();
  }


    return(
      <Header>
        <SearchingForm onSubmit = {handleSubmit} >

          <SearchingFormBtn type="submit" disabled = {isLoading}>
            <BtnLabel>Search</BtnLabel>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                  <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7zm-3-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/>
              </svg>
          </SearchingFormBtn>
      
          <SearchingFormInput
            name ="pictureSearch"
            type="text"
            value = {inputValue}
            onChange = {handleInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchingForm>
      </Header>
    )
  }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}




