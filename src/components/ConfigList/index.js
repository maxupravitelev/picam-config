import React, { useState, useEffect } from 'react'
import configService from '../../services/config'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ConfigSection from './ConfigSection'

import { useSelector } from 'react-redux'


// return a list of input fields dynamically based on the keys of the received config.json file
const ConfigList = ({ }) => {

  let counter = useSelector((state) => state.config.length)
  let config = useSelector((state) => state.config[counter - 1])
  let configUrl = useSelector((state) => state.urls.configUrl)


  // get section keys for rendering sections
  let configSections = Object.keys(config)


  // if (!configSections) return <div></div>

  const handleSubmit = (e) => {
    e.preventDefault()

    configService.setConfig(configUrl, config)
  }

  
  return (
    <div className="configList">

      <form onSubmit={handleSubmit}>
        {configSections.map((sectionKey, index) => (
          <Accordion key={sectionKey + 'Accordion' + index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>{sectionKey}</p>
            </AccordionSummary>
            <AccordionDetails>
              <ConfigSection
                config={config}
                configSection={sectionKey}
              />
            </AccordionDetails>
          </Accordion>
        ))}

        {/* <Button type="submit" variant="outlined">
          SET
        </Button> */}
      </form>
    </div>
  )
}

export default ConfigList
