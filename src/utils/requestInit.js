import { request } from "./request";

export const fetchPostRequestInit = async (
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
export const fetchGetRequestInit = async (
  endPoint,
  contentType
  // token
) => {
  const response = await request.get(endPoint, {
    headers: {
      // Authorization: token ? `Bearer ${token}` : "",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NDQyNzI4LCJpYXQiOjE2OTM4NTA3MjgsImp0aSI6IjgwZGY3YjZhZmFmMzQ3MGM4YzgzZjE0N2RlZDkwODBmIiwidXNlcl9pZCI6IjYwYmVhYjZmLTkxNTYtNGQ3Mi1iOWNlLTAyMDYyZmRmM2FjZSJ9.1pP07B96mJ0hNXGQ1b082dOKUQ6hrocOm_1O-qjQZJA`,
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
