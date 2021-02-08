import { config } from 'process'
import React, { useState } from 'react'
import { Typography, MenuItem, Select, InputLabel } from '@material-ui/core'

const ConfigFormFieldSelect = ({
  name,
  // value,
  currentFieldObject,
  setConfig,
  currentSection,
  config,
}) => {

  const [formField, setFormField] = useState(currentFieldObject)

  const [value, setValue] = useState({
    text: "",

  });

  console.log(formField)

  const handleChange = (e) => {
    let name = e.target.name

    let newFormField = e.target.value
    setFormField({
      // ...formField,
      [name]: newFormField,
    })
    // console.log(config[currentSection][name])
    config[currentSection][name]['set'] = newFormField

    setConfig(config)
  }


  if (!currentFieldObject.set) return <div></div>

  return (
    <div className="configFormField">
      <input
        type="text"
        // default={currentFieldObject}
        placeholder={formField['set']}
        className="input"
        value={value.text}
        name={name}
        onChange={handleChange}
      />
      <InputLabel id="input-label">Saved</InputLabel>
      <Select
        labelId="input-label"
        id="config-select-comp"
        value={value.text}
        name={name}
        onChange={handleChange}
      >
        {currentFieldObject.options.map((option, index) => (
          <MenuItem key={'select' + option + index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}


export default ConfigFormFieldSelect
