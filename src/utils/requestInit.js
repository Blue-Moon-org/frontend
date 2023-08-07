import { request } from "./request";

export const fetchGetRequestInit = async (
  endPoint,
  body,
  contentType
  // token
) => {
  const response = await request.post(endPoint, body, {
    headers: {
      // Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": contentType,
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
