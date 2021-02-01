import React, { useState } from "react";
import configService from "../services/config";

import { 
  TextField, 
  Button 
} from "@material-ui/core";

import dummy_config from "../demo_mode/config";


const UrlForm = ({ getStreamUrlFromForm }) => {
  const initValue = {
    streamUrl: "",
    configUrl: "",
  };

  // const [url, setUrl] = useState("")
  const [value, setValue] = useState(initValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!url) return;
    let config = await configService.getConfig(value.configUrl);

    getStreamUrlFromForm(value, config);

    // setValue(initValue)
  };

  const handleValue = (e) => {
    let name = e.target.name;
    // console.log(value);

    let newValue = e.target.value;
    setValue({
      ...value,
      [name]: newValue,
    });
  };

  const handleDemoMode = () =>{

    const dummy_values = {
      streamUrl: "dummy_url",
      configUrl: "dummy_config",
    };

    getStreamUrlFromForm(dummy_values, dummy_config);

  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          className="input"
          value={value.streamUrl}
          name="streamUrl"
          onChange={handleValue}
        />
        <TextField
          type="text"
          className="input"
          value={value.configUrl}
          name="configUrl"
          onChange={handleValue}
        />
        {/* <Button variant="contained" color="primary">
            Submit
        </Button> */}
        <button>Submit</button>
      </form>
      <button
        onClick={handleDemoMode}>
        Start DEMO
        </button>
    </div>
  );
};

export default UrlForm;
