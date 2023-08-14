import { lazy } from "react";

//path is of component relative to lazyLoad function - can do default exports or named exxports
const lazyLoad = (path, namedExport) => {
  console.log("path passed", path);
  return lazy(() => {
    const promise = import(path);
    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
};

export default lazyLoad;
