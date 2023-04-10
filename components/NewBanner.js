import React from "react";
import { NewCard } from "../components";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const NewBanner = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0.25}>
      <Grid xs={10} item className={classes.mainNew}>
        <NewCard
          imageSrc={listNewSpecial[0].src}
          title={listNewSpecial[0].title}
        />
      </Grid>
      <Grid container item xs={2} spacing={0.25}>
        {listNewSpecial.map((item, index) => (
          <Grid key={index} xs={12} item className={classes.new}>
            <NewCard imageSrc={item.src} title={item.title} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const listNewSpecial = [
  {
    title:
      "The Image Embed element The Image Embed element The Image Embed element",
    src: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg",
  },
  {
    title: "The Image Embed element",
    src: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg",
  },
  {
    title: "The Image Embed element",
    src: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg",
  },
];

export default NewBanner;
export const HEIGHT_PANEL_IN_PX = 480;

const useStyles = makeStyles(() => ({
  mainNew: {
    height: HEIGHT_PANEL_IN_PX,
  },
  new: {
    height: HEIGHT_PANEL_IN_PX / 3,
  },
}));
