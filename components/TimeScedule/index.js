import classes from './TimeScedule.module.css'
function TimeScedule() {


const dates = [
  {
    day: "Δευτέρα-Παρασκευή",
    time: ["10:00-14:00", "17:00-22:30"]
  },

//   {

//   {
//    day: "Πέμπτη",
//     time: ["10:00-14:00", "17:00-22:30"]
//   },
//   {
//    day: "Παρασκευή",
//     time: ["10:00-14:00", "17:00-22:30"]
//   },
  {
   day: "Σάββατο",
    time: ["09:30-14:00", ]
  },
    {
   day: "Κυριακή",
    time: ["Κλειστά", ]
  },
]



    return (
      <div className={classes.background}>
        <div className={classes.bigdiv}> 

            <h1> Ώρες Λειτουργίας</h1>
        <ul>

          {dates.map(({ day, time }) => (
                <li key={day} className={classes.divo}>
                    {/* <div className={classes.daycol}>   */}
                     <span className={classes.day}>{day}</span> 
                     {/* </div> */}
                     <div className={classes.rol}> 
                        <strong >{time[0]}</strong> 
                        <strong >{time[1]}</strong> 
                  </div>
                </li>
     ))}
        </ul>

            </div>
            </div>
    )
}

export default TimeScedule
