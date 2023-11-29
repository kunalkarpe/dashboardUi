export async function fetchMembers() {
  const result = await fetch(
    "https://gorest.co.in/public/v2/users?page=1&per_page=4",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 220b6e43e8696b05af547f479f4f2727fb0a688d1bd1c4add2ea9c9ee31f1126",
      },
    }
  );
  const response = await result.json();
  return response;
}

export async function fetchById(id) {
  const result = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 220b6e43e8696b05af547f479f4f2727fb0a688d1bd1c4add2ea9c9ee31f1126",
    },
  });
  const response = await result.json();
  return response;
}

export async function createMembers(value) {
  const result = await fetch("https://gorest.co.in/public/v2/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 220b6e43e8696b05af547f479f4f2727fb0a688d1bd1c4add2ea9c9ee31f1126",
    },
    body: JSON.stringify(value),
  });
  const response = await result.json();
  return response;
}

export async function updateMembers(updatedMember) {
  const result = await fetch(
    `https://gorest.co.in/public/v2/users/${updatedMember.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 220b6e43e8696b05af547f479f4f2727fb0a688d1bd1c4add2ea9c9ee31f1126",
      },
      body: JSON.stringify(updatedMember),
    }
  );
  const response = await result.json();
  return response;
}

export async function deleteMembers(id) {
  const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 220b6e43e8696b05af547f479f4f2727fb0a688d1bd1c4add2ea9c9ee31f1126",
    },
  });
  return response;
}
