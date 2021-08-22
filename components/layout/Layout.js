import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Footer from "../layout/Footer/index";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <motion.main className={classes.main} initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
        {props.children}
      </motion.main>
      <Footer />
    </div>
  );
}

export default Layout;
