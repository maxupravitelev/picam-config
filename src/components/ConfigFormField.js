import React from 'react'
// import { Typography } from "@material-ui/core";

const ConfigFormField = ({
  fieldValue,
  handleFormField,
  name,
  value,
  currentFieldValue,
}) => {
  let formFieldType = 'text'

  if (typeof fieldValue == 'number') {
    formFieldType = 'number'
  }

  return (
    <div className="configFormField">
      <input
        type={formFieldType}
        default={currentFieldValue}
        placeholder={currentFieldValue}
        className="input"
        formField={value}
        name={name}
        onChange={handleFormField}
      />
    </div>
  )
}

export default ConfigFormField
