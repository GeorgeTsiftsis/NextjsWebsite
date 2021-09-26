import classes from "./style.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import apostolistelikostoglou from "../../public/whatistkd.jpg";
import Head from "next/Head";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function TkdPage(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + "Groups");
  }

  return (
    <>
      <Head>
      <title>Α.Σ. Μακεδονική Δύναμη Κοζάνης Ταε Κβο Ντο </title>
      <meta name="description" content="Χώρος εκγύμνασης για σας αλλά και για τα παιδιά σας με ασφάλεια. Αθλητικός Σύλλογος Μαθημάτων Ταε-Κβον-Ντο Συγχρόνος Χορός Ρυθμική και αερόβια Γυμναστική." />
      </Head>
      <motion.section className={classes.cont} initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
        <div>
          <h1 className={classes.title}> {props.object.title}</h1>
          <h2 className={classes.description}>{props.object.description}</h2>
        </div>
        <Image className={classes.photo} src={apostolistelikostoglou} alt="apostolistelikostoglou"></Image>
      </motion.section>
      <section className={classes.cont2}>
        <h2 className={classes.description2}>{props.object.description1}</h2> <h2 className={classes.description2}>{props.object.description2}</h2>
        <div className={classes.section_of_button}>
          <span className={classes.span}>
            <a onClick={showDetailsHandler}></a>
          </span>
        </div>
      </section>
    </>
  );
}

export default TkdPage;
