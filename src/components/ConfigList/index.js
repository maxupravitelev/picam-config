// import react and redux
import React from 'react'
import { useSelector } from 'react-redux'

// import backend service
import configService from '../../services/config'

// import material ui components
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

// import components
import ConfigSection from './ConfigSection'
import Notification from '../../components/Notification'

// import utils
import { parseConfigSectionTitle } from '../../utils'

// return a list of input fields dynamically based on the keys of the received config.json file
const ConfigList = ({}) => {
  // fetch config from store
  let counter = useSelector((state) => state.config.length)
  let config = useSelector((state) => state.config[counter - 1])
  let configUrl = useSelector((state) => state.urls.configUrl)

  if (!config) return <div></div>

  // get section keys for rendering sections
  let configSections = Object.keys(config)

  // if (!configSections) return <div></div>

  const handleSubmit = (e) => {
    e.preventDefault()

    configService.setConfig(configUrl, config)
  }

  return (
    <div className="configList">
      <Notification />

      <form onSubmit={handleSubmit}>
        {configSections.map((sectionKey, index) => (
          <Accordion key={sectionKey + 'Accordion' + index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>{parseConfigSectionTitle(sectionKey)}</p>
            </AccordionSummary>
            <AccordionDetails>
              <ConfigSection config={config} configSection={sectionKey} />
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
