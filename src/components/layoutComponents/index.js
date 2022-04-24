import Alayout from './Alayout'
import Blayout from './Blayout'

Alayout.install = function (Vue) {
    Vue.component(Alayout.name, Alayout)
}
Blayout.install = function (Vue) {
    Vue.component(Blayout.name, Blayout)
}

export {
    Alayout,
    Blayout
}