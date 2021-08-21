import Horizontal2Line from "../../components/HorizontalLine/Horizontal2Line";
import firebase from "../../components/util/firebase";
import StaffList from "../../components/CompStaff/StaffList";

function Staff(props) {
  return (
    <section>
      <Horizontal2Line />
      <StaffList staffMembers={props.staffMembers} key={props.id} />
    </section>
  );
}
export default Staff;

export async function getStaticProps(context) {
  const staffMembers = [];

  await firebase
    .database()
    .ref("Staffs")
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        staffMembers.push(child.val());
      });
    });
  return {
    props: { staffMembers },
  };
}
