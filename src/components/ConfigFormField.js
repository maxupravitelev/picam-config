import { config } from 'process'
import React, { useState } from 'react'
// import { Typography } from "@material-ui/core";

const ConfigFormField = ({ name, value, currentFieldValue, setConfig, currentSection, config }) => {
 
  const [formField, setFormField] = useState(currentFieldValue)


  let formFieldType = 'text'

  if (typeof currentFieldValue == 'number') {
    // console.log(currentFieldValue)
    formFieldType = 'number'
  }


  const handleFormField = (e) => {
    let name = e.target.name
    console.log(formField);

    let newFormField = e.target.value
    setFormField({
      ...formField,
      [name]: newFormField,
    })
    // console.log(config[currentSection][name])
    config[currentSection][name] = newFormField

    setConfig(config)

  }

  console.log(config)

  return (
    <div className="configFormField">
      <input
        type={formFieldType}
        // default={currentFieldValue}
        placeholder={currentFieldValue}
        className="input"
        value={value[value]}
        name={name}
        onChange={handleFormField}
      />
    </div>
  )
}

export default ConfigFormField
