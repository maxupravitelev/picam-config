import React, { useState, useEffect } from 'react'
import configService from '../../services/config'
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ConfigSection from './ConfigSection'

import { useSelector } from 'react-redux'



// return a list of input fields dynamically based on the keys of the received config.json file
const ConfigList = ({ configUrl, setConfig }) => {
  const [configSections, setConfigSections] = useState(null)

  let config = useSelector((state) => state.config)
  console.log(config)


  useEffect(() => {
    const setKeys = () => {
      let sections = Object.keys(config)
      setConfigSections(sections)
    }

    if (config) {
      setKeys()
    }
  }, [config])


  if (!configSections) return <div></div>

  const handleSubmit = (e) => {
    e.preventDefault()

    configService.setConfig(configUrl, config)
  }

  return (
    <div className="configList">
      <p>
        <a href={configUrl}>View config file on server</a>
      </p>
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
                setConfig={setConfig}
              />
            </AccordionDetails>
          </Accordion>
        ))}

        <Button type="submit" variant="outlined">
          SET
        </Button>
      </form>
    </div>
  )
}

export default ConfigList
