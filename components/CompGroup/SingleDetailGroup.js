import classes from "../CompStaff/style.module.css";
import { motion } from "framer-motion";
function SingleDetailGroup(props) {
  return (
    <section className={classes.section} >
    <div className={classes.container_biography}>
      <div className={classes.leftcol}>
        <p className={classes.title}>{props.object.name}</p>
        <p className={classes.role}> {props.object.role} </p>

        <p className={classes.description}> {props.object.description} </p>
        <motion.ul initial="hidden" animate="visible" variants={{
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
      {/* {props.Arguments.map(({argument }) => (
                <li key={arguement} className={classes.divo}>{argument} </li> ))} */}
          <li>
        {props.object.a1}
          </li>
          <li>
          {props.object.a2}
          </li>
          <li>
          {props.object.a3}
          </li>
          <li>
          {props.object.a4}
          </li>
          <li>
          {props.object.a5}         
           </li>
        </motion.ul>
      </div>
      <div className={classes.rightcol}>
        <img className={classes.photo} src={props.object.photo} alt={props.object.name}></img>
      </div>
     
      </div>
      <div className={classes.divofgroup}>
      <h1 className={classes.title}>{props.object.t1} 
      </h1>
      <ul className= {classes.lista}>
        <div className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p1} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t2}</li>

        </div>
        <div  className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p2} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t3}</li>
        </div>
        <div className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p3} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t4}</li>
        </div>
        <div className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p4} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t5}</li>
        </div>
        <div className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p5} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t6}</li>
        </div>
        <div className={classes.divphoto}> 
        <img className= {classes.photodet}  src={props.object.p6} alt={props.object.name}></img>
        <li className= {classes.item}>{props.object.t7}</li>
        </div>
      </ul>
</div>
    </section>
  );
}

export default SingleDetailGroup;
