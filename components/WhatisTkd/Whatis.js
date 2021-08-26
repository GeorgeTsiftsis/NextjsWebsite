import classes from "./Whatis.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import apostolistelikostoglou from "../../public/homeapostolis(1).jpg";
function Whatis() {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/WhatIsTkd");
  }

  return (
    <section className={classes.container}>
      <div className={classes.containeroftext}>
        <h1 className={classes.text}>Γνωρίστε το Ταε-Κβον-Ντο</h1>
        <span className={classes.span}>
          <a onClick={showDetailsHandler}></a>
        </span>
      </div>

      <Image className={classes.photo} src={apostolistelikostoglou} alt="apostolistelikostoglou"></Image>
    </section>
  );
}

export default Whatis;
