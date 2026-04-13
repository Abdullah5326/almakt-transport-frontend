const URL = "https://almakt-transport-backend.onrender.com/api/v1";
// const URL = "http://localhost:3000/api/v1";

export async function login({ email, password }) {
  const res = await fetch(`${URL}/users/login`, {
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
  const res = await fetch(`${URL}/users/me`, {
    credentials: "include",
  });

  const data = await res.json();

  return data.data.user;
}
