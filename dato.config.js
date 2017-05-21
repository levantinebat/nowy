const by = require('sort-by');
const ellipsize = require('ellipsize');

module.exports = (dato, root, i18n) => {
  const navData = dato.homepage.logo.url();
  root.createDataFile("data/navbar.toml", 'toml', navData)

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
