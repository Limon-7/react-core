### Pure component

### State vs props

#### Accessability

#### forwardRef

#### ref call back

1. ### What is reconciliation?
2. ### How to set state with a dynamic key name?
   If you are using ES6 or the Babel transpiler to transform your JSX code then you can accomplish this with computed property names.

    ```js

      handleInputChange(event) {
        this.setState({ [event.target.id]: event.target.value })
      }

    ````
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
