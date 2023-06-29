import axios from "axios";

export const signupService = async ({
  email,
  password,
  first_name,
  last_name,
}) =>
  axios.post("/api/auth/signup", { email, password, first_name, last_name });
export const loginService = async ({ email, password }) =>
  axios.post("api/auth/login", { email, password });
export const getAllUser = async () => axios.get("/api/users");
export const followUser = async (userId, token) =>
  axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
export const unFollowUser = async (userId, token) =>
  axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
export const getPost = async () => axios.get("/api/posts");
export const savePost = async (postData, token) =>
  axios.post(
    "/api/posts",
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );
export const likePost = async (postId, token) =>
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
export const dislikePost = async (postId, token) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
export const bookMarkPost = async (postId, token) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const removeBookMarkPost = async (postId, token) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
export const editPost = async (postId, postData, token) =>
  axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );
export const deletePost = async (postId, token) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });
