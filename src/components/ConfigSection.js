import React, { useState, useEffect } from 'react'
// import {
//     Typography
// } from "@material-ui/core"

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  // TextField,
  // Typography,
  // Button,
  // List,
  // ListItem,
  // Accordion,
  // AccordionSummary,
  // AccordionDetails,
} from '@material-ui/core'

import ConfigFormField from '../components/ConfigFormField'

const ConfigSection = ({ config, configSection, setConfig }) => {
  let initFormFields = {
    // awb_gains: '',
  }

  const [formFields, setFormFields] = useState(initFormFields)
  const [configKeys, setConfigKeys] = useState(null)

  useEffect(() => {
    const setKeys = () => {
      let configKeys = Object.keys(config[configSection])
      setConfigKeys(configKeys)

      for (let i = 0; i < configKeys.length; i++) {
        let newKey = configKeys[i]
        initFormFields = {
          ...initFormFields,
          [newKey]: '',
        }
      }
      setFormFields(initFormFields)
    }

    if (config) {
      setKeys()
    }
  }, [config])

  // console.log(config)
  // console.log(configSection)
  // console.log(formFields)
  // console.log(configKeys)

  if (!configKeys) return <div></div>

  return (
    <div className="configSection">
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {configKeys.map((key, index) => {
              // console.log(config[configSection][key])
              return (
                <TableRow key={key + "TableRow" + index}>
                  <TableCell
                  >{key}</TableCell>
                  <TableCell>
                    <ConfigFormField
                      config={config}
                      currentFieldValue={config[configSection][key]}
                      currentSection={configSection}
                      value={formFields[key]}
                      name={key}
                      // onChange={handleFormField}
                      setConfig={setConfig}
                    />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ConfigSection
