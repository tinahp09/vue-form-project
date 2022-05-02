import { client } from '../plugins/Client.js'
export default {
    actions: {
        addPeople(context, data) {
            return client.post('people', data)

        },
        getPeople() {
            return client.get('people')
        },
        updatePeople(context, data) {
            console.log(data.id);
            return client.put(`people/${data.id}`, data)
        },
        deletePeople(context, data) {
            return client.delete(`people/${data.id}`, data)
        },
    }
}