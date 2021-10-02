import Diakriseis from "../../components/Diakriseis/Diakriseis"
import firebase from "../../components/util/firebase"
import Head from 'next/head'
function index(props) {
    return (
      <>
       <Head>
      <title> Α.Σ. Μακεδονική Δύναμη Κοζάνης Διακρίσεις Αθλητών </title>
      <meta name="description" content="Διακρίσεις Αθλητών σε Ταε-Κβον-Ντο για την Μακεδονικη Δύναμη Κοζάνης" />
      </Head>
        <div>
            <Diakriseis diakriseis={props.diakriseis}/>
        </div>
        </>
    )
}

export default index

export async function getServerSideProps(context) {
    const diakriseis = [];
  
    const response = await firebase
      .database()
      .ref("Diakriseis")
      .once("value", (snapshot) => {
        snapshot.forEach((child) => {
          diakriseis.push(child.val());
        });
      });
  
    return {
      props: {
        diakriseis,
      },
    };
  }
