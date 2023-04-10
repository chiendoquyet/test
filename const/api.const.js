export const BASE_URL = "http://api-tintuc-dev.enetviet.com";
export const TIME_OUT_REQUEST = 30000;
export const KEY_TOKEN = "Authorization";

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;
export const STT_NOT_MODIFIED = 304;

export const GET_DETAIL = "/TinTucHeThong/GetChiTietTinTuc";
export const GET_CATEGORY = "/DanhMucTinTuc/GetDanhSachDanhMucTinTuc";
export const GET_LIST = "/TinTucHeThong/GetDanhSachTinTuc";
