import classes from './style.module.css'
function DiakrisiItem(props) {
    return (
        <div className={classes.bigDiv}>
            <h1 className={classes.name}> {props.diakrisi.name}</h1>
            <p className={classes.diakrisi}> {props.diakrisi.diakrisi}</p>
            <p className={classes.locationYear}> {props.diakrisi.locationYear}</p>
            <div className={classes.divImages}>
            <img className={classes.img1}  src={props.diakrisi.img1} alt={props.diakrisi.name}></img>
            {typeof props.diakrisi.img2  !== 'undefined' ? (
          (     <img className={classes.img1}  src={props.diakrisi.img2} alt={props.diakrisi.name}></img> )) : "" }
            {typeof props.diakrisi.img3  !== 'undefined' ? (
          (     <img className={classes.img1}  src={props.diakrisi.img3} alt={props.diakrisi.name}></img> )) : "" }
           
            </div>
        </div>
    )
}

export default DiakrisiItem;
