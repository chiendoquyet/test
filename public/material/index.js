import createCache from "@emotion/cache";
import { createTheme } from "@mui/material";
import { palette } from "@root/public/material/components";

const theme = createTheme({
  palette,
});
const createEmotionCache = () =>
  createCache({
    key: "css",
    prepend: true,
  });

export { createEmotionCache, theme };
