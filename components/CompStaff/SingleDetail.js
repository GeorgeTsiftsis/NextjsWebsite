import classes from "./style.module.css";
import Head from "next/head";
import { motion } from "framer-motion";
function SingleDetail(props) {
  return (
    <>
      <Head>
      <title>Α.Σ. Μακεδονική Δύναμη Κοζάνης {props.object.name} </title>
      <meta name="description" content="Προσωπικό γυμναστηρίου Μακεδονικής Δύναμης Κοζάνης" />
      </Head>
    <section className={classes.container_biography}>
      <div className={classes.leftcol}>
        <p className={classes.title}>{props.object.name}</p>
        <p className={classes.role}> {props.object.role}</p>

        <p className={classes.description}> {props.object.description}</p>
        {typeof props.object.fulldescription  !== 'undefined' ? (
              (<>
                <motion.ul dangerouslySetInnerHTML={{__html:props.object["fulldescription"]}}  initial="hidden" animate="visible" variants={{
    hidden: {
      scale: .8,
      opacity: 0
    },
    visible: {
    scale: 1,
    opacity:1,
    transition: {
      delay: .8
    }
  }
  }} >

</motion.ul>
               </>
                                   )  ) : ""
                  }
      </div>
      <div className={classes.rightcol}>
        <img className={classes.photo} src={props.object.photo} alt={props.object.name}></img>
      </div>
    </section>
    </>
  );
}

export default SingleDetail;
