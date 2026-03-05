import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as Repack from '@callstack/repack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default Repack.defineRspackConfig({
  context: __dirname,

  entry: './index.js',

  resolve: {
    ...Repack.getResolveOptions(),
  },

  module: {
    rules: [
      {
        test: /\.[cm]?[jt]sx?$/,
        type: 'javascript/auto',
        use: {
          loader: '@callstack/repack/babel-swc-loader',
        },
      },

      ...Repack.getAssetTransformRules(),
    ],
  },

  plugins: [
    new Repack.RepackPlugin({
      context: __dirname,
      mode: 'production',
      entry: './index.js',
      platform: 'ios',
    }),
  ],
});
