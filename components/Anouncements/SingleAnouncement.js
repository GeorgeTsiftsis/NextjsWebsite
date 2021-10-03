import classes from "./IdAnouncement.module.css";
import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share';
import Head from 'next/head';

function SingleAnouncement(props) {
  return (
    <>
     <Head>
      <title>Ανακοινώσεις του Α.Σ. Μακεδονική Δύναμη Κοζάνης</title>
      <meta name="description" content={props.anouncement.title} />
      </Head>
    <div className={classes.SingleAnouncement}>
      <p className={classes.title}>{props.anouncement.title}</p>
      <p className={classes.date_of_anouncements}> {props.anouncement.date}</p>
      <div className={classes.divphoto}>

        <p className={classes.description}> {props.anouncement.full_description}</p>
        <img className={classes.photo} src={props.anouncement.photo} alt={props.anouncement.title}></img>
        </div>
        <FacebookShareButton  className={classes.frop}
  url={`https://nextjs-website-hmbsrp9yr-georgetsiftsis.vercel.app/announcement/${props.anouncement.id}`}
  quote={props.anouncement.title}
  
>
  <FacebookIcon size={40} round />
</FacebookShareButton>
    </div>
    </>
  );
}

export default SingleAnouncement;
