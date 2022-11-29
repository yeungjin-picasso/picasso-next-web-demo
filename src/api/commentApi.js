import { mainRequest } from "src/utils/request/MainRequest";

export const getAllCommentsFn = async (post_id) => {
  const response = await mainRequest.get(`/comment?post_id=${post_id}`);
  return response.data;
};

export const createCommentFn = async ({ post_id, data }) => {
  const response = await mainRequest.post(`/comment?post_id=${post_id}`, data);
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
