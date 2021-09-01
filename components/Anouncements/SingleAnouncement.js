import classes from "./IdAnouncement.module.css";

function SingleAnouncement(props) {
  return (
    <div className={classes.SingleAnouncement}>
      <p className={classes.title}>{props.anouncement.title}</p>
      <p className={classes.date_of_anouncements}> {props.anouncement.date}</p>
      <div className={classes.divphoto}>
        <img className={classes.photo} src={props.anouncement.photo} alt={props.anouncement.title}></img>

        <p className={classes.description}> {props.anouncement.full_description}</p>
      </div>
    </div>
  );
}

export default SingleAnouncement;
