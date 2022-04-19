import component from './RunNum.vue';

component.install = function(Vue) {
    Vue.use(component.name, component)
};

export default component