const by = require('sort-by');
const ellipsize = require('ellipsize');

module.exports = (dato, root, i18n) => {

  // inside a "post" directory...
  root.directory("content/episode", (dir) => {

    // ...iterate over the "Blog post" records...
    dato.blogPosts.forEach((blogPost) => {

      // ...and create a markdown file for each article!
      dir.createPost(`${blogPost.slug}.html`, "toml", {
        frontmatter: {
          title: blogPost.title,
          type: "post",
          date: blogPost.publishedAt,
          category: blogPost.content,
        },
        content: blogPost.content
      });
    });
  });
}
