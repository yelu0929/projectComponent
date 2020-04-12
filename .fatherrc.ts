import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: 'rollup',
  esm: 'rollup',
  doc: {
    typescript: true,
    title: '烽火工程组件',
    base: '/projectComponent/',
  },
};

export default options;
