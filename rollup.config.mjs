import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'dist/esm/index.js',
  external: ['@capacitor/core'],
  plugins: [resolve(), commonjs()],
  output: [
    // ✅ proper ESM output for vite/angular
    {
      file: 'dist/plugin.js',
      format: 'es',
      sourcemap: true,
      inlineDynamicImports: true, // <-- important
    },
    // ✅ commonjs output
    {
      file: 'dist/plugin.cjs.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      inlineDynamicImports: true, // <-- important
    },
  ],
};
