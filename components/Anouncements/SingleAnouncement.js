import classes from "./IdAnouncement.module.css";
import { FacebookShareButton, FacebookIcon } from "next-share";
import Head from "next/head";
import { motion } from "framer-motion";

function SingleAnouncement(props) {
  return (
    <>
      <Head>
        <title>{props.anouncement.title}</title>
        <meta name="description" content={props.anouncement.description} />
      </Head>
      <div className={classes.SingleAnouncement}>
        <div>
          <p className={classes.title}>{props.anouncement.title}</p>
          <p className={classes.date_of_anouncements}>
            {" "}
            {props.anouncement.date}
          </p>
          <div className={classes.divphoto}>
            <img
              className={classes.photo}
              src={props.anouncement.photo}
              alt={props.anouncement.title}
            ></img>
          </div>
          <motion.div
            dangerouslySetInnerHTML={{
              __html: props.anouncement["description"],
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.8,
                },
              },
            }}
            className={classes.description}
          ></motion.div>
          {/* <p className={classes.description}>
            {props.anouncement.description}
          </p> */}
        </div>
        {props.anouncement.url && (
          <a
            className={classes.boxbutton}
            href="https://www.facebook.com/watch/?v=1758644427659432"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.buttonlink}> Πατήστε εδώ</button>
          </a>
        )}
        <div className={classes.fb}>
          <FacebookShareButton
            url={`https://makedonikidinami.gr/announcement/${props.anouncement.id}`}
            quote={props.anouncement.title}
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>
        </div>
      </div>
    </>
  );
}

export default SingleAnouncement;
