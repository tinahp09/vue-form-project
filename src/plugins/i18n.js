import Vue from 'vue'
import Vuei18n from 'vue-i18n'

Vue.use(Vuei18n)

export const i18n = new Vuei18n({
    locale: 'fa',
    messages: {
        'fa': {
            save: 'ذخیره',
            edit: 'ویرایش',
            register: 'ثبت نام',
            manager: 'سرپرست',
            delete: 'حذف',
            cancel: 'کنسل'
        }
    }
})
