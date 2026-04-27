const markdownIt = require("markdown-it");
const markdownItImageFigures = require("markdown-it-image-figures");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
  const markdownLibrary = markdownIt({
    html: true,
  })
    .use(markdownItFootnote)
    .use(markdownItImageFigures, {
      figcaption: "title",
    });

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    pathPrefix: "/tldr/",
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
    },
  };
};
