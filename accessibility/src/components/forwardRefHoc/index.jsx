import React, { createRef, forwardRef } from "react";

export function ForwardRefHoc() {
  // creating ref using createRef();
  const ref = createRef();
  return (
    <div>
      {/* <BeautifulInputForwardingRef ref={(ref) => ref && ref.focus()} /> */}
      <input type="text" ref={ref} />
      <ButtonExtra innerRef={ref}>Submit </ButtonExtra>
    </div>
  );
}

// export default ForwardRefHoc;

const logProps = (WrappenComponent) => {
  class LogProps extends React.Component {
    render() {
      return <WrappenComponent {...this.props} ref={this.props.forwardRef} />;
    }
  }
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardRef={ref} />;
  });
};
const ButtonExtra = (props) => {
  console.log(props);
  return <button ref={props.innerRef}>{props.children}</button>;
};
export default logProps(ButtonExtra);

class BeautifulInput extends React.Component {
  constructor(props) {
    super(props);
    <BeautifulInputForwardingRef ref={(ref) => ref && ref.focus()} />;
  }

  render() {
    console.log(this.props);
    const { innerRef, ...props } = this.props;
    return (
      <div style={{ backgroundColor: "blue" }}>
        <input ref={innerRef} {...props} />
      </div>
    );
  }
}
const BeautifulInputForwardingRef = React.forwardRef((props, ref) => (
  <BeautifulInput {...props} innerRef={ref} />
));
