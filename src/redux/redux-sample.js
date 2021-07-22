import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { createStore } from "redux";

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
      <Button />
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

function Button(props) {
  const dispatch = useDispatch();
  const style = {
    fontSize: "16pt",
    padding: "5px 10px",
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
    <div>
      <button style={style} onClick={decrement}>
        decrement
      </button>
      <button style={style} onClick={increment}>
        increment
      </button>
      <button style={style} onClick={reset}>
        reset
      </button>
    </div>
  );
}

export default ReduxSample;
