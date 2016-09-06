module.exports = {
  // Method for creating VM
  articles: function(){
    return articles;
  },
  links: function(){
    return links;
  },
  jobs: function(){
    return jobs;
  },
  education: function(){
    return education;
  }

};
var articles = [
  // {
  //   title: '',
  //   url: '',
  //   description: ''
  // }
  {
    title: 'Notes on The Solipsism of the Prophet-Novelist in Roth',
    url: 'https://medium.com/@jsumnersmith/notes-on-the-solipsism-of-the-prophet-novelist-in-roth-cbe940783cc9#.75xg0xdbl',
    description: "About what a novelist might mean in relationship to society.",
    source: 'Read on Medium'
  },
  {
    title: 'Finding Consolation',
    url: 'https://medium.com/@jsumnersmith/finding-consolation-5652d2f4e1fe#.kj56mc6pm',
    description: 'What can the classics teach us about fiduciary commitments and vocation?',
    source: 'Read on Medium'
  },
  {
    title: 'A Lyric Virtue',
    url: 'https://medium.com/@jsumnersmith/a-lyric-virtue-788c5ed0673#.1jj355sdv',
    description: 'On the uses and spiritual shape of lyric poetry.',
    source: 'Read on Medium'
  },
]

var links = [
  // {
  //   url: 'url',
  //   svg: 'path'
  // },
  {
    url: 'https://github.com/jsumnersmith',
    svg: 'images/github.svg'
  },
  {
    url: 'https://twitter.com/jsumnersmith',
    svg: 'images/twitter.svg'
  }
];

var jobs = [
  // {
  //   title: '',
  //   description: '',
  //   projects: [
  //     {
  //       title: '',
  //       url: ''
  //     }
  //   ]
  // }
  {
    title: 'Kickup',
    description: 'Frontend Engineer: Django, React, LESS',
    projects: []
  },
  {
    title: "P'unk Ave",
    description: 'Lead Frontend Developer: Node.js, jQuery, LESS',
    projects: [
      {
        url: 'http://apostrophenow.org',
        title: 'Apostrophe'
      },
      {
        url: 'http://www.fandm.edu',
        title: 'Franklin & Marshall College'
      },
      {
        url: 'http://pennpep.upenn.edu/',
        title: "University of Pennsylvania President's Engagement Prize"
      },
      {
        url: 'http://smparchitects.com/',
        title: "SMP Architects"
      },
      {
        url: 'http://greenestreetfriends.org/',
        title: "Greene Street Friends School"
      },
      {
        url: 'http://junto.org',
        title: "The Junto"
      }
    ]
  },
  {
    title: 'CharityGiftMarket.com',
    description: 'CoFounder & CTO: Big Commerce, Magento, jQuery, CSS',
    projects: []
  },
  {
    title: 'Camden County Technical School',
    description: 'English Teacher',
    projects: []
  },
]

var education = [
  {
    title: "M.A. English",
    description: "University of Dallas"
  },
  {
    title: "B.S. Secondary English Education, Religious Studies",
    description: "Clarks Summit University"
  }
]
