import { mainRequest } from "src/utils/request/MainRequest";

export const getAllCommentsFn = async () => {
  const response = await mainRequest.get("comment");
  return response.data;
};

export const createCommentFn = async (data) => {
  const response = await mainRequest.post("comment", data);
  return response.data;
};

export const updateCommentFn = async ({ id, data }) => {
  const response = await mainRequest.put(`comment/${id}`, data);
  return response.data;
};

export const deleteCommentFn = async (id) => {
  const response = await mainRequest.delete(`comment/${id}`);
  return response.data;
};
