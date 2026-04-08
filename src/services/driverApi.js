const CLOUD_URL = "http://localhost:3000/api/v1";
const _URL = "https://almakt-transport-backend.onrender.com/api/v1";

export async function getAllDriver() {
  const res = await fetch(`${CLOUD_URL}/drivers`);

  const data = await res.json();
  if (!res.ok) throw new Error("There is error in fetching drivers");
  return data.data.data;
}
