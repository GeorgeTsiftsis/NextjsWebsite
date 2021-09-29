import AnouncementItem from "./AnouncementItem";
import classes from "./Card.module.css";
import HorizontalLine from "../HorizontalLines/HorizontalLine/HorizontalLine";
import { useState } from "react";

function AnouncementList(props) {
  const [postNum, setPostNum] = useState(6);

  function handleClick(e) {
    e.preventDefault();
    setPostNum((prevPostNum) => prevPostNum + 2);
  }

  const anouncementsList = props.anouncements
    // .reverse()
    .slice(0, postNum)
    .map(function (anouncement) {
      return <AnouncementItem anouncement={anouncement} key={anouncement.id} />;
    });

  return (
    <>
      <HorizontalLine title={"ΑΝΑΚΟΙΝΩΣΕΙΣ-ΔΡΑΣΕΙΣ"}  />

      <section className={classes.section}>
        <div className={classes.gridnews}>{anouncementsList}</div>
        <span className={classes.span}>
          <a onClick={handleClick}></a>
        </span>
      </section>
    </>
  );
}

export default AnouncementList;
