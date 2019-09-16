import React from 'react';

export interface StencilLifeCycleContextInterface {
  onStencilViewWillEnter: (callback: () => void) => void;
  stencilViewWillEnter: () => void;
  onStencilViewDidEnter: (callback: () => void) => void;
  stencilViewDidEnter: () => void;
  onStencilViewWillLeave: (callback: () => void) => void;
  stencilViewWillLeave: () => void;
  onStencilViewDidLeave: (callback: () => void) => void;
  stencilViewDidLeave: () => void;
}

export const StencilLifeCycleContext = /*@__PURE__*/React.createContext<StencilLifeCycleContextInterface>({
  onStencilViewWillEnter: () => { return; },
  stencilViewWillEnter: () => { return; },
  onStencilViewDidEnter: () => { return; },
  stencilViewDidEnter: () => { return; },
  onStencilViewWillLeave: () => { return; },
  stencilViewWillLeave: () => { return; },
  onStencilViewDidLeave: () => { return; },
  stencilViewDidLeave: () => { return; },
});

export const DefaultStencilLifeCycleContext = class implements StencilLifeCycleContextInterface {

  stencilViewWillEnterCallback?: () => void;
  stencilViewDidEnterCallback?: () => void;
  stencilViewWillLeaveCallback?: () => void;
  stencilViewDidLeaveCallback?: () => void;
  componentCanBeDestroyedCallback?: () => void;

  onStencilViewWillEnter(callback: () => void) {
    this.stencilViewWillEnterCallback = callback;
  }

  stencilViewWillEnter() {
    if (this.stencilViewWillEnterCallback) {
      this.stencilViewWillEnterCallback();
    }
  }

  onStencilViewDidEnter(callback: () => void) {
    this.stencilViewDidEnterCallback = callback;
  }

  stencilViewDidEnter() {
    if (this.stencilViewDidEnterCallback) {
      this.stencilViewDidEnterCallback();
    }
  }

  onStencilViewWillLeave(callback: () => void) {
    this.stencilViewWillLeaveCallback = callback;
  }

  stencilViewWillLeave() {
    if (this.stencilViewWillLeaveCallback) {
      this.stencilViewWillLeaveCallback();
    }
  }

  onStencilViewDidLeave(callback: () => void) {
    this.stencilViewDidLeaveCallback = callback;
  }

  stencilViewDidLeave() {
    if (this.stencilViewDidLeaveCallback) {
      this.stencilViewDidLeaveCallback();
    }
    this.componentCanBeDestroyed();
  }

  onComponentCanBeDestroyed(callback: () => void) {
    this.componentCanBeDestroyedCallback = callback;
  }

  componentCanBeDestroyed() {
    if (this.componentCanBeDestroyedCallback) {
      this.componentCanBeDestroyedCallback();
    }
  }
};
