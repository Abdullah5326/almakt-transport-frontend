import { LOCALE_URL } from "../../constants";

export async function getAllItems(endpoint) {
  const res = await fetch(`${LOCALE_URL}/${endpoint}`, {
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok) throw new Error("There is an error in fetching trips");

  return data.data.data;
}

export async function addItem(endpoint, item) {
  const res = await fetch(`${LOCALE_URL}/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
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
  const res = await fetch(`${LOCALE_URL}/${endpoint}/${id}`, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("There is error in fetching item");

  const data = await res.json();
  return data.data.data;
}

export async function updateItem(updateData, endpoint) {
  const res = await fetch(`${LOCALE_URL}/${endpoint}/${updateData._id}`, {
    method: "PATCH",
    body: JSON.stringify(updateData),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok)
    throw new Error("There is an error in updating trip.", data.message);

  return data;
}

export async function deleteItem(resourceName, id) {
  const res = await fetch(`${LOCALE_URL}/${resourceName}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("There is an error in deleting item");

  return id;
}
