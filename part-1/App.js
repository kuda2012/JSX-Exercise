const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Kuda" />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
