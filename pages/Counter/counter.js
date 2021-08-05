import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import classes from "./counter.module.css";

export default function Counter() {
  const [gre, setGre] = useState(false);
  const [eur, setEur] = useState(false);
  const [glo, setGlo] = useState(false);

  return (
    <section className={classes.container}>
      <div className={classes.minicontainer}>
        <CountUp start={gre ? 0 : null} end={120} duration={1} redraw={true}>
          {({ countUpRef }) => (
            <div className={classes.containerfornumbera}>
              <span className={classes.number} ref={countUpRef} />
              <VisibilitySensor
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
        <CountUp className={classes.containerfornumber} start={eur ? 0 : null} end={20} duration={1} redraw={true}>
          {({ countUpRef }) => (
            <div className={classes.containerfornumbera}>
              <span className={classes.number} ref={countUpRef} />
              <VisibilitySensor
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
        <CountUp className={classes.containerfornumber} start={glo ? 0 : null} end={14} duration={1} redraw={true}>
          {({ countUpRef }) => (
            <div className={classes.containerfornumbera}>
              <span className={classes.number} ref={countUpRef} />
              <VisibilitySensor
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
