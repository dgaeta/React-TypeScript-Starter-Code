import * as React from "react";

export interface IHelloProps { 
  compiler: string;
  framework: string;
}

export default class Hello extends React.Component<IHelloProps, {}> {

  constructor(props: IHelloProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}

