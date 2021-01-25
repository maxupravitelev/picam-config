import React, { useState } from "react";
import configService from "../services/config";

const ConfigList = ({ config, configUrl }) => {
    const initValues = {
        framerate: ""
      }
  
    const [value, setValue] = useState(initValues);

    // console.log(config)
    // console.log(configUrl)

  const handleSubmit = (e) => {
    e.preventDefault();

    config.framerate = value.framerate

    configService.setConfig(configUrl, config)

    setValue(initValues);
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


  return (
    <div>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            // default={config.framerate}
            className="input"
            value={value.framerate}
            name="framerate"
            onChange={handleValue}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ConfigList;
