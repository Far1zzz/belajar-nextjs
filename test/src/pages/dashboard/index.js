import React from "react";
import GeneratePDF from "../../components/GeneratePDF";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/People");
  const people = await res.json();
  return {
    props: {
      people,
    },
  };
}

const index = ({ people }) => {
  console.log(people);
  return (
    <>
      <div> table</div>
      <div>
        <ul>
          {people.map(({ name }, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
      <GeneratePDF person={people} />
    </>
  );
};

export default index;
