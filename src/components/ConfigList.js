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


const ConfigList = ({ config, configUrl }) => {
  let initFormFields = {
    awb_gains: "",
  };

  const [formField, setformField] = useState(initFormFields);
  const [configKeys, setConfigKeys] = useState(null);

  // console.log(formField);

  useEffect(() => {
    const setKeys = () => {
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
      setformField(initFormFields);
    };

    if (config) {
      setKeys();
    }
  }, [config]);

  // console.log(configKeys);
  //   console.log(formField);

  if (!configKeys) return <div></div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    config.picam_config.awb_gains = parseFloat(formField.awb_gains);

    configService.setConfig(configUrl, config);

    setformField(initFormFields);
  };

  const handleformField = (e) => {
    let name = e.target.name;
    // console.log(formField);

    let newformField = e.target.value;
    setformField({
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
                        <ConfigFormField id={"input" + key + index} currentFieldValue={config.picam_config[key]} value={formField[key]}                           
                         name={key}
                          onChange={handleformField}/>
                        {/* <TextField */}
                        {/* <input
                          // type="text"
                          // id={"input" + key + index}
                          // default={config.picam_config[key]}
                          // placeholder={config.picam_config[key]}
                          className="input"
                          value={formField[key]}
                          name={key}
                          onChange={handleformField}
                        /> */}
                      </TableCell>

                      {/* </div> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button color="primary">
              SET
            </Button>
            </AccordionDetails>
          
        </Accordion>
      </form>
    </div>
  );
};

export default ConfigList;
