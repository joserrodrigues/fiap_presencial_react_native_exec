import api from "../Common/api";

const getAllPersons = () => api.get("/persons/getPersons");

export default {
    getAllPersons,
};