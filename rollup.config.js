import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default {
    input: 'src/index.js', // Entry point
    output: [
        {
            file: packageJson.main,
            format: 'cjs', // CommonJS
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm', // ES Module
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
        }),
        terser(),
    ],
};
