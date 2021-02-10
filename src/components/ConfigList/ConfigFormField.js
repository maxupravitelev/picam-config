import { config } from 'process'
import React, { useState } from 'react'
// import { Typography } from "@material-ui/core";

const ConfigFormField = ({ name, currentFieldValue, setConfig, currentSection, config }) => {

  const [formField, setFormField] = useState(currentFieldValue)


  let formFieldType = 'text'

  if (typeof currentFieldValue == 'number') {
    formFieldType = 'number'

  }
  const handleFormField = (e) => {
    console.log(formField);

    let newFormField = e.target.value

    if (typeof currentFieldValue == 'number') {
      newFormField = parseInt(newFormField)
    }

    setFormField({
      ...formField,
      [name]: newFormField,
    })
    config[currentSection][name] = newFormField

    setConfig(config)

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
