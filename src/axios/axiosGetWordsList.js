import axios from 'axios';

const baseUrl = 'http://localhost:3001/englishWords';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const del = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll,
  create,
  update,
  del,
};
