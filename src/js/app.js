//Main bootstrapping file.
var React = require('react');
var ReactDOM = require('react-dom');
var Articles = require('./components/articles.react');
var Links = require('./components/links.react');
var Jobs = require('./components/jobs.react');
var Education = require('./components/education.react');
var Data = require('./data/api.js');

ReactDOM.render(
  <Articles articles={Data.articles()}/>,
  document.getElementById('articles')
);

ReactDOM.render(
  <Links links={Data.links()}/>,
  document.getElementById('links')
);

ReactDOM.render(
  <Jobs jobs={Data.jobs()}/>,
  document.getElementById('jobs')
);

ReactDOM.render(
  <Education education={Data.education()}/>,
  document.getElementById('education')
);
