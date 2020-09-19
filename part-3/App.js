const App = () => {
  return (
    <div>
      <Person
        age={45}
        name="Nini"
        hobbies={["kayaking", "swimming", "dancing"]}
      />
      <Person
        age={19}
        name="Kuda"
        hobbies={["singing", "swimming", "dancing"]}
      />
      <Person
        age={13}
        name="Isaac"
        hobbies={["Skydiving", "swimming", "dancing"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
