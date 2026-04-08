const CLOUD_URL = "http://localhost:3000/api/v1";
// const CLOUD_URL = "https://almakt-transport-backend.onrender.com/api/v1";

export async function getAllItems(endpoint) {
  const res = await fetch(`${CLOUD_URL}/${endpoint}`);

  const data = await res.json();
  if (!res.ok) throw new Error("There is an error in fetching trips");

  return data.data.data;
}

export async function addItem(endpoint, item) {
  const res = await fetch(`${CLOUD_URL}/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  if (!res.ok)
    throw new Error(
      "There is an error in adding " +
        endpoint +
        ".Please try again " +
        "Server Error: " +
        data.message,
    );

  return data;
}

export async function getItem(endpoint, id) {
  const res = await fetch(`${CLOUD_URL}/${endpoint}/${id}`);

  if (!res.ok) throw new Error("There is error in fetching item");

  const data = await res.json();

  return data.data.data;
}

export async function updateItem(updateData, endpoint) {
  console.log(updateData);
  const res = await fetch(`${CLOUD_URL}/${endpoint}/${updateData.id}`, {
    method: "PATCH",
    body: JSON.stringify(updateData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok)
    throw new Error("There is an error in updating trip.", data.message);

  return data;
}

export async function deleteItem(resourceName, id) {
  const res = await fetch(`${CLOUD_URL}/${resourceName}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("There is an error in deleting item");

  return id;
}
