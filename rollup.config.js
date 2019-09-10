import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'dist/index.js',

  external: ['component-library', 'component-library/loader', 'react', 'react-dom'],

  plugins: [resolve()],

  output: [
    {
      format: 'cjs',
      file: pkg.main
    },
    {
      format: 'es',
      file: pkg.module
    }
  ]
};
