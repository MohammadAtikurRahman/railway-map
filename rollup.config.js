import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default {
  input: 'src/index.jsx', // Entry point
  output: [
    {
      file: packageJson.main, // CommonJS output
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module, // ES Module output
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies like React from the bundle
    resolve(), // Resolves node_modules imports
    commonjs(), // Converts CommonJS modules to ES6
    babel({
      exclude: 'node_modules/**', // Do not transpile node_modules
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react', '@babel/preset-env'] // React and modern JavaScript support
    }),
    terser() // Minify the output
  ]
};
