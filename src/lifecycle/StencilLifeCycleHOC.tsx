import React from "react";

import { StencilLifeCycleContext } from "../contexts/StencilLifeCycleContext";

export const withStencilLifeCycle = (
  WrappedComponent: React.ComponentType<any>
) => {
  return class StencilLifeCycle extends React.Component<any, any> {
    context!: React.ContextType<typeof StencilLifeCycleContext>;
    componentRef = React.createRef<any>();

    constructor(props: any) {
      super(props);
    }

    componentDidMount() {
      const element = this.componentRef.current;
      this.context.onStencilViewWillEnter(() => {
        if (element && element.stencilViewWillEnter) {
          element.stencilViewWillEnter();
        }
      });

      this.context.onStencilViewDidEnter(() => {
        if (element && element.stencilViewDidEnter) {
          element.stencilViewDidEnter();
        }
      });

      this.context.onStencilViewWillLeave(() => {
        if (element && element.stencilViewWillLeave) {
          element.stencilViewWillLeave();
        }
      });

      this.context.onStencilViewDidLeave(() => {
        if (element && element.stencilViewDidLeave) {
          element.stencilViewDidLeave();
        }
      });
    }

    render() {
      return (
        <StencilLifeCycleContext.Consumer>
          {context => {
            this.context = context;
            return <WrappedComponent ref={this.componentRef} {...this.props} />;
          }}
        </StencilLifeCycleContext.Consumer>
      );
    }
  };
};
