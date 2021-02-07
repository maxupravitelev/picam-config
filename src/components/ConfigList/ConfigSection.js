import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core'
import ConfigFormField from './ConfigFormField'
import ConfigFormFieldSelect from './ConfigFormFieldSelect'

const ConfigSection = ({ config, configSection, setConfig }) => {
  let initFormFields = {}

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

  if (!configKeys) return <div></div>

  return (
    <div className="configSection">
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {configKeys.map((key, index) => {
              if (typeof config[configSection][key] == 'object') {
                console.log(key)
                return (
                  <TableRow key={key + 'TableRow' + index}>
                    <TableCell>{key}</TableCell>
                    <TableCell>
                      <ConfigFormFieldSelect
                        config={config}
                        currentFieldValue={config[configSection][key]}
                        currentSection={configSection}
                        value={formFields[key]}
                        name={key}
                        setConfig={setConfig}
                      />
                    </TableCell>
                  </TableRow>
                )
              } else {
                return (
                  <TableRow key={key + 'TableRow' + index}>
                    <TableCell>{key}</TableCell>
                    <TableCell>
                      <ConfigFormField
                        config={config}
                        currentFieldValue={config[configSection][key]}
                        currentSection={configSection}
                        value={formFields[key]}
                        name={key}
                        setConfig={setConfig}
                      />
                    </TableCell>
                  </TableRow>
                )
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ConfigSection
