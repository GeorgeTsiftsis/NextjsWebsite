import classes from './style.module.css'
import DiakrisiItem from '../DiakrisiItem/DiakrisiItem';
function Diakriseis(props) {

    const diakriseisList = props.diakriseis.map(function (diakrisi) {
      return <DiakrisiItem diakrisi={diakrisi} key={diakrisi.id} />;
    });
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Διακρίσεις Αθλητών</h1>
      <span className={classes.line}></span>
      <img className={classes.image} alt="Διακρίσεις Μακεδονικής Δύναμης" src="/DiakriseisAthlitwn.jpg"></img>
<h2 className={classes.title2}>Παγκόσμιες Διακρίσεις</h2>
<span className={classes.line}></span>

{/* <p><span> Αργυρό Παγκόσμιο Μάνστεστερ 2019</span></p> */}
       <div> {diakriseisList}</div> </div>
    )
}

export default Diakriseis
