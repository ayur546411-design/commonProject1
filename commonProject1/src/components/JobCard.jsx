function JobCard(props) {
  return (
    <div className="job-card">
      <div>
        <h3>{props.title}</h3>
        <p className="company">{props.company}</p>

        <div className="info">
          <span>{props.type}</span>
          <span>{props.salary}</span>
          <span>{props.location}</span>
        </div>
      </div>

      <div className="right">
        <p>{props.time}</p>
        <button className="details">Job Details</button>
      </div>
    </div>
  );
}

export default JobCard;

