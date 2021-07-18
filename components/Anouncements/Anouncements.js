import { useEffect, useState } from "react";

import LoadingSpinner from "../UI/LoadingSpinner"
import Anouncement from "./Anouncement";
import classes from './Card.module.css';

// import classes from "./Card.module.css";
// import "bootstrap/dist/css/bootstrap.css";

const Anouncements = () => {
  const [anouncements, setAnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchAnouncements = async () => {
      const response = await fetch("https://initialise-6d68a-default-rtdb.europe-west1.firebasedatabase.app/Todo.json");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedAnouncments = [];

      for (const key in responseData) {
        loadedAnouncments.push({
          id: key,
          date: responseData[key].date,
          description: responseData[key].description,
          readMore: responseData[key].readMore,
          title: responseData[key].title,
          photo: responseData[key].photo,
        });
      }

      setAnouncements(loadedAnouncments);
      setIsLoading(false);
    };

    fetchAnouncements().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading_box}>
        <div>
          <LoadingSpinner animation="border" variant="primary" style={{ width: "15rem", height: "15rem" }} />
          <h2 className={classes.loading_text}> Loading...</h2>
        </div>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.AnouncementError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const anouncemnetsList = anouncements
    .slice(0)
    .reverse()
    .map((anouncement, index) => <Anouncement key={index} id={anouncement.id} date={anouncement.date} description={anouncement.description} readMore={anouncement.readMore} title={anouncement.title} photo={anouncement.photo} />);

  return (
    <section>
      <div className={classes.gridnews}>{anouncemnetsList}</div>
    </section>
  );
};

export default Anouncements;
