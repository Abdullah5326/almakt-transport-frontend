const _URL = "https://almakt-transport-backend.onrender.com/api/v1";

const CLOUD_URL = "http://localhost:3000/api/v1";

export async function getAllTrips(durationType) {
  const res = await fetch(`${CLOUD_URL}/trips/last-${durationType}-trips`);

  const data = await res.json();
  if (!res.ok) throw new Error("There is an error in fetching trips");

  return data.data.data;
}

export async function addTrip(trip) {
  const res = await fetch(`${CLOUD_URL}/trips`, {
    method: "POST",
    body: JSON.stringify(trip),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok)
    throw new Error("There is an error in adding trip.Please try again");
  const data = await res.json();

  return data;
}

export async function getTrip(id) {
  const res = await fetch(`${CLOUD_URL}/trips/${id}`);

  if (!res.ok) throw new Error("There is an error in fetching trip");

  const data = await res.json();

  return data.data.data;
}

export async function updateTrip(updateData) {
  const res = await fetch(`${CLOUD_URL}/trips/${updateData.id}`, {
    method: "PATCH",
    body: JSON.stringify(updateData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("There is an error in updating trip.");
  const data = await res.json();

  return data;
}

export async function deleteTrip(id) {
  const res = await fetch(`${CLOUD_URL}/trips/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("There is an error in deleting trip");

  return id;
}
