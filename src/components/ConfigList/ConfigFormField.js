import React, { useState } from 'react'
// import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import { updateConfig } from '../../reducers/configReducer'


const ConfigFormField = ({ name, currentFieldValue, currentSection }) => {

  const [formField, setFormField] = useState(currentFieldValue)

  const dispatch = useDispatch()
  
  let counter = useSelector((state) => state.config.length)
  let config = useSelector((state) => state.config[counter - 1])

  let formFieldType = 'text'

  if (typeof currentFieldValue == 'number') {
    formFieldType = 'number'

  }
  const handleFormField = (e) => {
    let newFormField = e.target.value

    if (typeof currentFieldValue == 'number') {
      newFormField = parseFloat(newFormField)
    }

    let updatedFormField = {
      ...formField,
      [name]: newFormField,
    }

    setFormField(updatedFormField)

    config[currentSection][name] = newFormField
    dispatch(updateConfig(config))

  }
  return (
    <div className="configFormField">
      <input
        type={formFieldType}
        placeholder={currentFieldValue}
        className="input"
        onChange={handleFormField}
      />
    </div>
  )
}

export default ConfigFormField
