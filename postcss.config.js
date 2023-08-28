import autoprefixer from "autoprefixer";
import postcssCustomMedia from "postcss-custom-media";
import postcssImport from "postcss-import";
import postcssMediaMinmax from "postcss-media-minmax";
import postcssMixins from "postcss-mixins";
import postcssPresetEnv from "postcss-preset-env";
import postcssNested from "postcss-nested";

export default {
  map: false,
  plugins: [
    postcssNested(),
    autoprefixer(),
    postcssCustomMedia(),
    postcssImport(),
    postcssMediaMinmax(),
    postcssMixins(),
    postcssPresetEnv({
      stage: 1,
    }),
  ],
};
