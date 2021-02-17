## Context Api

1. ### Context:

   Context provides a way to pass data through the component tree without having to pass props down manually at every level.For example, authenticated user, loale preference, UI theme need to be accessed in the application by many components.
   Create a context: We use **React.createContext()** to create context.
   Syntax:

   ```
   const ThemeContext = React.createContext(DefaultValue).

   ```

2. ### Why do we need DefaultValue?

   The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.

3. ### How does a context work?

   - Step-1: Create a context using React.createContext(deafault_Value) api.
   - Step-2: Create a provider which will provide service to components and consumer components wrapped in this provider .
   - Step-3: Create the consumer which is going to get service from a certain context provider.

4. ### Provider:

   The provider acts as a delivery service. When a consumer asks for something, it finds it in the context and delivers it to where it's needed. We can create Context providers for both class components and functional components.
   Syntax: Syntax is the same for both class components and functional components.
   **Class Component**

   ```
   export class ThemeContextProvider extends Component{
    logic
    render(){
        return(
            <ThemeContext.Provider value={{shared state, method}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
   }
   ```

   **Functional Component**

   ```
   export ThemeContextProvider=(props)=>{
    logic
    render(){
        return(
            <ThemeContext.Provider value={{shared state, method}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
   }
   ```

5. ### Consumer:

   A Consumer is a React component that subscribes to a certain context.
   Syntax:

   ```
    const ThemeConsumer=ThemeContext.Consumer;
   ```

6. ### How can we consume Context in React?

   There are many way to consume context.

   1. Traditional Way:

   - class component

   ```
    class Header extends Component{
        render(){
            return(
                <ThemeConsumer>
                    {(consume)=>{
                        const{data}=consume;
                        return(
                            <p>{data}</p>
                        )
                    }}
                </ThemeConsumer>
            )
        }
    }
   ```

   - functional component:

   ```
   const Header=()=>{
           return(
               <ThemeConsumer>
                   {(consume)=>{
                       const{data}=consume;
                       return(
                           <p>{data}</p>
                       )
                   }}
               </ThemeConsumer>
           )
   }
   ```

   **NOTE** We can overcome traditional consumer ugly code using a HOC in the Context Component.
   In Context:

   ```
    export function WithThemeContextConsumer(Component) {
    // geting the props from wrapper component
    return function ConsumerRapper(props) {
        return (
            <ThemeContextConsumer>
                {(value) => <Component {...props} contextValue={value} />}
            </ThemeContextConsumer>
        );
    };
   }
   ```

   In Component:

   - Class Component

   ```
   class Header extends Component{
           render(){
                const{data}=this.props.contextValue;
               return(
                   <p>{data}</p>
               )
           }
    }
    export default WithThemeContextConsumer(Header)
   ```

   - Functional component:

   ```
   const Header=(props)=>{
       const{data}=props.contextValue;
              return(
                  <p>{data}</p>
              )
   }
   export default WithThemeContextConsumer(Header)
   ```

   2. Common Way:The most common way to access Context from a class component is via the static contextType. If you need the value from Context outside of render, or in a lifecycle method.

   ```
       class Header extends Component{
           static contextType=ThemeContext; // ThemeContext=context name
           render(){
               const{data}=this.context;
               return(
                   <p>{data}</p>
               )
           }
       }
   ```

   **Functional Component**
   In the function component, useContext(contextName) hooks use to consume context.
   Syntax:

   ```
   const Header=()=>{
       const{data}=React.useContext(ThemeContext);
       return(
           <p>{data}</p>
       )
   }
   ```

   **Or** We can add a consumer function in the context. Then just call the function instead of each time write consuming code.
   For example, in our ThemeContextProvider component create a consuming function.

   ```
   export const usethemeContext=()=>React.useContext(ThemeContext);
   ```

   Then call this function in the functional component to pull the state.

   ```
   const Header=()=>{
       const{data}=usethemeContext();
       return(
           <p>{data}</p>
       )
   }
   ```
