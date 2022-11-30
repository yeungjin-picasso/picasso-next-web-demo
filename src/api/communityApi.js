import { authRequest } from "src/utils/request/AuthRequest";
import { mainRequest } from "src/utils/request/MainRequest";

export const getAllCommPostsFn = async ({ queryKey }) => {
  const [_, keywords] = queryKey;
  const response = await mainRequest.get(`community?search=${keywords}`);
  return response.data;
};

export const getCommPostFn = async ({ queryKey }) => {
  const [_, id] = queryKey;
  const response = await mainRequest.get(`community/${id}`);
  return response.data;
};

export const createCommPostFn = async (data) => {
  const response = await authRequest.post("community", data);
  return response.data;
};

export const updateCommPostFn = async ({ id, data }) => {
  const response = await authRequest.put(`community/${id}`, data);
  return response.data;
};

export const deleteCommPostFn = async (id) => {
  const response = await authRequest.delete(`community/${id}`);
  return response.data;
};
