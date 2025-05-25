 import axiosInstance from "./axios";

export const createWorkLabel = (workspace) => {
    return axiosInstance.post("/workspace", workspace);
};

export const getAllWorkLabels = () => {
    return axiosInstance.get("/workspace");
};

export const getWorkLabelById = (id) => {
    return axiosInstance.get(`/workspace/${id}`);
};

export const deleteWorkLabel = (id) => {
    return axiosInstance.delete(`/workspace/${id}`);
};
