import AnouncementItem from "./AnouncementItem";
import classes from "./Card.module.css";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

function AnouncementList(props) {
  const anouncementsList = props.anouncements.reverse().map(function (anouncement) {
    return <AnouncementItem anouncement={anouncement} key={anouncement.id} />;
  });
  console.log(anouncementsList);

  return (
    <>
      <HorizontalLine />
      <div className={classes.gridnews}>{anouncementsList}</div>
      <div className={classes.justtoleave}></div>
    </>
  );
}

export default AnouncementList;
