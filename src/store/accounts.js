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
    actions: {
        login({ commit }, phoneNumber) {
            client.get('user', { params: { phone: phoneNumber } }).then((response) => {
                console.log(response);
                Cookies.set('user', JSON.stringify(response.data[0]))
                commit('SetUser', response.data[0])
            })
        },
        SetValueWhenRefresh({ commit }) {
            if (Cookies && Cookies.get('user')) {
                console.log(Cookies.get('user'));
                let cookieValue = JSON.parse(Cookies.get('user'))
                commit('SetUser', cookieValue)
            }
        }
    }
}

