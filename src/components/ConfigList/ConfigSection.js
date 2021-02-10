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

  const [configKeys, setConfigKeys] = useState(null)

  useEffect(() => {
    const setKeys = () => {
      let configKeys = Object.keys(config[configSection])
      setConfigKeys(configKeys)
    }

    if (config) {
      setKeys()
    }
  }, [config])

  if (!configKeys) return <div></div>

  return (
    <div className="configSection">
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            {configKeys.map((key, index) => {
              if (typeof config[configSection][key] == 'object') {
                return (
                  <TableRow key={key + 'TableRow' + index}>
                    <TableCell>{key}</TableCell>
                    <TableCell>
                      <ConfigFormFieldSelect
                        config={config}
                        currentFieldObject={config[configSection][key]}
                        currentSection={configSection}
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
