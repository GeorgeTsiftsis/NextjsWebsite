import classes from './TimeScedule.module.css'
function TimeScedule() {
    return (
        <div className={classes.background}>
        <div className={classes.bigdiv}> 

            <h1> Ώρες Λειτουργίας</h1>
<ul>
<li className={classes.divo}>
    <span className={classes.day}> Δευτέρα </span> 
    <div className={classes.rol}> 
    <strong >10:00-2:00 </strong> 
    <strong>17:00-22:30  </strong> 
    </div>
    </li>

<li className={classes.divo}>
    <span className={classes.day}> Τρίτη</span> 
    <div className={classes.rol}> 
    <strong >10:00-2:00 </strong> 
    <strong>17:00-22:30  </strong> 
    </div>
    </li>
    <li className={classes.divo}> 
    <span className={classes.day}> Τετάρτη</span> 
    <div className={classes.rol}> 
    <strong >10:00-2:00 </strong> 
    <strong>17:00-22:30  </strong> 
    </div>
    </li>
    <li className={classes.divo}> 
    <span className={classes.day}> Πέμπτη </span> 
    <div className={classes.rol}> 
    <strong >10:00-2:00 </strong> 
    <strong>17:00-22:30  </strong> 
    </div>
    </li>
    <li className={classes.divo}> 
    <span className={classes.day} > Παρασκευή  </span> 
    <div className={classes.rol}> 
    <strong >10:00-2:00 </strong> 
    <strong>17:00-22:30  </strong> 
    </div>
    </li>
    <li className={classes.divo}> 
    <span className={classes.day}> Σάββατο  </span> 
    <strong > 9:30-14:00</strong> 
    </li>
    <li className={classes.divo}> 
    <span className={classes.day}> Κυριακή  </span> 
    <strong>Κλειστά</strong> 
    </li>

</ul>

            
        </div>
{/* <table className={classes.table}>
    <tr className={classes.tr}><th className={classes.th}>Sunday</th><td className={classes.td}>Closed</td></tr>
    <tr className={classes.tr}><th>Monday</th><td>9am - 2pm<br/>pm - 7pm</td></tr>
    <tr className={classes.tr}><th className={classes.th}>Tuesday</th><td className={classes.td}>9am - 2pm<br/>3pm - 7pm</td></tr>
    <tr><th>Wednesday</th><td>9am - 2pm<br/>3pm - 7pm</td></tr>
    <tr><th>Thursday</th><td>9am - 2pm<br/>3pm - 7pm</td></tr>
    <tr><th>Thursday</th><td>9am - 2pm<br/>3pm - 7pm</td></tr>
</table> */}
</div>
    )
}

export default TimeScedule
