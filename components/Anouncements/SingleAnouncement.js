import classes from "./IdAnouncement.module.css";

function SingleAnouncement(props) {
  return (
    // <section className={classes.woo}>
    //   <img className={classes.photo1} src={props.anouncement.photo} alt="lorem"></img>
    //   <div className={classes.texts_of_anouncements}>
    //     <p className={classes.title}>{props.anouncement.title}</p>
    //     <p className={classes.date_of_anouncements}> {props.anouncement.date}</p>
    //     <p className={classes.description}> {props.anouncement.description}</p>
    //   </div>
    // </section>

    <div>
      {/* <p className={classes.title}>{props.anouncement.title}</p> */}
      <p className={classes.date_of_anouncements}> {props.anouncement.date}</p>
      <img className={classes.photo1} src={props.anouncement.photo} alt="lorem"></img>

      <p className={classes.description}> {props.anouncement.description}</p>
    </div>
  );
}

export default SingleAnouncement;
