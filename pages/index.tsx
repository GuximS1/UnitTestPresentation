import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";
import Buttons from "../testing/components/Buttons";
import Company from "../testing/components/Modal";
import { fibonacci } from "../testing/functions/fibonacci";
const Home: NextPage = () => {
  // console.log(fibonacci(100));

  return (
    <div className={styles.container}>
      {/* <Buttons /> */}
      <Company />
    </div>
  );
};

export default Home;
