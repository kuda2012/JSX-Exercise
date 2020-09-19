const App = () => {
  return (
    <div>
      <div>
        <Tweet
          username="kudaman"
          name="Kuda Mwakutuya"
          date={new Date().toISOString().slice(0, 10)}
          message="This is my first tweet"
        />
      </div>
      <div>
        <Tweet
          username="helloMoto"
          name="Sydnee Mwakutuya"
          date={new Date().toISOString().slice(0, 10)}
          message="Hey! New to twitter!"
        />
      </div>
      <div>
        <Tweet
          username="appleVsAndroid"
          name="Isaac Mwakutuya"
          date={new Date().toISOString().slice(0, 10)}
          message="Wazzam"
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
