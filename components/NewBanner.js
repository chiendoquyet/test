import React from "react";
import { NewCard } from "../components";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { PathConstant } from "@root/const";
import Link from "next/link";

const NewBanner = () => {
  const classes = useStyles();
  const { list } = useSelector((state) => state.app);

  return (
    <Grid container spacing={0.25}>
      <Grid
        xs={10}
        item
        className={classes.mainNew}
        component={Link}
        href={{
          pathname: PathConstant.NEW_DETAIL,
          query: { id: list[0]?.id },
        }}
      >
        <NewCard imageSrc={list[0]?.anhDaiDien} title={list[0]?.tieuDe} />
      </Grid>
      <Grid container item xs={2} spacing={0.25}>
        {list.slice(1, 4)?.map((item, index) => (
          <Grid
            key={index}
            xs={12}
            item
            className={classes.new}
            component={Link}
            href={{
              pathname: PathConstant.NEW_DETAIL,
              query: { id: item.id },
            }}
          >
            <NewCard imageSrc={item.anhDaiDien} title={item.tieuDe} />
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
