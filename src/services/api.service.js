import httpClient from "../http-common";

const getAll = (suffix) => {
    return httpClient.get(`/${suffix}/list`);
}

const create = (suffix,data) => {
    return httpClient.post(`/${suffix}/create`, data);
}

const get = (suffix,id) => {
    return httpClient.get(`/${suffix}/${id}`);
}

const update = (suffix,data) => {
    return httpClient.put(`/${suffix}`, data);
}

const remove = (suffix,id )=> {
    return httpClient.delete(`/${suffix}/${id}`);
}
const ApiService = { getAll, create, get, update, remove }
export default ApiService;