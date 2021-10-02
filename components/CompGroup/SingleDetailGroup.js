import classes from "./style.module.css";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from 'next/link'
// import Button from "../../components/Button/index";

function SingleDetailGroup(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + `${props.object.tlink1}`);
  }
  function showDetailsHandler2() {
    router.push("/" + `${props.object.tlink2}`);
  }
  function showDetailsHandler3() {
    router.push("/" + `${props.object.tlink3}`);
  }
  function showDetailsHandler4() {
    router.push("/" + `${props.object.tlink4}`);
  }
  function showDetailsHandler5() {
    router.push("/" + `${props.object.tlink5}`);
  }
  function showDetailsHandler6() {
    router.push("/" + `${props.object.tlink6}`);
  }
  function showDetailsHandler7() {
    router.push("/" + `${props.object.tlink7}`);
  }
  function showDetailsHandler8() {
    router.push("/" + `${props.object.tlink8}`);
  }
 
  return (
    <>
    <Head>
      <title>Α.Σ. Μακεδονική Δύναμη Κοζάνης {props.object.t1} </title>
      <meta name="description" content="Πληροφορίες Τμήματων Τάε-Κβον-Ντο και Μοντέρνου Χορού" />
      </Head>
    <section className={classes.section} >
    <div className={classes.container_biography}>
      <div className={classes.leftcol}>
       
        
        <div className={classes.data} > 
        <p className={classes.description}> {props.object.description} </p>
        <motion.ul dangerouslySetInnerHTML={{__html:props.object["all"]}} initial="hidden" animate="visible" variants={{
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
        }} className= {classes.list}>
    
                
        </motion.ul>
          <span className={classes.line}> </span>
        </div>
        <div className={classes.divtitle}> 
        <h1 className={classes.title}>{props.object.name}</h1>
        <span className={classes.line}> </span>

        </div>
        {typeof props.object.nameInside  !== 'undefined' ? (
          (    <div className={classes.data} >
    <motion.ul dangerouslySetInnerHTML={{__html:props.object["nameInside"]}}  initial="hidden" animate="visible" variants={{
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
  }} className= {classes.list}>
 </motion.ul>
   </div>
                       )  ) : ""
      }
      
      </div>
      <div className={classes.rightcol}>
        <img  className={classes.photo} src={props.object.photo} alt={props.object.name}></img>
      </div>
     
      </div>
      <div className={classes.divofgroup}>
      {/* <HorizontalLine title={"Μοντέρνος Χορός"} /> */}
      <h1 className={classes.title}>{props.object.t1} 
      </h1>
      <span className={classes.line}></span>
      <p className={classes.role}> {props.object.role} </p>
      <ul className= {classes.lista}>
        <div className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p1} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t2} </li>
        <button className={classes.button} onClick={showDetailsHandler} >Δείτε Περισσότερα</button> 
        
        </div>
        <div  className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p2} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t3} </li>
        <button className={classes.button}  onClick={showDetailsHandler2} >Δείτε Περισσότερα</button>
        </div>
        <div className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p3} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t4} </li>
        <button className={classes.button} onClick={showDetailsHandler3} >Δείτε Περισσότερα</button>
        </div>
        <div className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p4} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t5} </li>
        <button className={classes.button} onClick={showDetailsHandler4} >Δείτε Περισσότερα</button>
        </div>
        <div className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p5} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t6} </li>
        <button className={classes.button} onClick={showDetailsHandler5} >Δείτε Περισσότερα</button>
        </div>
        <div className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p6} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t7} </li>
        <button className={classes.button} onClick={showDetailsHandler6} >Δείτε Περισσότερα</button>
        </div>
        
        {typeof props.object.p7  !== 'undefined' ? (
              (<>
              <div className={classes.divphoto}> 
                <img className= {classes.photodet}  src={props.object.p7} alt={props.object.name}></img>
                <li className= {classes.item}>{props.object.t8}</li>
                <button className={classes.button} onClick={showDetailsHandler7} >Δείτε Περισσότερα</button>

              </div> 
              <div className={classes.divphoto}> 
                <img className= {classes.photodet}  src={props.object.p8} alt={props.object.name}></img>
                <li className= {classes.item}>{props.object.t9}</li>
                <button className={classes.button} onClick={showDetailsHandler8} >Δείτε Περισσότερα</button>
                
              </div> 
               </>
                                   )  ) : ""
                  }

      </ul>
      {typeof props.object.p7  !== 'undefined' ? (
              (<>
              <h1 className={classes.title}>Διακρίσεις Αθλητών</h1>
                <span className={classes.line}></span>
                      <img className={classes.diakriseis}  src={props.object.pdiakriseis} alt={props.object.name}></img>
                      <h2 className={classes.diakriseisText}>Παρακάτω μπορείτε να δείτε τις διακρίσεις του συλλόγου μας ως μέλη της εθνικής ομάδος της χώρας μας</h2>
                      <button className={classes.button}> <Link href="/DiakriseisAthltitwn">  Δείτε Περισσότερα  </Link> </button>
 </> ) ) : ""
      }

</div>
    </section>
    </>
  );
}

export default SingleDetailGroup;



