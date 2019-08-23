import React, { useState } from 'react'

const initialState = {
  title: '',
  type: 'pro',
  itemValue: 10,
}

async function addItem (e, setData, onSubmit, data) {
  await addItemPromise(e, onSubmit, data)
  setData({ ...initialState })
}

const addItemPromise = (e, onSubmit, data) => {
  return new Promise(resolve => {
    e.preventDefault()
    onSubmit(data)
    resolve('resolved')
  })
}

const selectType = (e, setData, data, type) => {
  if (e.target.value === 'on') {
    setData({ ...data, type })
  }
}

const CreateNewItem = (props) => {
  const [data, setData] = useState(initialState)

  return (
    <form className="form">
      <div>
        <label htmlFor="formAddItem">Add an item</label>
        <input type="text" id="formAddItem" onChange={(event) => setData({ ...data, title: event.target.value })} value={data.title} />
      </div>
      <div>
        <label htmlFor="formItemValue">Value</label>
        <input type="number" id="formItemValue" onChange={(event) => setData({ ...data, itemValue: event.target.value })} value={data.itemValue} />
      </div>
      <fieldset className="form__radio-section">
        <legend>Category</legend>
        <div className="form__rbutton-group">
          <input type="radio" id="formRadioPro" name="itemType" onChange={(e) => selectType(e, setData, data, 'pro')} checked={data.type === 'pro'} />
          <label htmlFor="formRadioPro">Pro</label>
        </div>
        <div className="form__rbutton-group">
          <input type="radio" id="formRadioCon" name="itemType" onChange={(e) => selectType(e, setData, data, 'con')} checked={data.type === 'con'} />
          <label htmlFor="formRadioCon">Con</label>
        </div>
      </fieldset>
      <button className="form__button" type="submit" id="formSubmitItem" onClick={(e) => addItem(e, setData, props.onSubmit, data)}>Add item</button>
    </form>
  )
}

export default CreateNewItem