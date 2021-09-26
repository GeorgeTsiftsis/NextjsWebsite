import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState, useEffect } from "react";
import classes from "./counter.module.css";
// import Mycounter from "./layoutfornod";

export default function Counter() {
  const [gre, setGre] = useState(false);
  const [eur, setEur] = useState(false);
  const [glo, setGlo] = useState(false);

  useEffect(() => {}, [gre, eur, glo]);

  return (
    // <Mycounter>
    <section className={classes.container}>
      <div className={classes.minicontainer}>
        <CountUp start={gre ? 0 : null} end={350} duration={1} redraw={true}>
          {({ countUpRef }) => (
            <div className={classes.containerfornumbera}>
              <span className={classes.number} ref={countUpRef} />
              <VisibilitySensor
                partialVisibility
                offset={{ top: 10 }}
                onChange={(isVisible) => {
                  if (isVisible) {
                    setGre(true);
                  }
                }}
              >
                <a className={classes.text}>Πανελλήνιες Διακρίσεις</a>
              </VisibilitySensor>
            </div>
          )}
        </CountUp>
        <CountUp className={classes.containerfornumber} start={eur ? 0 : null} end={12} duration={1} redraw={true}>
          {({ countUpRef }) => (
            <div className={classes.containerfornumbera}>
              <span className={classes.number} ref={countUpRef} />
              <VisibilitySensor
                partialVisibility
                offset={{ top: 10 }}
                onChange={(isVisible) => {
                  if (isVisible) {
                    setEur(true);
                  }
                }}
              >
                <a className={classes.text}>Πανευρωπαικές Διακρίσεις</a>
              </VisibilitySensor>
            </div>
          )}
        </CountUp>
        <CountUp className={classes.containerfornumber} start={glo ? 0 : null} end={5} duration={1} redraw={true}>
          {({ countUpRef }) => (
            <div className={classes.containerfornumbera}>
              <span className={classes.number} ref={countUpRef} />
              <VisibilitySensor
                partialVisibility
                offset={{ top: 10 }}
                onChange={(isVisible) => {
                  if (isVisible) {
                    setGlo(true);
                  }
                }}
              >
                <a className={classes.text}>Παγκόσμιες Διακρίσεις</a>
              </VisibilitySensor>
            </div>
          )}
        </CountUp>
      </div>
    </section>
    // </Mycounter>
  );
}

// return (
//   <div>
//     <CountUp start={focus ? 0 : null} end={100} duration={3} redraw={true}>
//       {({ countUpRef }) => (
//         <div>
//           <span ref={countUpRef} />
//           <VisibilitySensor
//             onChange={(isVisible) => {
//               if (isVisible) {
//                 setFocus(true);
//               }
//             }}
//           >
//             <a>Πανελλήνιες Διακρίσεις</a>
//           </VisibilitySensor>
//         </div>
//       )}
//     </CountUp>
//   </div>
// );
