import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const Todo: React.FC = () => {
  return (
    <section className="flex items-center font-medium text-xl gap-2 text-left p-6 mt-5 w-[34rem] shadow-lg bg-gradient-to-br from-blue-primary via-blue-primary to-blue-secondary border border-white-brd rounded-md">
      <div className="p-1.5 flex bg-whiteborder-white-brd bg-opacity-20 hover:bg-white hover:bg-opacity-80 items-center justify-center border rounded-full border-white-brd">
        <CheckIcon color="success" />
      </div>
      <div className="w-full flex items-center gap-2">
        <p className="w-full text-white">To do 1</p>
        <button className="btn-secondary border-0 flex items-center p-2 rounded-full">
          <CloseIcon color="error" />
        </button>
      </div>
    </section>
  );
};

export default Todo;
