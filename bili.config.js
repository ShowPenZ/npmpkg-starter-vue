module.exports = {
  babel: {
    // asyncToPromises: true,
    babelrc: true,
    // configFile: false,
    // jsx: 'react',
    // minimal: false,
    // objectAssign: 'myAssign',
  },
  banner: false,
  bundleNodeModules: true,
  // env: { NODE_ENV: 'develope' },
  // extendConfig: () => {},
  // extendRollupConfig: () => {},
  // externals: [],
  globals: {
    vue: 'Vue',
  },
  input: 'src/xxxx.vue',
  output: {
    dir: 'dist',
    extractCSS: true,
    // fileName: '[name][suffix].js',
    format: ['cjs-min', 'es-min', 'umd-min'],
    minify: true,
    moduleName: 'xxxx',
    sourceMap: true,
    sourceMapExcludeSources: true,
    target: 'browser',
  },

  // plugins: {
  //   vue: true,
  // },
  // resolvePlugins: {},
};
