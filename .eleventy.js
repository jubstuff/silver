const util = require("util");
const dayjs = require("dayjs");

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addFilter("dump", (obj) => {
    return util.inspect(obj);
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dayjs(dateObj).format("DD MMM YYYY");
  });

  eleventyConfig.addPairedNunjucksShortcode("container", function(content) {
    return `
    <div class="content my-12">
      <div class="content-measure px-5">
          ${content}
      </div>
    </div>
`;
  });

  // source folder as key, destination folder as value
  // I've also optimized the methods call, putting all in one object
  eleventyConfig.addPassthroughCopy({
    "assets/css": "css",
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
