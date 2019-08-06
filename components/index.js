/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (ENV !== 'production' &&
    ENV !== 'test' &&
    typeof console !== 'undefined' &&
    console.warn &&
    typeof window !== 'undefined') {
  console.warn(
    'You are using a whole package of antd, ' +
    'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */

export { default as Button } from './button';
export { default as RangePicker } from './rangepicker';
export { default as RangePickerMonth } from './rangepickermonth';
export { default as DateTimePicker } from './datetimepicker';
export { default as axiosCon } from './axioscon';
export { default as Data } from './data';
export { default as Select } from './select';
export { default as version } from './version';
export { default as Bubble } from './wankebubble';
export { default as withCon } from './wankecon';
export { default as WankeTable } from './wanketable';
