import React, { memo } from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Author = ({ name, avatar, otherProps }) => {
  const classes = useStyles();

  return (
    <Stack direction="row" spacing={2} alignItems="center" {...otherProps}>
      <Avatar src={avatar} imgProps={{ draggable: false }} />
      <Typography className={classes.name}>{name}</Typography>
    </Stack>
  );
};

export default memo(Author);

const useStyles = makeStyles(() => ({
  name: {
    fontWeight: 700,
    fontSize: 18,
  },
}));
