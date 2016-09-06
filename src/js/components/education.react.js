var React = require('react');

var Education = React.createClass({
  render: function(){
    return(
      <div className="jss-education jss-grid">
        {
          this.props.education.map(function(degree){
            return <Degree degree={degree} key={degree.title}/>
          })
        }
      </div>
    )
  }
});

var Degree = React.createClass({
  render: function(){
    var degree = this.props.degree;
    return(
      <div className="jss-degree jss-col-12">
        <div className="jss-degree-inner">
          <h3>{degree.title}</h3>
          <p>{degree.description}</p>
        </div>
      </div>
    )
  }
});

module.exports = Education;
