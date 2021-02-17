## React Hook:

## useState():

useState Hook allows to add state in functional component.
**useState(initial Value)**

```
const [{count1,count2},setName]=useState({count1:0,count2:10});
setName((state)=>({count1:state.count1+1,...state}))
```

## useEffectLayout()

This runs synchronously immediately after React has performed all DOM mutations. This can be useful if you need to make DOM measurements (like getting the scroll position or other styles for an element) and then make DOM mutations or trigger a synchronous re-render by updating state. Until useLayoutEffect completes React will wait to visualize the dom in the browser.

````
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
````

### useCallback()

If a state changes in a functional component, react automatically re-renders all properties of these components like states, methods . To prevent re-render functions we use useCallback() Hook.

**why we use**

- When we have a component that has an eventhandler that handles a big list of items.
  Syntax:

  ```
  const list=useCallback(()=>{
      statement code blocks
      return(()=>{ clean up code goes here })
    },[dependency])

  ```

  **Note: We must use to React.memo();**

### React.memo()

React.memo() is a higher order component.It only uses in **functional component**.React memo stop rendering a component with same props. So obviously it is a performance optimization.

```
    const MeasureComponent=React.memo(()=>{})
```

**We can use memo without useCallback hook.**

### React.usememo

React's useMemo Hook to memorize a functions return value(s) and to run a function only if its dependencies (here search) have changed. Most use in search in an array.
Syntax

    ```
        Const filterUser=React.useMemo(()=>{
            users.filter((user) => {
            console.log('Filter function is running ...');
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        },[search]);
    ```
