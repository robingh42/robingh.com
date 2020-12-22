module.exports = {
    title: "Robin Graham-Hayes",
    description: "A Portfolio website for Robin Graham-Hayes",
    head: [
          ['link', { rel: 'icon', href: '/RGH_Logo_White_thick.png' }]
    ],
    themeConfig: {
        logo: '/RGH_Logo_thick.png',
        search: false,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Portfolio', link: '/portfolio/' },
          { text: 'Art', link: '/art/' },
          { text: 'Resume', link: 'https://robingh.com/RGH_Resume.pdf', target:'_self' }
        ],
      }
}