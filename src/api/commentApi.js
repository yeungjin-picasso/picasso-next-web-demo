import { authRequest } from "src/utils/request/AuthRequest";
import { mainRequest } from "src/utils/request/MainRequest";

export const getAllCommentsFn = async ({ queryKey }) => {
  const [_, post_id] = queryKey;
  const response = await mainRequest.get(`/comment?post_id=${post_id}`);
  return response.data;
};

export const createCommentFn = async (post_id, data) => {
  const response = await authRequest.post(`/comment?post_id=${post_id}`, data);
  return response.data;
};

export const updateCommentFn = async (id, data) => {
  const response = await authRequest.put(`comment/${id}`, data);
  return response.data;
};

export const deleteCommentFn = async (id) => {
  const response = await authRequest.delete(`comment/${id}`);
  return response.data;
};
