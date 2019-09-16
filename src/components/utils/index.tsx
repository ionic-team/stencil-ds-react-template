import {
  Platforms,
  getPlatforms as getPlatformsCore,
  isPlatform as isPlatformCore
} from "./platform";
import React from "react";

export type StencilReactExternalProps<PropType, ElementType> = PropType & {
  ref?: React.RefObject<ElementType>;
  children?: React.ReactNode;
};

export const createForwardRef = <PropType, ElementType>(
  ReactComponent: any,
  displayName: string
) => {
  const forwardRef = (
    props: StencilReactExternalProps<PropType, ElementType>,
    ref: React.Ref<ElementType>
  ) => {
    return <ReactComponent {...props} forwardedRef={ref} />;
  };
  forwardRef.displayName = displayName;

  return React.forwardRef(forwardRef);
};

export * from "./attachEventProps";
export * from "./case";

export const isPlatform = (platform: Platforms) => {
  return isPlatformCore(window, platform);
};

export const getPlatforms = () => {
  return getPlatformsCore(window);
};
