import classes from "./Whatis.module.css";
function Whatis() {
  return (
    <div className={classes.container}>
      <h1 className={classes.text}>Γνωρίστε το Ταε-Κβον-Ντο</h1>
      <img className={classes.img} src="homeapostolis.jpg" />
    </div>
  );
}

export default Whatis;
