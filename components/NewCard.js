import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const NewCard = ({
  className,
  imageSrc,
  title,
  imageProps = {},
  ...otherProps
}) => {
  const classes = useStyles();
  const { className: imageClassName, ...otherImageProps } = imageProps;

  return (
    <Box className={clsx(classes.root, className)} {...otherProps}>
      <Box
        className={clsx(classes.img, imageClassName)}
        component="img"
        draggable={false}
        src={imageSrc}
        {...otherImageProps}
      />
      <Box className={classes.overlay}>
        <Typography className={classes.title}>{title}</Typography>
      </Box>
    </Box>
  );
};

export default memo(NewCard);

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    minHeight: 52,
    padding: 8,
    backgroundColor: theme.palette.text.secondary,
  },
  title: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
    whiteSpace: "pre-wrap",
    overflow: "hidden",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "18px",
    color: theme.palette.common.white,
    zIndex: 1,
  },
}));
