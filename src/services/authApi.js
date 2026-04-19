import { LOCALE_URL } from "../../constants";

export async function login({ email, password }) {
  const res = await fetch(`${LOCALE_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error("There is error in the login", data);
  return data.data.data;
}

export async function getCurrentUser() {
  const res = await fetch(`${LOCALE_URL}/users/me`, {
    credentials: "include",
  });

  const data = await res.json();

  return data.data.user;
}

export async function logout() {
  const res = await fetch(`${LOCALE_URL}/users/logout`, {
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) throw new Error("There is an error to logout your account");

  return data;
}

export async function updateMe(formData) {
  console.log(formData);

  const res = await fetch(`${LOCALE_URL}/users/updateMe`, {
    method: "PATCH",
    body: formData,
    credentials: "include",
  });
  const data = await res.json();

  if (!res.ok) throw new Error("There is an error to update your photo.");

  return data;
}
