import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export const saveWorkflow = async (id, { nodes, edges }) => {
  const res = await axiosInstance.post(`/workflow/save/${id}`, {
    nodes,
    edges,
  });
  return res.data;
};

export const getWorkflow = async (id) => {
  const res = await axiosInstance.get(`/workflow/save/${id}`);
  return res.data;
};

export const executeWorkflow = async (data) => {
  return axiosInstance.post(`/workflow/execute`, data);
};
