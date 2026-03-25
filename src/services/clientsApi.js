const LOCAL_URL = "http://localhost:3000/api/v1";
const CLOUD_URL = "https://almakt-transport-backend.onrender.com/api/v1";

export async function getAllClients() {
  const res = await fetch(`${CLOUD_URL}/clients`);
  const data = await res.json();
  if (!res.ok) throw new Error("There is an error in fetching clients.");

  return data.data.data;
}
