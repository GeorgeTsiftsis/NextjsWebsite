import classes from "./AthleteItem.module.css";

function AthleteItem(props) {
  return (
    <section className={classes.single_box_of_anouncements} key={props.athlete.id}>
      <img className={classes.photo1} src={props.athlete.photo} alt="lorem"></img>
      <div className={classes.texts_of_anouncements}>
        <p className={classes.description}>
          {props.athlete.position}, {props.athlete.name}
        </p>
      </div>
    </section>
  );
}

export default AthleteItem;
