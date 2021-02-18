// import react and redux
import React from 'react'
import { useSelector } from 'react-redux'

// import material ui components
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, } from '@material-ui/core'

// import components
import ConfigFormField from './ConfigFormField'
import ConfigFormFieldSelect from './ConfigFormFieldSelect'

// render each config section
const ConfigSection = ({ configSection }) => {

  // fetch config from store
  let counter = useSelector((state) => state.config.length)
  let config = useSelector((state) => state.config[counter - 1])
  
  // get keys for individual formfields 
  const configKeys = Object.keys(config[configSection])

  if (!configKeys) return <div></div>

  return (
    <div className="configSection">
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            {configKeys.map((key, index) => {

              // render select component based on field type 
              if (typeof config[configSection][key] == 'object') {
                return (
                  <TableRow key={key + 'TableRow' + index}>
                    <TableCell>{key}</TableCell>
                    <TableCell>
                      <ConfigFormFieldSelect
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
