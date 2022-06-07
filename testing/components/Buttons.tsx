import React, { useState } from "react";
import { Button } from "antd";

const Buttons = () => {
  const [button, setButton] = useState(true);
  return (
    <div>
      {button ? (
        <Button
          data-testid="button1"
          type="primary"
          size="large"
          onClick={() => setButton(!button)}
        >
          First Button
        </Button>
      ) : (
        <Button
          data-testid="button2"
          type="default"
          size="large"
          danger
          onClick={() => setButton(!button)}
        >
          Second Button
        </Button>
      )}
    </div>
  );
};

export default Buttons;
