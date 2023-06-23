// Action Value

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

// Action Creator

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const removeTodo = (payload) => {
  return { type: REMOVE_TODO, payload };
};

export const changeTodo = (payload) => {
  return { type: CHANGE_TODO, payload };
};

//initial State

const initialState = {
  todoList: JSON.parse(localStorage.getItem("todoData")) ?? [],
};

// Reducer

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todoList: [...state.todoList, action.payload] };
    case REMOVE_TODO:
      return { todoList: state.todoList.filter((todo) => todo.id !== action.payload) };
    case CHANGE_TODO:
      return {
        todoList: state.todoList.map((todo) => {
          return todo.id === action.payload ? { ...todo, done: !todo.done } : todo;
        }),
      };
    default:
      return state;
  }
};

export default todos;
