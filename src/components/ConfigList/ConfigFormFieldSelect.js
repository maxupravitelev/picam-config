import { config } from 'process'
import React, { useState } from 'react'
// import { Typography } from "@material-ui/core";

const ConfigFormFieldSelect = ({ name, value, currentFieldValue, setConfig, currentSection, config }) => {
 
  const [formField, setFormField] = useState(currentFieldValue)


  const handleFormField = (e) => {
    let name = e.target.name

    let newFormField = e.target.value
    setFormField({
      ...formField,
      [name]: newFormField,
    })
    // console.log(config[currentSection][name])
    config[currentSection][name]["set"] = newFormField

    setConfig(config)

  }

  return (
    <div className="configFormField">
      <input
        type="text"
        // default={currentFieldValue}
        placeholder={currentFieldValue.set}
        className="input"
        value={value[value]}
        name={name}
        onChange={handleFormField}
      />
    </div>
  )
}

export default ConfigFormFieldSelect
