import React, { useState } from 'react'

const initialState = {
  title: '',
  type: 'pro',
  itemValue: 10,
}

async function addItem (e, setData, onSubmit, data, type) {
  await addItemPromise(e, onSubmit, data, type)
  setData({ ...initialState})
}

const addItemPromise = (e, onSubmit, data, type) => {
  return new Promise(resolve => {
    e.preventDefault()
    onSubmit({ ...data, type })
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
      <div className="form__buttons">
        <button className="form__button" type="submit" id="formSubmitItem" onClick={(e) => addItem(e, setData, props.onSubmit, data, 'pro')}>Add to pros</button>
        <button className="form__button" type="submit" id="formSubmitItem" onClick={(e) => addItem(e, setData, props.onSubmit, data, 'con')}>Add to cons</button>
      </div>
    </form>
  )
}

export default CreateNewItem