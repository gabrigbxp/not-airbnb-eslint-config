import { basic } from './index.mjs';
import javascript from './rules/javascript/index.mjs';
import react from './rules/react/index.mjs';
import typescript from './rules/typescript/index.mjs';

export default [
  ...basic,
  ...javascript,
  ...react,
  ...typescript,
];
