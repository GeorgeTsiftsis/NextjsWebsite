import { motion } from "framer-motion";
import HorizontalLine from "../../components/HorizontalLines/HorizontalLine/HorizontalLine";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
function Draseis() {
  return (
    <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
        <HorizontalLine title={"ΔΡΑΣΕΙΣ"}  />
    </motion.section>
  );
}

export default Draseis;
