## Contex Api With reducer

1. ### useReducer

   useReducer hook allows functional components in react access to reducer function from your state management.
   Syntax:

   ```
   const[state,dispatch]=React.useReducer(reducer,initialState,overrideInitialState);//overrideInitialState is optional
   ```

   **Note**:

- The third parameter **overrideInitialState** is optional int function which will allow us to lazily create the initial state.
- It is helpful if we want to create a initial state that depends on other situations instead of const initial state.
- The third function override the initial state.
  Example:

        ```
            const [state, dispatch] = useReducer(BookReducer, initialState, () => {
                const localData = localStorage.getItem("books");
                return localData ? JSON.parse(localData) : initialState;
            });
        ```

  To no more about useReducer:

2. Can we dispatch an action using context api in a class component?
   Yes, We can dispatch an action both class an functional component. How ever in most cases we dispatch an action in functional component.

- [robinwieruch.de](https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext)
- [alligator.io](https://alligator.io/react/usereducer/)
