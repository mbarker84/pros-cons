import React, { useState } from 'react'

const addItem = (e, onSubmit, data) => {
  e.preventDefault()
  onSubmit(data)
}

const selectType = (e, setData, data, type) => {
  if (e.target.value === 'on') {
    setData({ ...data, type })
  }
}

const CreateNewItem = (props) => {
  const [data, setData] = useState(null)

  return (
    <form>
      <div>
        <label htmlFor="formAddItem">Add an item</label>
        <input type="text" id="formAddItem" onChange={(event) => setData({ ...data, title: event.target.value })} />
      </div>
      <div>
        <label htmlFor="formItemValue">Value</label>
        <input type="number" id="formItemValue" />
      </div>
      <fieldset>
        <legend>Category</legend>
        <div>
          <input type="radio" id="formRadioPro" name="itemType" onChange={(e) => selectType(e, setData, data, 'pro')} />
          <label htmlFor="formRadioPro">Pro</label>
        </div>
        <div>
          <input type="radio" id="formRadioCon" name="itemType" onChange={(e) => selectType(e, setData, data, 'con')} />
          <label htmlFor="formRadioCon">Con</label>
        </div>
      </fieldset>
      <button type="submit" id="formSubmitItem" onClick={(e) => addItem(e, props.onSubmit, data)}>Add item</button>
    </form>
  )
}

export default CreateNewItem