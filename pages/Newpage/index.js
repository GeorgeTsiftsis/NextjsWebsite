function NewPage({ anouncements }) {
  console.log(anouncements);
  return (
    <ul>
      {anouncements.map((anouncement) => (
        <li>{anouncement.date}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://initialise-6d68a-default-rtdb.europe-west1.firebasedatabase.app/Todo.json");
  const data = await res.json();

  return {
    props: {
      anouncements: data.anouncements,
      // ?? true | undefined
    },
    revalidate: 10,
  };
  // console.log(anouncements);
}

export default NewPage;
