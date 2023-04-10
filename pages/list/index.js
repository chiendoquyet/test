import React, { useEffect, useState } from "react";
import { ListNew } from "@root/components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getList, reset } from "../../redux/root";

const List = () => {
  const router = useRouter();
  const categoryId = router.query.id;
  const dispatch = useDispatch();

  const { categories, pagination } = useSelector((state) => state.app);

  const [isMore, setIsMore] = useState(true);

  const handleGetMore = () => {
    let id = categoryId;
    if (!id) {
      id = categories[0]?.id;
    }
    if (pagination.limit === 16) {
      dispatch(getList(id));
      return;
    }
    setIsMore(false);
  };

  useEffect(() => {
    if (categoryId) {
      dispatch(getList(categoryId));
    } else {
      const id = categories[0]?.id;
      if (id) {
        dispatch(getList(id));
      }
    }

    return () => {
      setIsMore(true);
      dispatch(reset());
    };
  }, [categoryId, categories]);

  return (
    <>
      <ListNew isMore={isMore} handleGetMore={handleGetMore} />
    </>
  );
};

export default List;
