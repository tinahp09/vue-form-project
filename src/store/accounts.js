import { client } from '../plugins/Client'
import Cookies from 'js-cookie';
import {router} from "../Router";
export default {
    state: {
        User: null
    },
    mutations: {
        SetUser(state, user) {
            state.User = user
        }
    },
    getters:{
        GetUser(state) {
            return state.User
        }
    },
    actions: {
        login({ commit }, phoneNumber) {
            client.get('user', { params: { phone: phoneNumber } }).then((response) => {
                Cookies.set('user', JSON.stringify(response.data[0]))
                commit('SetUser', response.data[0])
                router.replace('/form')
            })
        },
        SetValueWhenRefresh({ commit }) {
            if (Cookies && Cookies.get('user')) {
                let cookieValue = JSON.parse(Cookies.get('user'))
                commit('SetUser', cookieValue)
            }
        }
    }
}

