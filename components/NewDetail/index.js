import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Author from "./Author.";
import dayjs from "dayjs";

const NewDetail = () => {
  const classes = useStyles();
  const newDetail = useSelector((state) => state.app.new);

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{newDetail.tieuDe}</Typography>
      <Author
        className={classes.author}
        name={newDetail.tacGia}
        avatar={newDetail.anhDaiDien}
      />
      <Typography className={classes.date}>
        {dayjs(newDetail.ngayTao).format("dddd, DD/MM/YYYY, hh:mm (Z)")}
      </Typography>
      <Divider className={classes.divider} />
      <Box
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: newDetail.noiDung }}
      ></Box>
    </Box>
  );
};

export default NewDetail;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "40px auto",
    maxWidth: 1240,
  },
  title: {
    fontWeight: 900,
    fontSize: 32,
    lineHeight: "34px",
    marginBottom: 24,
  },
  author: {
    marginTop: 16,
  },
  date: {
    color: theme.palette.grey.A700,
  },
  divider: {
    borderWidth: 1.5,
  },
  wrapper: {
    marginTop: 16,
  },
}));
