import { request } from "./request";

export const fetchPostRequestInit = async (
  endPoint,
  body,
  contentType,
  token
) => {
  const response = await request.post(endPoint, body, {
    headers: {
      Authorization: token,
      "Content-Type": contentType,
    },
  });

  return { response };
};
export const fetchGetRequestInit = async (endPoint, token) => {
  const response = await request.get(endPoint, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });

  return { response };
};

export const fetchPatchRequestInit = async (
  endPoint,
  body,
  contentType
  // token
) => {
  const response = await request.patch(endPoint, body, {
    headers: {
      // Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": contentType,
    },
  });

  return { response };
};
