export default{
    install(Vue) {
        Vue.prototype.$toBold = function(text) {
            return `<b>${text}</b>`
        }
    }
}