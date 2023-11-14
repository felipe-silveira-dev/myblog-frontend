import axios from "axios";

export const api = axios.create({
    baseURL: "http://myblog-backend.test/api",
});

export const storeUser = async (url: string, data: Object, setData: Function) => {
    const response = await api.post(url, data);
    setData(response.data);
};