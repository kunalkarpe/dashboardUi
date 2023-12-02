import axiosInstance from "../lib/axios";
export async function fetchMembers() {
  const result = await axiosInstance.get("?page=1&per_page=4");
  const res = await result.data;
  return res;
}
export async function createMembers(value) {
  const result = await axiosInstance.post("", value);
  const response = await result.data;
  return response;
}

export async function updateMembers(updatedMember) {
  const result = await axiosInstance.put(`/${updatedMember.id}`, updatedMember);
  const response = await result.data;
  return response;
}

export async function deleteMembers(id) {
  const result = await axiosInstance.delete(`/${id}`);
  return result;
}
