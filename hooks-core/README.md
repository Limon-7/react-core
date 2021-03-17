## React Hook:

1.  ### useState():

    useState Hook allows to add state in functional component.
    **useState(initial Value)**

    ```js
    const [{ count1, count2 }, setName] = useState({ count1: 0, count2: 10 });
    setName((state) => ({ count1: state.count1 + 1, ...state }));
    ```

2.  ### useEffect():

    Render every time . It is the replacement of componentDidMount, componentDidUpdate, componentWillUnmount, . Runs asynchronously.
    How It works:

    - You cause a render somehow (change state, or the parent re-renders)
    - React renders your component (calls it)
    - The screen is visually updated
    - THEN useEffect runs

3.  ### useEffectLayout()

    This runs synchronously immediately after React has performed all DOM mutations. This can be useful if you need to make DOM measurements (like getting the scroll position or other styles for an element) and then make DOM mutations or trigger a synchronous re-render by updating state. Until useLayoutEffect completes React will wait to visualize the dom in the browser.

    ```js
        React.useLayoutEffect(()=>{
            //statement goes here
            return(()=>{
                cleanup code
            })
        },[dependency])
    ```

    **Why We use**

    - When we need the dimension of the dom node it is the right choice.
    - component is flickering when state is updated – as in, it renders in a partially-ready state first and then immediately re-renders in its final state
      **Note: If your code is causing flickering, switch to useLayoutEffect and see if that helps.**

4.  ### useCallback()

    If a state changes in a functional component, react automatically re-renders all properties of these components like states, methods . To prevent re-render functions we use useCallback() Hook.

    **why we use**

    - When we have a component that has an eventhandler that handles a big list of items.

    Syntax:

    ```js
    const list=useCallback(()=>{
        statement code blocks
        return(()=>{ clean up code goes here })
        },[dependency])
    ```

    **Note: We must use to React.memo();**

5.  ### React.memo()

    React.memo() is a higher order component.It only uses in **functional component**.React memo stop rendering a component with same props. So obviously it is a performance optimization.

    ```js
    const MeasureComponent = React.memo(() => {});
    ```

    **We can use memo without useCallback hook.**

6.  ### React.useMemo()

    React's useMemo Hook to memorize a function's return value(s) and to run a function only if its dependencies (here search) have changed. Most use in search in an array.

    Syntax

    ```js
        Const filterUser=React.useMemo(()=>{
            users.filter((user) => {
            console.log('Filter function is running ...');
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        },[search]);
    ```

7.  ### useReducer()

    useReducer hook allows functional components in react access to reducer function from your state management.

    Syntax:

    ```js
    const [state, dispatch] = React.useReducer(
      reducer,
      initialState,
      overrideInitialState
    );
    //overrideInitialState is optional
    ```

    - The third parameter **overrideInitialState** is an optional int function which will allow us to lazily create the initial state.
    - It is helpful if we want to create an initial state that depends on other situations instead of const initial state.
    - The third function overrides the initial state.

      Example:

      ```js
      const [state, dispatch] = useReducer(BookReducer, initialState, () => {
        const localData = localStorage.getItem("books");
        return localData ? JSON.parse(localData) : initialState;
      });
      ```
