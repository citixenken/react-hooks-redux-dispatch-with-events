let state;

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  container.textContent = state.count;
}

function dispatch(action) {
  state = reducer(state, action);
  render();
}

dispatch({ type: "@@INIT" });

// integrating dispatch with user event
let button = document.getElementById("button");
let action = { type: "counter/increment" };

button.addEventListener("click", () => {
  dispatch(action);
});
