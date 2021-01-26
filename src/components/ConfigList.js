import React, { useState } from "react";
import configService from "../services/config";

const ConfigList = ({ config, configUrl }) => {
    let initValues = {
        awb_gains: ""
      }
  
    const [value, setValue] = useState(initValues);

    console.log(value)

    if (config) {
        let config_keys = Object.keys(config.picam_config)
        console.log(config_keys)
        
        

        for (let i = 0; i < config_keys.length; i++) {
            let newKey = config_keys[i]
            initValues = {
                ...initValues,
                [newKey]: ""
            } 
        }
        // setValue(initValues)

    }

    // {config.picam_config.map(input => {
        
    //     key 

    //     setValue({
    //         ...value,
    //         [key]: newValue,
    //       });
    // }
    // )}

    // console.log(config)
    // console.log(configUrl)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value.awb_gains)
    config.picam_config.awb_gains = parseFloat(value.awb_gains)

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
          
          {/* {config.picam_config.map(input => (
              <input
                type="text"
                classname="input"
                value={}
              >
                
              </input>
          )
          )} */}
          
          <input
            type="number"
            // default={config.awb_gains}            
            // placeholder={config.awb_gains}

            className="input"
            value={value.awb_gains}
            name="awb_gains"
            onChange={handleValue}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ConfigList;
