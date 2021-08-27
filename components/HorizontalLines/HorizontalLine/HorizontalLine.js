import classes from "./Horizontal.module.css";

function HorizontalLine() {
  return (
    <div className={classes.container_descrption_of_anouncements}>
      <h1 className={classes.text}>ΑΝΑΚΟΙΝΩΣΕΙΣ</h1>
      <span className={classes.line}></span>
    </div>
  );
}

export default HorizontalLine;
