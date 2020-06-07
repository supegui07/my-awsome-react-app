import React, { useState } from "react";
import InputGroup from "../InputGroup/InputGroup";

const Application = () => {
  const [userName, setUserName] = useState("");

  const handlerInputChange = (value) => {
    setUserName(value);
  };

  return (
    <div>
      <h2>My Awsome React App</h2>
      <InputGroup
        id="user"
        text="User Name"
        placeholder="Enter the User Name"
        value={userName}
        onChange={handlerInputChange}
      />
    </div>
  );
};

export default Application;
