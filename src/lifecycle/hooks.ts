import { useContext } from "react";

import { StencilLifeCycleContext } from "../contexts/StencilLifeCycleContext";

export const useStencilViewWillEnter = (callback: () => void) => {
  const value = useContext(StencilLifeCycleContext);
  value.onStencilViewWillEnter(callback);
};

export const useStencilViewDidEnter = (callback: () => void) => {
  const value = useContext(StencilLifeCycleContext);
  value.onStencilViewDidEnter(callback);
};

export const useStencilViewWillLeave = (callback: () => void) => {
  const value = useContext(StencilLifeCycleContext);
  value.onStencilViewWillLeave(callback);
};

export const useStencilViewDidLeave = (callback: () => void) => {
  const value = useContext(StencilLifeCycleContext);
  value.onStencilViewDidLeave(callback);
};
