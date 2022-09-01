import React from "react";
import { Button} from "reactstrap";

const FindBySearchBtn = ({text,click}) => {
  return (
    <Button
      style={{
        backgroundColor: "#b80000",
        marginBottom: "2rem",
        marginTop: "1rem",
      }}
      onClick={click}
    >
      {text}
    </Button>
  );
};

export default FindBySearchBtn;
