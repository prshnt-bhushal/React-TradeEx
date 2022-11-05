import React from 'react'
import './component_css/SelectOptions.css'

function SelectOptions() {
  return (
    <select name="category" id="select-category" >
        <option value="none" selected disabled hidden>Category</option>
        <option value="option 1">clothes</option>
        <option value="option 2">Books</option>
        <option value="option 3">others</option>
    </select>
  )
}

export default SelectOptions