## React 

[Context Api](docs/ContextApi.md)
[Context Api with Redux](../Context/context-api/README.md)

## React Redux

#### React
-   pass argumnt vaia event handler :just use arrow function
-   props: a plain read only javascript. <Counter key={special keyword} value={this called props}/>
-   props.children: <<Counter>This is props.children value </Counter>

#### Rasing and handling events

-   raise an event in chaild component
-   handle the event in the parent component

##### Single source truth:

###### remove local state

-   Controlled Component: A controlled component doesn't have local state. It receives all the data vai props and rasies events whenever data need to be changed. So this component entirely controlled by it's parent component.

###### Note: Modifing a state directly in react restricted.
#### Stateless Functional Component

```
const Navbar = (props) => {
return(
    <span className="badge badge-pill badge-primary">
        {props.totalCounters}
    </span>);
}
export default Navbar;
```

#### Destructing Argument:

```
const Navbar = ({totalCounters}) => {
return(
<span className="badge badge-pill badge-primary">
{totalCounters}
</span>);
}
export default Navbar;

```

#### Object Destructing:

```
render(){
    const { onReset, onDelete } = this.props;
    return(
        <Counter key={counter.id} onIncrement={this.props.onIncrement} onDelete={onDelete} counter={this.props.counter}
        />
    );
}
```

## Life Cycle Hook:

Phase:

-   Mount: The first phases of the life-cycle hook when a instance of a component is created and inserted in the dom. In the mounting phase three life-cycle hooks.
    ..1. constructor: This is called only once when an instance of a class created.If you need to set the state directly in the constructor. Keeep in mind you must pass prop otherwise it will get undifined
    `constructor(props) { super(props); console.log("app-constructor", this.props); }`
    ..2. render: Basically returns a react elements that represnts virtual dom and render it to actual browser dom.**When a component is rendered all its children are rendered recursively**
    ..3. componentDidMount: This method is called after the component render in the dom and it's the perfect place to make ajax call to get data from server.
    **Note**React call this hook by order.
-   Update: this happens when the state or the props of a component get changed.
    ..1. render:
    ..2. componentDidUpdate: This method is called after a component is updated.`if (preProps.counter.value !== this.props.counter.value) { // Ajax call and get new vlue from the server console.log("Ajax call and get new vlue from the server"); }`
-   UnMount: This happens when a component remove from dom.It has one life-cycle hook.
    ..1. componentWillUnmount: This method is called just before a component remove from a dom.**This is the place any kind of cleanup like timer and listener before removing the dom**

#### Route

.1. How Link component prevented additional http requests?

-   Ans: In the dom the link component has a onClick() event handler thats a prop. When we click this link the onClick() is called and the function prevent the defult behavior of the anchor.

#### <Route path="/" component={Home} />: The route component autometic inject props which has three properties.

-   history: use history to work with history object in the browser and with that we can send back user to a different page.
-   location: it determines where the app is now
-   match: It contains information about how is url match what we set in the route path.

### Passing addition props when using route:

We use render method insted of component attribute.

```
<Route path="/products" render={((props)=><Products sortBy="newset"{...props}/>)}  />
```

### Route Parameter:

```
this.props.match.params.keyname
```

### Query String:

### Redirect component:

```
<Redirect to="/not-found"/>
```

To show the user:
<Router path="/not-found" component={not-found}/>

-   Redirect one url to another url:

```
<Redirect from="/messages" to="/not-found"/>
```

### Programmatic Navigation: When redirect user after click a button or submitting a form:

```
handleSave=()=>{
  this.props.history.push("products")
}
<button onclick={this.handleSave}>Save</button>
```

**replace use when login is successfull** that prevent to back login page again

### Nested Routing:

### WithRoute():

You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.

### Spread :

```
{this.state.sections.map(({id,name,url,linkUrl}) => (
   <MenuItem key={id} id={id} naem={name} url={url} linkUrl={linkUrl} />
))}
**To->>**
{this.state.sections.map(({id,...menuItem}) => (
    <MenuItem key={id} id={id} {...menuItem}/>
 ))}
```

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


#### Firebase

firestore
.collection("users")
.doc("a9bXkZhne265UQT6WUTg")
.collection("cartItem")
.doc("KJcKWyhyTfUkbK4eq3yp");

firestore.doc("/users/a9bXkZhne265UQT6WUTg/cartItem/KJcKWyhyTfUkbK4eq3yp");
firestore.collection("/users/a9bXkZhne265UQT6WUTg/cartItem");

### QueryReference and QuerySnapshot:

-   1. Query: A query is a request we make to firestore to give us something from database. Firestore returns us two objects-**reference and snapshots**.Of this this object they can be either Document or Collection version.
       **Note: Firestore always return us object, even if nothing exists at from this quesry.**

-   2. QuerReference: A queryReference object is an object that represent the current place in the database that we are querying.We can call them by folling query
       .2.1. firestore.doc("/users/:userId")
       .2.1. firestore.collections("/users")

The queryReference object does not have the actual data of the collectionor the document. It instead has properties that tell us deatils about it or the method to get the Sanpshot object which will give us the data that we are looking for.

-   3. DocumentReference:
       We use documentRef object to perform crud methods.This methods
       .3.1. .create()=set()
       .3.2. .retrieve()=get()
       .3.3. .update()=update()
       .3.4. .delete()=delete()

We can add documents to collections using collectionRef object using **.add() like collectionRef.add()**

-   documentRef returns a documentSnapshot object
-   collectionRef returns a querySnapshot object