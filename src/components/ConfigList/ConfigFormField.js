import React, { useState } from 'react'
// import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import { updateConfig } from '../../reducers/configReducer'


const ConfigFormField = ({ name, currentFieldValue, currentSection }) => {

  const [formField, setFormField] = useState(currentFieldValue)

  const dispatch = useDispatch()
  let config = useSelector((state) => state.config)

  let formFieldType = 'text'

  if (typeof currentFieldValue == 'number') {
    formFieldType = 'number'

  }
  const handleFormField = (e) => {
    let newFormField = e.target.value

    if (typeof currentFieldValue == 'number') {
      newFormField = parseInt(newFormField)
    }

    setFormField({
      ...formField,
      [name]: newFormField,
    })
    console.log(config)

    config.content[currentSection][name] = newFormField
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
