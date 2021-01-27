import React, { useState, useEffect } from "react";
import configService from "../services/config";

const ConfigList = ({ config, configUrl }) => {
  let initValues = {
    awb_gains: "",
  };

  const [value, setValue] = useState(initValues);
  const [configKeys, setConfigKeys] = useState(null);

  // console.log(value);

  useEffect(() => {
    const setKeys = () => {
      let configKeys = Object.keys(config.picam_config);
      setConfigKeys(configKeys);

      for (let i = 0; i < configKeys.length; i++) {
        let newKey = configKeys[i];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        initValues = {
          ...initValues,
          [newKey]: "",
        };
      }
      setValue(initValues);
    };

    if (config) {
      setKeys();
    }
  }, [config]);

  // console.log(configKeys);
  //   console.log(value);

  if (!configKeys) return <div></div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    config.picam_config.awb_gains = parseFloat(value.awb_gains);

    configService.setConfig(configUrl, config);

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
      <div className="app">
        <p>
          <a href={configUrl}>View config file on server</a>
        </p>
        <form onSubmit={handleSubmit}>
          {configKeys.map((key, index) => (
            <div id={"div"+key+index}>
              <p id={"p"+key+index}>{key}</p>
              <input
                type="text"
                id={"input"+key+index}
                default={config.picam_config[key]}
                placeholder={config.picam_config[key]}
                className="input"
                value={value[key]}
                name={key}
                onChange={handleValue}
              >
              </input>
            </div>
          ))}

          <button>Submit</button>
        </form>

      </div>
  );
};

export default ConfigList;
