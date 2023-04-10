import React, { useEffect } from "react";
import { Header } from "./components";
import { NoSsr, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { HEADER_HEIGHT_IN_PX } from "./components/Header";
import { useDispatch } from "react-redux";
import { getCategories } from "@root/redux/root.js";
import Head from "next/head";
import clsx from "clsx";

export default function MainLayout({ children }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NoSsr>
        <Header />
        <main>
          <Container className={clsx("custom-scrollbar", classes.root)}>
            {children}
          </Container>
        </main>
      </NoSsr>
    </>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    maxHeight: "100vh",
    overflow: "hidden",
    padding: `${HEADER_HEIGHT_IN_PX}px 20px 0`,
    maxWidth: "unset",
    overflowY: "scroll",
  },
}));
