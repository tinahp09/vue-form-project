import { client } from '../plugins/Client'
import Cookies from 'js-cookie';


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

