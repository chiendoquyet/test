import React, { useEffect } from "react";
import { NewDetail } from "@root/components";
import { useDispatch } from "react-redux";
import { getDetail, reset } from "../../redux/root";
import { useRouter } from "next/router";

const NewDetailPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (id) {
      dispatch(getDetail(id));
    }

    return () => {
      dispatch(reset());
    };
  }, [id]);
  return <NewDetail />;
};

export default NewDetailPage;
