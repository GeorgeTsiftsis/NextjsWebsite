import Image from "next/image";
import styles from "./Image.module.css";

const renderImage = () => {


  return (
      <Image  
        src={'/makedonikidinami.jpg'}
        width={0}
        height={0}
        sizes="100vw" 
        className={styles.image} 
        alt="makedonikidinami-logo"/>
  );
};
export default renderImage;
