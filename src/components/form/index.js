import component from "./form.vue";
import Item from "./FormItem.vue";

Item.install = function (Vue) {
  Vue.component(Item.name, Item);
};
component.install = function (Vue) {
  Vue.component(component.name, component);
};

export const AForm = component;
export const FormItem = Item;
