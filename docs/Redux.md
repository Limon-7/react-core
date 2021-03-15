## Redux In React

#### Provider:

React Redux provides <Provider />, which makes the Redux store available to the rest of your app:

#### connect:

React Redux provides a connect function for you to connect your component to the store.
connect(mapStateToProps,mapDispatchToProps)

#### mapStateToProps:

It is used for selecting the part of the data from the store that the connected component needs.

```
const mapStateToProps=(state)=>({
    currenUser:state.user.currentUser
});
```

-   state= top label root reducer.
-   user = get value from user reducer
-   currentUser= get currentUser value

export defalu connect(mapStateToProps)(Header)

#### mapDispatchToProps:

It is a function.It is used for dispatching actions to the store.it has two arguments.
.1.dispatch
.2. ownProps (optional)
The mapDispatchToProps function will be called with dispatch as the first argument. You will normally make use of this by returning new functions that call dispatch() inside themselves, and either pass in a plain action object directly or pass in the result of an action creator.

```
const mapDispatchToProps=dispatch=>({
    actionname:object=>dispatch(actionName(object));
})
```

Your mapDispatchToProps function should return a plain object:

### dispatch():

#### State destrutor:

```
const mapStateToProps = (state) => ({
    currenUser: state.user.currentUser,
});
To:
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden,
});
```

### Selector:

There are 2 types- of selector.
.1. inputselector: It is selector that only return a state.That does not use to createSelector.
.2. output selector: That use inputSelector and createSelector to build themsalves

-   Memozation: This is a common pattern to reduce or completely skip unnecessary computations. **Now it will react only to state.todos object change.**

craeteSelector(): It takes two argument.
.1. First one is input selctor a collection of array
.2. Second argument is a function that will return the value we want out of the selector.

```
createSelector([selectCart],cart=>cart.cartItems)
```

### persistStore: from redux-persist

Redux-Persist saves the Redux Store when the app is closed or refreshed in the iPhone simulator.
Step to follow configarations:

-   create a persistStore(passTheDefaultreduxstore)
-   setup root reducers with storage as using localStorage as default storage.


