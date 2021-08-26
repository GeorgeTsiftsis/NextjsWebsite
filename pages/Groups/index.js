import classes from "./style.module.css";
import HorizontalLine3 from "../../components/HorizontalLine3/HorizontalLine3";

function Groups() {
  return (
    <>
      <HorizontalLine3 />
      <div className={classes.container}>
        <h2>Τμήματα</h2>
      </div>
    </>
  );
}

export default Groups;
