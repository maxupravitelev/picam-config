import React, { useState, useEffect } from "react";
import configService from "../services/config";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  // TextField,
  Button,
  // List,
  // ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ConfigFormField from "../components/ConfigFormField";
import ConfigSection from "../components/ConfigSection";


const ConfigList = ({ config, configUrl }) => {
  let initFormFields = {
    awb_gains: "",
  };

  const [formField, setFormField] = useState(initFormFields);
  const [configKeys, setConfigKeys] = useState(null);
  const [configSections, setConfigSections] = useState(null);
  // console.log(formField);

  useEffect(() => {
    const setKeys = () => {
      let sections = Object.keys(config);
      setConfigSections(sections);

      let configKeys = Object.keys(config.picam_config);
      setConfigKeys(configKeys);

      for (let i = 0; i < configKeys.length; i++) {
        let newKey = configKeys[i];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        initFormFields = {
          ...initFormFields,
          [newKey]: "",
        };
      }
      setFormField(initFormFields);
    };

    if (config) {
      setKeys();
    }
  }, [config]);

  // console.log(configKeys);
  //   console.log(formField);

  if (!configKeys) return <div></div>

  const handleSubmit = (e) => {
    e.preventDefault();
    config.picam_config.awb_gains = parseFloat(formField.awb_gains);

    configService.setConfig(configUrl, config);

    setFormField(initFormFields);
  };

  const handleFormField = (e) => {
    let name = e.target.name;
    // console.log(formField);

    let newformField = e.target.value;
    setFormField({
      ...formField,
      [name]: newformField,
    });
  };

  return (
    <div className="app">
      <p>
        <a href={configUrl}>View config file on server</a>
      </p>
      <form onSubmit={handleSubmit}>
        {configSections.map((sectionKey) => (
          <Accordion>
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
                handleFormField={handleFormField}
                />
              
            </AccordionDetails>
          </Accordion>
        ))}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>PiCam Config</p>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {configKeys.map((key, index) => (
                    // <div id={"div" + key + index}>
                    <TableRow id={"p" + key + index}>
                      <TableCell>{configKeys[index]}</TableCell>
                      <TableCell>
                        <ConfigFormField
                          id={"input" + key + index}
                          currentFieldValue={config.picam_config[key]}
                          value={formField[key]}
                          name={key}
                          onChange={handleFormField}
                        />
                        {/* <TextField */}
                        {/* <input
                          // type="text"
                          // id={"input" + key + index}
                          // default={config.picam_config[key]}
                          // placeholder={config.picam_config[key]}
                          className="input"
                          value={formField[key]}
                          name={key}
                          onChange={handleFormField}
                        /> */}
                      </TableCell>

                      {/* </div> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {configSections.map((key) => (
              <div>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>{key}</p>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </div>
            ))}

            <Button color="primary">SET</Button>
          </AccordionDetails>
        </Accordion>
      </form>
    </div>
  );
};

export default ConfigList;
