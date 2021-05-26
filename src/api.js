import axios from 'axios'

const guid = 'd40e75c3-4ad9-473a-b070-4075f4a70551'

const api = axios.create({
    baseURL: `http://intravision-task.test01.intravision.ru/`
})

const getTasks = ({top, skip}) => {
    return api.get(`odata/tasks?tenantguid=${guid}&$top=${top}&$skip=${skip}`)
        .then(data => {
            return data.data.value
        })
        .catch(error => {
            return []
        })
}

const createTask = (data) => {
    return api.post(`/api/${guid}/Tasks`, 
        {
            ...data,
            statusId: 78550,
            statusName: "Открыта",
            statusRgb: "#fd5e53",
            priorityId: 65458,
            priorityName: "Средний"
        })
}

const updateTask = (data) => {
    return api.put(`/api/${guid}/Tasks`, data)
}

const getTask = (id) => {
    return api.get(`api/${guid}/Tasks/${id}`)
        .then(data => {
            return data
        })
        .catch(error => {
            return {}
        })
}

const getStatuses = () => {
    return api.get(`api/${guid}/Statuses`)
        .then(data => {
            if (data.status === 200) {
                return data.data
            } else {
                return []
            }
        })
        .catch(error => {
            return []
        })
} 

const getPriorities = () => {
    return api.get(`api/${guid}/Priorities`)
        .then(data => {
            if (data.status === 200) {
                return data.data
            } else {
                return []
            }
        })
        .catch(error => {
            return []
        })
} 

const getUsers = () => {
    return api.get(`api/${guid}/Users`)
        .then(data => {
            if (data.status === 200) {
                return data.data
            } else {
                return []
            }
        })
        .catch(error => {
            return []
        })
} 

export { 
    getTasks, 
    createTask, 
    updateTask, 
    getTask, 
    getStatuses, 
    getPriorities, 
    getUsers 
}