import axios from 'axios'

const guid = 'd40e75c3-4ad9-473a-b070-4075f4a70551'

const api = axios.create({
    baseURL: `http://intravision-task.test01.intravision.ru/`
})

const getTasks = () => {
    return api.get(`odata/tasks?tenantguid=${guid}&$top=2&$skip=4`)
        .then(data => {
            return data.data.value
        })
        .catch(error => {
            return []
        })
}

export { getTasks }