import postcssGlobalData from "@csstools/postcss-global-data";
import postcssCustomMedia from "postcss-custom-media";
import postcssNesting from "postcss-nesting";

export default {
  plugins: [
    postcssGlobalData({ files: ["src/styles/media.css"] }),
    postcssCustomMedia({ preserve: false }),
    postcssNesting(),
  ],
};
