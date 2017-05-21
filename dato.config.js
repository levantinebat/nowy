const by = require('sort-by');
const ellipsize = require('ellipsize');

module.exports = (dato, root, i18n) => {
  const navData = { url: dato.homepage.logo.url()}
  root.createDataFile("data/navbar.toml", 'toml', navData)
  root.createDataFile("data/index.toml", 'toml',
  {
    url: dato.heroImage.heroImage.url()
  });

  const heroData = {
    first: dato.heroCopy.first,
    second: dato.heroCopy.second,
    third: dato.heroCopy.third,
  }
  root.createDataFile("data/copy.toml", 'toml', heroData)


  root.directory("content", (dir) => {
    const about = dato.aboutPage;

    dir.createPost("about.html", "toml", {
      frontmatter:  {
        type:'about',
        historia: about.historia,
        title: about.title,
        body_id: "kim-jestesmy",
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
