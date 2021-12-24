import * as React from "react";

const Error = (props: any) => {
  return (
    <p
      {...props}
      className={`text-xs text-red-500 text-left w-full ${props.className}`}
    >
      {props.children}
    </p>
  );
};

export default React.memo(Error);
