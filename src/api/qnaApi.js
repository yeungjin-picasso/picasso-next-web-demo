import { authRequest } from "src/utils/request/AuthRequest";
import { mainRequest } from "src/utils/request/MainRequest";

export const getAllQnaPostsFn = async ({ queryKey }) => {
  const [_, keywords] = queryKey;
  const response = await mainRequest.get(`qna?search=${keywords}`);
  return response.data;
};

export const createQnaPostFn = async (data) => {
  const response = await authRequest.post("qna", data);
  return response.data;
};

export const updateQnaPostFn = async ({ id, data }) => {
  const response = await authRequest.put(`qna/${id}`, data);
  return response.data;
};

export const deleteQnaPostFn = async (id) => {
  const response = await authRequest.delete(`qna/${id}`);
  return response.data;
};
