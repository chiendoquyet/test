import Api from "../api";
import { ApiConstant } from "@root/const";

export const getCategoryService = () =>
  Api.get(ApiConstant.GET_CATEGORY, {
    params: {
      loai_nguoi_dung: 4,
      skip: 0,
      limit: 30,
    },
  });

export const getNewListService = (id, skip = 0) => {
  return Api.get(ApiConstant.GET_LIST, {
    params: {
      cap_don_vi: 4,
      loai_nguoi_dung: 4,
      ma_so: "shn",
      ma_phong: "",
      skip,
      limit: 16,
      tieu_de: "",
      danh_muc_tin_tuc_id: id,
    },
  });
};

export const getNewDetailService = (id) => {
  return Api.get(ApiConstant.GET_DETAIL, { params: { id } });
};
