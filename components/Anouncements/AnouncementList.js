import AnouncementItem from "./AnouncementItem";
import classes from "./Card.module.css";

function AnouncementList(props) {
  const anouncementsList = props.anouncements.reverse().map(function (anouncement) {
    return <AnouncementItem anouncement={anouncement} key={anouncement.id} />;
  });
  console.log(anouncementsList);
  return <div className={classes.gridnews}>{anouncementsList}</div>;
}

export default AnouncementList;
