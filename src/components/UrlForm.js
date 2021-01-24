import React, { useState } from "react";

const UrlForm = ({ getStreamUrlFromForm }) => {

    const initValue = {
        streamUrl: "",
        configUrl: ""
      }

    // const [url, setUrl] = useState("")
    const [value, setValue] = useState(initValue);


    const handleSubmit = (e) => {
        e.preventDefault();
    
        // if (!url) return;

        getStreamUrlFromForm(value)

        setValue(initValue)
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
        <input
          type="text"
          className="input"
          value={value.streamUrl}
          name="streamUrl"
          onChange={handleValue}
        ></input>
        <input
          type="text"
          className="input"
          value={value.configUrl}
          name="configUrl"
          onChange={handleValue}
        ></input>
        <button>
            Submit
        </button>
      </form>
    </div>
  );
};

export default UrlForm;
