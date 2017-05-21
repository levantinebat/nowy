const by = require('sort-by');
const ellipsize = require('ellipsize');

module.exports = (dato, root, i18n) => {

  // inside a "post" directory...
  // root.directory("content/episode", (dir) => {
  //
  //   // ...iterate over the "Blog post" records...
  //   dato.blogPosts.forEach((blogPost) => {
  //
  //     // ...and create a markdown file for each article!
  //     dir.createPost(`${blogPost.slug}.html`, "toml", {
  //       frontmatter: {
  //         title: blogPost.title,
  //         type: "post",
  //         date: blogPost.publishedAt,
  //         category: blogPost.content,
  //       },
  //       content: blogPost.content
  //     });
  //   });
  // });
  root.directory("content", (dir) => {
    const about = dato.aboutPage;
    dir.createPost("about.html", "toml", {
      frontmatter:  {
        type:'about',
        historia: about.historia,
        title: about.title,
      },
      content: about.content,
    });


    // ...iterate over the "Blog post" records...
      // ...and create a markdown file for each article!
      // dir.createPost(`${about_page.slug}.html`, "toml", {
      //   frontmatter: {
      //     title: about_page.title,
      //     historia: about_page.historia,
      //     type: "post",
      //     date: about_page.publishedAt,
      //   },
      //   content: about_page.content
      // });

  });

}
