import React from "react";

import Button from "./Button";

const IconText = (props) => {
  const className = ["brand-text-icon", props.className];

  return (
    <Button className={className.join(" ")} href="" type="link">
      Company
    </Button>
  );
};

export default IconText;
