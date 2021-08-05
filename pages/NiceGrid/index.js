import classes from "./styler.module.css";
import { useState } from "react";
function NiceGrid() {
  const [isShowing, setIsShowing] = useState(true);

  var zindex = 10;

  const handleClick = (e) => {
    e.preventDefault();
    setIsShowing((setIsShowing) => (setIsShowing = !setIsShowing));
  };

  return (
    <section className={classes.sectionn}>
      <div className={isShowing ? classes.cards : `${classes.cards} ${classes.showing}`}>
        <div className={isShowing ? classes.card : `${classes.card} ${classes.show}`}>
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

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </a>
            <h2>
              Card title
              <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.</div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </a>
            <h2>
              Card title
              <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.</div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </a>
            <h2>
              Card title
              <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.</div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </a>
            <h2>
              Card title
              <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.</div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </a>
            <h2>
              Card title
              <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.</div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </a>
            <h2>
              Card title
              <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.</div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </a>
            <h2>
              Card title
              <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.</div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </a>
            <h2>
              Card title
              <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.</div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NiceGrid;
