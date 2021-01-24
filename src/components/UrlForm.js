import React, { useState } from "react";

const UrlForm = ({ callUrl }) => {

    // const [url, setUrl] = useState("")
    const [value, setValue] = useState({
        text: ""
      });


    const handleSubmit = (e) => {
        e.preventDefault();
    
        // if (!url) return;

        callUrl(value.text)

        setValue("")
    }

    const handleValue = (e) => {
        let name = e.target.name;
        // console.log(setColor);
    
        let newValue = e.target.value;
        setValue({
          ...value,
          [name]: newValue,
        });
      };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value.text}
          name="text"
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
