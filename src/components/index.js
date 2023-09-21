import RunningNum from "./runningNum";
import Icon from "./icon/index";
import UnusualContract from "./unusualChangeItem/index";
import AInput from "./input/index";

const componentList = [RunningNum, Icon, AInput, UnusualContract];
export default {
  ...componentList,
  install: function (app, options) {
    let { components } = options || {};
    if (components?.length) {
      components.forEach((componentName) => {
        let _component = componentList.find((i) => i.name == componentName);
        if (_component) {
          app.component(_component.name, _component);
        }
      });
    } else {
      componentList.forEach((i) => {
        console.log(i.name);
        app.component(i.name, i);
      });
    }
  },
};
