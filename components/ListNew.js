import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { HEADER_HEIGHT_IN_PX } from "@root/layout/components/Header";
import { PathConstant } from "@root/const";
import { useSelector } from "react-redux";
import Link from "next/link";
import NewBanner from "./NewBanner";
import InfiniteScroll from "react-infinite-scroll-component";
import NewCard from "./NewCard";
import clsx from "clsx";

const ListNew = ({ isMore, handleGetMore }) => {
  const classes = useStyles();
  const { list: newList } = useSelector((state) => state.app);

  return (
    <InfiniteScroll
      className={clsx("custom-scrollbar", classes.scroller)}
      dataLength={newList.length} //This is important field to render the next data
      next={handleGetMore}
      hasMore={isMore}
      height={`calc(100vh - ${HEADER_HEIGHT_IN_PX}px)`}
    >
      <NewBanner />
      <Grid
        container
        direction="row"
        spacing={0.25}
        className={clsx("custom-scrollbar", classes.wrapper)}
      >
        {newList.map((item, index) => (
          <Grid
            key={index}
            item
            xs={3}
            component={Link}
            href={{
              pathname: PathConstant.NEW_DETAIL,
              query: { id: item.id },
            }}
          >
            <NewCard
              key={index}
              imageSrc={item.anhDaiDien}
              title={item.tieuDe}
            />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default ListNew;

const useStyles = makeStyles(() => ({
  scroller: {
    overflow: "hidden scroll",
    marginRight: -4,
  },
  wrapper: {
    marginTop: 0,
  },
}));
