import React, { memo } from "react";
import { AppBar, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { PathConstant } from "@root/const";
import Link from "next/link";

const Header = () => {
  const classes = useStyles();
  const categories = useSelector((state) => state.app.categories);

  return (
    <AppBar className={classes.root}>
      <Stack direction="row" spacing={8} className={classes.stack}>
        {categories.map((item, index) => (
          <Link
            key={index}
            href={{
              pathname: PathConstant.LIST_NEW,
              query: { id: item.id },
            }}
            className={classes.link}
          >
            <Typography className={classes.text}>{item.tenDanhMuc}</Typography>
          </Link>
        ))}
      </Stack>
    </AppBar>
  );
};

export default memo(Header);

export const HEADER_HEIGHT_IN_PX = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    height: HEADER_HEIGHT_IN_PX,
    backgroundColor: "white",
    color: theme.palette.common.black,
    overflow: "hidden",
  },
  stack: {
    alignItems: "center",
    height: "100%",
    margin: "0 80px",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  text: {
    fontWeight: 700,
    color: theme.palette.common.black,
  },
}));
