import AthleteItem from "./AthleteItem";
import classes from "../Anouncements/Card.module.css";
function AthleteList(props) {
  const athleteList = props.athletes.reverse().map(function (athlete) {
    return <AthleteItem athlete={athlete} key={athlete.id} />;
  });
  console.log(athleteList);
  return <div className={classes.gridnews}>{athleteList}</div>;
}

export default AthleteList;
