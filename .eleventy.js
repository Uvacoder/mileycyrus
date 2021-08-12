module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addPassthroughCopy("src/js");
	return {
		dir: {
			// enable passthrough file copy for static assets.
			passthroughFileCopy: true,

			// set nunjucks as our template engine
			htmlTemplateEngine: 'njk',
			markdownTemplateEngine: 'njk',
			dataTemplateEngine: 'njk',
			templateFormats: ["html", "njk", "md"],

			// set our prefered input and output directories
			input: "src",
			output: "_site",
		}
	};
};