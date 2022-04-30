import component from  './UnusualContract.vue'

component.install = function (Vue) {
  Vue.component(component.name, component);
};
export default component;
