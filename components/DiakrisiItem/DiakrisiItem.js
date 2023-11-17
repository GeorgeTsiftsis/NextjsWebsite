import React from 'react';
import styles from './style.module.css';

function DiakrisiItem(props) {
    const { name, diakrisi, locationYear, img1, img2, img3 } = props.diakrisi;

    const renderImage = (imgSrc, index) => (
      imgSrc && <img key={index} className={styles.img} src={imgSrc} alt={name} />
  );

    return (
        <div className={styles.bigDiv}>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.diakrisi}>{diakrisi}</p>
            <p className={styles.locationYear}>{locationYear}</p>
            <div className={styles.divImages}>
                {[img1, img2, img3].map((imgSrc, index) => renderImage(imgSrc, index))}
            </div>
        </div>
    );
}

export default DiakrisiItem;
