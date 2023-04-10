import React from "react";
import { Fragment } from "react";
import { PathConstant } from "../const";

export default function Home() {
  return <Fragment />;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: PathConstant.LIST_NEW,
    },
  };
};
