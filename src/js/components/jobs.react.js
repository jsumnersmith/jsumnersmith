var React = require('react');

var Jobs = React.createClass({
  render: function(){
    return(
      <div className="jss-jobs jss-grid">
        {
          this.props.jobs.map(function(job){
            return <Job job={job} key={job.title}/>
          })
        }
      </div>
    )
  }
});

var Job = React.createClass({
  render: function(){
    var job = this.props.job;
    return(
      <div className="jss-job jss-col-12">
        <div className="jss-job-inner">
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          {job.projects && job.projects.length > 0 ? <h4>Projects</h4> : <span></span>}
          {
            job.projects.map(function(project){
              return <Project project={project} key={project.title}/>
            })
          }
        </div>
      </div>
    )
  }
});

var Project = React.createClass({
  render: function(){
    var project = this.props.project;
    return(
      <a className="jss-project" href={project.url}>{project.title}</a>
    );
  }
});


module.exports = Jobs;
