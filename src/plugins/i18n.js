import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import messages from '../lang'

Vue.use(Vuei18n)

export const i18n = new Vuei18n({
    locale: 'fa',
    messages
})
