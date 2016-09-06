var React = require('react');

var Articles = React.createClass({
  render: function(){
    return(
      <div className="jss-articles jss-grid">
        {
          this.props.articles.map(function(article){
            return <Article article={article} key={article.url}/>
          })
        }
      </div>
    )
  }
});

var Article = React.createClass({
  render: function(){
    var article = this.props.article;
    return(
      <article className="jss-article jss-col-6">
        <div className="jss-article-inner">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} className="jss-button">{article.source}</a>
        </div>
      </article>
    )
  }
});

module.exports = Articles;
