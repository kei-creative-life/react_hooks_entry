import React, { useEffect, useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  // DOMが描画された後に実行される
  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate.");
  });

  //実行されることはない
  useEffect(() => {
    console.log("This is like componentDidMount");
  }, []);

  // nameが変わるたびに実行される
  useEffect(() => {
    console.log("This callback is for name only.");
  }, [name]);

  return (
    <>
      <p>
        現在の{state.name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
