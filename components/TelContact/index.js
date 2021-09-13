import classes from './classes.module.css'

function TelContact() {
    return (
        <div className={classes.background}>
        <div className={classes.bigdiv}> 

            <h1> Πληροφορίες </h1>
<ul>
<li className={classes.divo}>
    <span className={classes.day}> Διεύθυνση </span> 
    <strong className={classes.hour}>    
    <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noopener noreferrer" href="https://www.google.gr/maps/place/%CE%91.%CE%93.%CE%A3.+%CE%9A%CE%BF%CE%B6%CE%AC%CE%BD%CE%B7%CF%82+%CE%9C%CE%B1%CE%BA%CE%B5%CE%B4%CE%BF%CE%BD%CE%B9%CE%BA%CE%AE+%CE%94%CF%8D%CE%BD%CE%B1%CE%BC%CE%B7/@40.3007464,21.7858849,17z/data=!4m13!1m7!3m6!1s0x1359d26d28d94dff:0x7f6b8ba56b15ee18!2sEstias+3,+Kozani+501+00!3b1!8m2!3d40.3006863!4d21.7858936!3m4!1s0x1359d26d2c9a16ab:0xb6b78ea356648f1!8m2!3d40.3006863!4d21.7854351">
    Εστίας 3 
    </a> 
    </strong>
    
    </li>
    <li className={classes.divo}>
    <span className={classes.day}>Σταθερό:</span> 
    
    <strong className={classes.hour}>
    <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noopener noreferrer" href="tel:+3024610-25054">
        24610-25054
    </a> 
        </strong>
    
    </li>
    <li className={classes.divo}>
    <span className={classes.day}>Τηλ:</span> 
    <strong className={classes.hour}>
        <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noopener noreferrer" href="tel:+306946504020">
        6946504020
        </a> 
    </strong>
    </li>
    <li className={classes.divo}>
    <span className={classes.day}>E-mail</span> 
    <a target="_blank" rel="noopener noreferrer" href="mailto:chrisalmasidistkd@gmail.com" style={{cursor:'pointer', color:'white', textDecoration:'none'}} className={classes.hour}>chrisalmasidistkd@gmail.com</a>
    </li>
    </ul>
         </div>   
        </div>
    )
}


export default TelContact
