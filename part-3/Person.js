const Person = (props) => {
  let moralSuggestion;
  if (props.age >= 18) {
    moralSuggestion = "please go Vote!";
  } else {
    moralSuggestion = "you must be 18 to vote.";
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
        Learn some more information about this person: Name: {props.name}, Age:{" "}
        {props.age}
      </div>
      <div>
        You are {props.age} years old, {moralSuggestion}
      </div>
      <ul>
        Here are some of this person's hobbies
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
