const LOCAL_URL = "http://localhost:3000/api/v1";
const CLOUD_URL = "https://almakt-transport-backend.onrender.com/api/v1";

export async function getAllClients() {
  const res = await fetch(`${LOCAL_URL}/clients`);
  const data = await res.json();
  if (!res.ok) throw new Error("There is an error in fetching clients.");

  return data.data.data;
}

export async function getClient(id) {
  const res = await fetch(`${LOCAL_URL}/clients/${id}`);

  if (!res.ok) throw new Error("There is error in fetching client");

  const data = await res.json();

  return data.data.data;
}
