import styles from "./Image.module.css";
import Image from "next/image";

const renderImage = ({ width, maxWidth, ...rest }) => {


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
