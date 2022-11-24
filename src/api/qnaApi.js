import { mainRequest } from "src/utils/request/MainRequest";

export const getAllQnaPostsFn = async () => {
  const response = await mainRequest.get("qna");
  return response.data;
};

export const createQnaPostFn = async (data) => {
  const response = await mainRequest.post("qna", data);
  return response.data;
};

export const updateQnaPostsFn = async ({ id, data }) => {
  const response = await mainRequest.put(`qna/${id}`, data);
  return response.data;
};

export const deleteQnaPostFn = async (id) => {
  const response = await mainRequest.delete(`qna/${id}`);
  return response.data;
};
