import { createStore } from "redux";
import { useSelector, useDispatch, Provider } from "react-redux";

import { Button } from "@material-ui/core";
import React from "react";

function counter(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const initialState = {
  counter: 0,
};

let store = createStore(counter, initialState);

function ReduxSample(props) {
  return (
    <Provider store={store}>
      <h1>Redux sample</h1>
      <Message />
      <Buttons />
    </Provider>
  );
}

function Message(props) {
  const [counter] = useSelector((state) => [state.counter]);

  const style = {
    fontSize: "20pt",
    padding: "20px 5px",
  };

  return <p style={style}>Counter : {counter}</p>;
}

function Buttons(props) {
  const dispatch = useDispatch();

  const style = {
    margin: "5px 10px",
  };

  function decrement(e) {
    dispatch({ type: "DECREMENT" });
  }
  function increment(e) {
    dispatch({ type: "INCREMENT" });
  }
  function reset(e) {
    dispatch({ type: "RESET" });
  }

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        style={style}
        onClick={decrement}
      >
        decrement
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={style}
        onClick={increment}
      >
        increment
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={style}
        onClick={reset}
      >
        reset
      </Button>
    </React.Fragment>
  );
}

export default ReduxSample;
