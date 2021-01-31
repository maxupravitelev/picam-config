import React, { useState } from "react";
import configService from "../services/config";

import {
  TextField,
  Button,

} from "@material-ui/core";


const UrlForm = ({ getStreamUrlFromForm }) => {

    const initValue = {
        streamUrl: "",
        configUrl: ""
      }

    // const [url, setUrl] = useState("")
    const [value, setValue] = useState(initValue);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!url) return;
        let config = await configService.getConfig(value.configUrl)


        getStreamUrlFromForm(value, config)

        // setValue(initValue)
    }

    const handleValue = (e) => {
        let name = e.target.name;
        // console.log(value);
    
        let newValue = e.target.value;
        setValue({
          ...value,
          [name]: newValue,
        });
      };

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
        <button>
            Submit
        </button>
      </form>
    </div>
  );
};

export default UrlForm;
