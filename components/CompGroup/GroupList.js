import { useState } from "react";
import classes from "../../pages/Groups/style.module.css";
import { useRouter } from "next/router";

function GroupList(props) {
  const [isShowing, setIsShowing] = useState(true);
  const [is2Showing, set2IsShowing] = useState(false);

  const [appState, changeState] = useState({
    activeObject: null,
    objects: [props.GroupMembers[0], props.GroupMembers[1], props.GroupMembers[2], props.GroupMembers[3], props.GroupMembers[4]],
  });

  function toggleActive(index) {
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
  }

  const router = useRouter();
  function showDetailsHandler() {
    router.push("Groups/" + appState.activeObject.id);
  }
  const groupList = (
    <section className={classes.sectionn}>
      <div className={isShowing ? `${classes.cards}` : `${classes.cards} ${classes.showing}`}>
        {appState.objects.map((element, index, props) => (
          <div
            key={index}
            className={toggleActiveStyles(index)}
            onClick={() => {
              toggleActive(index);
            }}
          >
            <div className={`${classes.card__image_holder}`}>
              <img className={classes.card__image} src={element.photo} alt="wave" />
            </div>
            <div className={`${classes.card_title}`}>
              <a href="#" className={`${classes.toggle_info} ${classes.btn}`} onClick={handleClick}>
                <span className={classes.left}></span>
                <span className={classes.right}></span>
              </a>
              <h2>
                {element.name}
                <small>{element.role}</small>
              </h2>
            </div>
            <div className={`${classes.card_flap} ${classes.flap1}`}>
              <div className={classes.card_description}>{element.description}</div>
              <div className={`${classes.card_flap} ${classes.flap2}`}>
                <div className={classes.card_actions}>
                  <a className={classes.btn} onClick={showDetailsHandler}>
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
  return (
    <>
      <div>{groupList}</div>
    </>
  );
}
export default GroupList;
