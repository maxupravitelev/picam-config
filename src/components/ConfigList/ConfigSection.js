import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, } from '@material-ui/core'
import ConfigFormField from './ConfigFormField'
import ConfigFormFieldSelect from './ConfigFormFieldSelect'

import { useSelector } from 'react-redux'


const ConfigSection = ({ configSection }) => {

  
  let counter = useSelector((state) => state.config.length)
  let config = useSelector((state) => state.config[counter - 1])
  const configKeys = Object.keys(config[configSection])


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
                        currentFieldValue={config[configSection][key]}
                        currentSection={configSection}
                        name={key}
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
