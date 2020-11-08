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
