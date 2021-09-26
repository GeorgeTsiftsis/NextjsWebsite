import classes from "./style.module.css";
import Head from 'next/Head';
function SingleDetail(props) {
  return (
    <>
      <Head>
      <title>Α.Σ. Μακεδονική Δύναμη Κοζάνης {props.object.name} </title>
      <meta name="description" content="Χώρος εκγύμνασης για σας αλλά και για τα παιδιά σας με ασφάλεια. Αθλητικός Σύλλογος Μαθημάτων Ταε-Κβον-Ντο Συγχρόνος Χορός Ρυθμική και αερόβια Γυμναστική." />
      </Head>
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
    </>
  );
}

export default SingleDetail;
