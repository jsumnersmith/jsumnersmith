var React = require('react');

var Links = React.createClass({
  render: function(){
    return(
      <div className="jss-links">
        {
          this.props.links.map(function(link){
            return <Link link={link} key={link.url}/>
          })
        }
      </div>
    )
  }
});

var Link = React.createClass({
  render: function(){
    var link = this.props.link;
    return(
      <a href={link.url} className="jss-link">
        <img src={link.svg} />
      </a>
    )
  }
});

module.exports = Links;
