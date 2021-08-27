import classes from "./Card.module.css";
import HorizontalLine from "../HorizontalLines/HorizontalLine/HorizontalLine";
import OldAnouncementItem from "./OldAnouncementItem";

function OldAnouncementList(props) {
  const anouncementsList = props.anouncements.map(function (anouncement) {
    return <OldAnouncementItem anouncement={anouncement} key={anouncement.id} />;
  });

  return (
    <>
      <section className={classes.section}>
        <HorizontalLine />
        <div className={classes.gridnews}>{anouncementsList}</div>
      </section>
    </>
  );
}

export default OldAnouncementList;
