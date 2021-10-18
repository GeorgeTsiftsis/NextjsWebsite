import { useState } from "react";
import classes from "../../pages/Staff/style.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

function StaffList(props) {
  const [isShowing, setIsShowing] = useState(true);
  const [is2Showing, set2IsShowing] = useState(false);

  const [appState, changeState] = useState({
    activeObject: null,
    objects: props.staffMembers,
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
    router.push("Staff/" + appState.activeObject.id);
  }
  const staffList = (
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
              <img className={classes.card__image} src={element.photo} alt={element.name} />
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
                  
                  {typeof element.readMore  !== 'undefined' ? (
          (    <a className={classes.btn} onClick={showDetailsHandler}>
            {element.readMore}
           </a> )) : "" }
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
    <Head>
      <title>Α.Σ. Μακεδονική Δύναμη Κοζάνης Προσωπικό</title>
      <meta name="description" content="Αθλητικό προσωπικο Μακεδονική Δύναμη Κοζάνης" />
      </Head>
      <div>{staffList}</div>
    </>
  );
}
export default StaffList;
