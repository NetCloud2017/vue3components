import component from './RunNum.vue';

component.install = function(Vue, /*options */) {
    Vue.component(component.name, component)
};

export default component