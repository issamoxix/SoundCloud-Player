import { SC } from "./Wtest";

const Go = () => {
  var iframeElement = document.querySelector("iframe");

  var widget1 = SC.Widget(iframeElement);

  return widget1;
};

export default Go;
