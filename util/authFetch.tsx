import { cookies } from "next/headers";

interface OptionType {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  headers?: RequestInit["headers"];
  body?: RequestInit["body"];
}

export const authFetch = async (
  url: string,
  options: OptionType = { method: "GET" }
) => {
  const accessToken = cookies().get("access_token")?.value;
  const res = await fetch(url, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${accessToken}` },
  });
  if (res.status === 401) {
    const refreshToken = cookies().get("refresh_token")?.value;
    const myRes = await fetch("http://localhost:3000/api/auth/refresh", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
      credentials: "include",
    });
    const accessToken = cookies().get("access_token")?.value;
    return await fetch(url, {
      ...options,
      headers: { ...options.headers, Authorization: `Bearer ${accessToken}` },
    });
  }
  return res;
};
