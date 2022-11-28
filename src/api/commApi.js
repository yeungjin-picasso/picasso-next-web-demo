import { mainRequest } from "src/utils/request/MainRequest";

export const getAllCommPostsFn = async () => {
  const response = await mainRequest.get("community");
  return response.data;
};

export const getPostFn = async (id) => {
  const response = await mainRequest.get(`community/${id}`);
  return response.data;
};

export const createCommPostFn = async (data) => {
  const response = await mainRequest.post("community", data);
  return response.data;
};

export const updateCommPostsFn = async ({ id, data }) => {
  const response = await mainRequest.put(`community/${id}`, data);
  return response.data;
};

export const deleteCommPostFn = async (id) => {
  const response = await mainRequest.delete(`community/${id}`);
  return response.data;
};
