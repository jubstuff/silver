const util = require("util");
const dayjs = require("dayjs");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dump", (obj) => {
    return util.inspect(obj);
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dayjs(dateObj).format('DD MMM YYYY');
  });

  // source folder as key, destination folder as value
  // I've also optimized the methods call, putting all in one object
  eleventyConfig.addPassthroughCopy({
    "public/css": "css",
    "public/js": "js",
    "public/img": "img",
  });
  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts",
    },
  };
};
