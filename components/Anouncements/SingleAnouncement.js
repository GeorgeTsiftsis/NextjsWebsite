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
        <img className={classes.photo} src={props.anouncement.photo} alt={props.anouncement.title}></img>

        <p className={classes.description}> {props.anouncement.full_description}</p>
        <FacebookShareButton
  url={`https://nextjs-website-2s6b4p7cx-georgetsiftsis.vercel.app/announcement/${props.anouncement.id}`}
  quote={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#nextshare'}
>
  <FacebookIcon size={32} round />
</FacebookShareButton>
      </div>
    </div>
    </>
  );
}

export default SingleAnouncement;
