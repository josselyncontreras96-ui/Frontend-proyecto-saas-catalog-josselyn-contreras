const API_URL = `${import.meta.env.VITE_API_URL}/tools`;

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : null;
};

const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error en la petición");
  }

  return data;
};

export const getTools = async (search = "") => {
  const url = search ? `${API_URL}?search=${search}` : API_URL;
  const response = await fetch(url);

  return handleResponse(response);
};

export const createTool = async (toolData) => {
  const token = getToken();

  if (!token) {
    throw new Error("No autorizado");
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(toolData),
  });

  return handleResponse(response);
};

export const updateTool = async (toolId, toolData) => {
  const token = getToken();

  if (!token) {
    throw new Error("No autorizado");
  }

  const response = await fetch(`${API_URL}/${toolId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(toolData),
  });

  return handleResponse(response);
};

export const deleteTool = async (toolId) => {
  const token = getToken();

  if (!token) {
    throw new Error("No autorizado");
  }

  const response = await fetch(`${API_URL}/${toolId}`, {
    method: "DELETE",
    headers: { Authorization: token },
  });

  return handleResponse(response);
};