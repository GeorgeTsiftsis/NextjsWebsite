import classes from "./Whatis.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
function Whatis() {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + "whatistaekwondo");
  }
  const [gre, setGre] = useState(false);

  return (
    <section className={classes.container}>
      <div className={classes.containeroftext}>
        <h1 className={classes.text}>Γνωρίστε το Ταε-Κβον-Ντο</h1>
        <span className={classes.span}>
          <a onClick={showDetailsHandler}></a>
        </span>
      </div>

      <img className={classes.img} src="homeapostolis(1).jpg" />
    </section>
  );
}

export default Whatis;
