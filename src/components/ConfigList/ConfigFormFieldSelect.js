import { config } from 'process'
import React, { useState } from 'react'
import { Typography, MenuItem, Select, InputLabel } from '@material-ui/core'

const ConfigFormFieldSelect = ({
  name,
  currentFieldObject,
  setConfig,
  currentSection,
  config,
}) => {

  const [formField, setFormField] = useState(currentFieldObject)

  const [value, setValue] = useState({
    text: "",

  });


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


  const handleCommaInArray = (option) => {

    let commaSeparatedValue = ''

    if ((option.length) && (typeof option[0] == 'number')) {
      for (let i = 0; i < option.length; i++) {
        if (commaSeparatedValue.length < 1) {
          commaSeparatedValue += option[0]
        } else {
          commaSeparatedValue += ',' + option[i]

        }
      }
      return commaSeparatedValue
    }
    return option
  }

  if (!currentFieldObject.set) return <div></div>

  // console.log(formField)

  return (
    <div className="configFormField">
      <input
        type="text"
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
            {handleCommaInArray(option)}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}


export default ConfigFormFieldSelect
