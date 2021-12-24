import * as React from "react";

const LoadingSpin: React.FC = () => {
  return (
    <div className="lds-ring w-9 h-9">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default React.memo(LoadingSpin);
