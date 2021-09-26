import { motion } from "framer-motion";
import HorizontalLine from "../../components/HorizontalLines/HorizontalLine/HorizontalLine";
import Head from 'next/head';
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
function Draseis() {
  return ( 
    <>
    <Head>
      <title> Α.Σ. Μακεδονική Δύναμη Κοζάνης Δράσεις </title>
      <meta name="description" content="Χώρος εκγύμνασης για σας αλλά και για τα παιδιά σας με ασφάλεια. Αθλητικός Σύλλογος Μαθημάτων Ταε-Κβον-Ντο Συγχρόνος Χορός Ρυθμική και αερόβια Γυμναστική." />
      </Head>
    <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
        <HorizontalLine title={"ΔΡΑΣΕΙΣ"}  />
    </motion.section>
    </>
  );
}

export default Draseis;
