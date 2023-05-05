import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home({ people }) {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <ul>
          {people.map(({ name }, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
      <div></div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/People");
  const people = await res.json();

  return {
    props: {
      people,
    },
  };
}
