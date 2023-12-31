import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    /* setCategories(categories => [...categories, inputValue]); */
    onNewCategory(newInputValue);
    setInputValue('');
  }

  return (
    /* <form onSubmit={ (event) => onSubmit(event) }> */
    <form onSubmit={ onSubmit }>
      <input
        type = "text"
        placeholder = 'Buscar gifs'
        value = { inputValue }
        onChange= { (event) => onInputChange(event) }
      />
    </form>
  )
}
