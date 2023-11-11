import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
});

export const storeUser = async (url: string, data: Object, setData: Function) => {
    const response = await api.post(url, data);
    setData(response.data);
};