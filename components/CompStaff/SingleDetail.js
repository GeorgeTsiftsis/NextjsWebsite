import classes from "./style.module.css";

function SingleDetail(props) {
  return (
    <section className={classes.container_biography}>
      <div className={classes.leftcol}>
        <p className={classes.title}>{props.object.name}</p>
        <p className={classes.role}> {props.object.role}</p>

        <p className={classes.description}> {props.object.description}</p>
      </div>
      <div className={classes.rightcol}>
        <img className={classes.photo} src={props.object.photo} alt={props.object.name}></img>
      </div>
    </section>
  );
}

export default SingleDetail;
