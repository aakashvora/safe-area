import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'dist/esm/index.js', // Capacitor's tsc output (esm build)
  external: ['@capacitor/core'],
  plugins: [resolve(), commonjs()],
  output: [
    // ✅ ESM build (for "module")
    {
      file: 'dist/plugin.js',
      format: 'es',
      sourcemap: true,
    },
    // ✅ CJS build (for "main")
    {
      file: 'dist/plugin.cjs.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ],
};
