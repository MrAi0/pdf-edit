import axios from "axios";

const loadPdfFile = async () => {
  const url = process.env.BACKEND_BASE_URL
    ? process.env.BACKEND_BASE_URL
    : "http://localhost:3000/";
  const apiUrl = url + "file-upload";
  const response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  console.log(response.data);
  return response.data;
};

const savePdfFile = async (data: File) => {
  const url = process.env.BACKEND_BASE_URL
    ? process.env.BACKEND_BASE_URL
    : "http://localhost:3000/";
  const apiUrl = url + "file-upload/upload";
  const formData = new FormData();
  formData.append("file", data);
  await axios.post(apiUrl, formData);
};

export { loadPdfFile, savePdfFile };
