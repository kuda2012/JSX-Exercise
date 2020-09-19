const Person = (props) => {
  let suggestion;
  if (props.age >= 18) {
    suggestion = "please go Vote!";
  } else {
    suggestion = "you must be 18 to vote.";
  }
  let nameTruncated;
  if (props.name.length > 8) {
    nameTruncated = props.name.slice(0, 7);
  } else {
    nameTruncated = props.name;
  }

  return (
    <div>
      <div>
        Learn some more information about this person: Name: {nameTruncated},
        Age: {props.age}
      </div>
      <div>
        You are {props.age} years old, {suggestion}
      </div>
      <ul>
        Here are some of your hobbies
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
