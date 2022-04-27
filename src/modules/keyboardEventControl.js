import { actions } from "../keyValActions";

document.addEventListener(
    "keydown",
    function (event) {
      let { key, ctrlKey, shiftKey, altKey } = event;
      key = `${key}`.toLowerCase();
      console.log(event);
  
      let keyActionClass = "";
  
      if (ctrlKey || shiftKey || altKey) {
        // 创建组合键种类
        ctrlKey && (keyActionClass = "control");
        shiftKey && (keyActionClass = "shift");
        altKey && (keyActionClass = "alt");
        if (ctrlKey && shiftKey) {
          keyActionClass = "ctrl&shift";
        }
        if (ctrlKey && altKey) {
          keyActionClass = "ctrl&alt";
        }
        if (shiftKey && altKey) {
          keyActionClass = "shift&alt";
        }
      }
      const keyActions = actions[keyActionClass];
      if (keyActions) {
        // 获取 组合键 操作
        let func = keyActions[key];
        func && func();
      }
  
      // 阻止 浏览器 快捷键 默认事件
      if (event.preventDefault) {
        event.stopPropagation();
        event.preventDefault();
      } else {
        event.cancelBubble = true;
      }
      return false;
    },
    false
  );
  