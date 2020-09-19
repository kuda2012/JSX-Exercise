const Tweet = (props) => {
  return (
    <div>
      <div>
        {props.name} @{props.username} {props.date}
        <div>{props.message}</div>
      </div>
    </div>
  );
};
