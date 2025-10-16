import getRuleName from "../../utils/name.mjs";

export default {
  name: getRuleName(import.meta.url), 
  rules: {
    strict: ['error', 'never']
  }
};
