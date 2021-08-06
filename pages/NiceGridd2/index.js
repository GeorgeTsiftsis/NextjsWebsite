import { useState } from "react";
import classes from "./style.module.css";

function NiceGridd() {
  const [isShowing, setIsShowing] = useState(true);
  const [is2Showing, set2IsShowing] = useState(false);

  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  });

  function toggleActive(index) {
    // isShowing(false);
    // set2IsShowing((set2IsShowing) => (set2IsShowing = !set2IsShowing));

    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  const handleClick = (e) => {
    var zindex = 10;
    e.preventDefault();
    setIsShowing((setIsShowing) => (setIsShowing = !setIsShowing), { Zindex: zindex }, zindex++);
    set2IsShowing((set2IsShowing) => (set2IsShowing = !set2IsShowing), { Zindex: zindex }, zindex++);
  };

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject && is2Showing) {
      return `${classes.card} ${classes.show}`;
    } else {
      return `${classes.card}`;
    }
    // set2IsShowing((set2IsShowing) => (set2IsShowing = !set2IsShowing));
  }

  //   function toggleCardStyles(index) {
  //     if (appState.objects[index] === appState.activeObject) {
  //       return `${classes.cards} ${classes.showing}`;
  //     } else {
  //       return `${classes.cards}`;
  //     }
  //   }

  return (
    <section className={classes.sectionn}>
      <div className={isShowing ? `${classes.cards}` : `${classes.cards} ${classes.showing}`}>
        {appState.objects.map((elements, index) => (
          <div
            key={index}
            className={toggleActiveStyles(index)}
            onClick={() => {
              toggleActive(index);
            }}
          >
            <div className={`${classes.card__image_holder}`}>
              <img className={classes.card__image} src="https://source.unsplash.com/300x225/?wave" alt="wave" />
            </div>
            <div className={`${classes.card_title}`}>
              <a href="#" className={`${classes.toggle_info} ${classes.btn}`} onClick={handleClick}>
                <span className={classes.left}></span>
                <span className={classes.right}></span>
              </a>
              <h2>
                Card title
                <small>Image from unsplash.com</small>
              </h2>
            </div>
            <div className={`${classes.card_flap} ${classes.flap1}`}>
              <div className={classes.card_description}>This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.</div>
              <div className={`${classes.card_flap} ${classes.flap2}`}>
                <div className={classes.card_actions}>
                  <a href="#" className={classes.btn}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NiceGridd;
