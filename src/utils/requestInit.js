import request from "./request";

export const fetchGetRequestInit = async (
  endPoint,
  body,
  contentType,
  token
) => {
  const response = await request.post(endPoint, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": contentType,
    },
  });

  return response;
};
