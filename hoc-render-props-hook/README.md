- hoc
- render props
- hook
- Reconciliation
- Error-Boundary
- Lazy-loading
- React Suspense

### Renderprops:

The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

```
        <RenderPropsComponent render={(value)=>(<Component data={value}/>)}>
                        or
        <RenderPropsComponent children={(value)=>(<Component data={value}/>)}>
                        or
        <RenderPropsComponent>
            {
            (value)=>(<Component data={value}/>)
            }
        </RenderPropsComponent>
```

**We can use Render-Props both Class and functional Component**

### Main difference between Hooks, Render-Props and HOC?
