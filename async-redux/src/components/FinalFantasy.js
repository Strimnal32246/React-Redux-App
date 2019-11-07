import React, { useState, useEffect } from "react";
import axios from "axios";

const FinalFantasy = props => {
  const [finalfantasy, setFinalfantasy] = useState("");

  useEffect(() => {
    axios.get(props.url).then(res => {
      console.log(res.data);
      setFinalfantasy(res.data);
    });
  }, [props.url]);
  return (
    <div>
      <p>{finalfantasy.name}</p>)
    </div>
  );
};

export default FinalFantasy;
