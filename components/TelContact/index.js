import classes from './classes.module.css'
function TelContact() {
    return (
        <div className={classes.background}>
        <div className={classes.bigdiv}> 

            <h1> Πληροφορίες </h1>
<ul>
<li className={classes.divo}>
    <span className={classes.day}> Διεύθυνση </span> 
    <strong className={classes.hour}>Εστίας 3 </strong>
    </li>
    <li className={classes.divo}>
    <span className={classes.day}>Σταθερό:</span> 
    <strong className={classes.hour}>24610-25054</strong>
    </li>
    <li className={classes.divo}>
    <span className={classes.day}>Τηλ:</span> 
    <strong className={classes.hour}>6946504020</strong>
    </li>
    <li className={classes.divo}>
    <span className={classes.day}>Email</span> 
    <a target="_blank" rel="noopener noreferrer" href="mailto:chrisalmasidistkd@gmail.com" style={{cursor:'pointer', color:'white', textDecoration:'none'}} className={classes.hour}>chrisalmasidistkd@gmail.com</a>
    </li>
    </ul>
         </div>   
        </div>
    )
}


export default TelContact
