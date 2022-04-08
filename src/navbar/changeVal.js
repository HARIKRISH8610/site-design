import { useSelector } from "react-redux";

const Changeval = (val) => {
  switch (val) {
    case true:
      return {
        type: "true",
      };
    default:
      return {
        type: "false",
      };
  }
};
export default Changeval;
