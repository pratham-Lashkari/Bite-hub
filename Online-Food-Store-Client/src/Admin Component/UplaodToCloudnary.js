import axios from 'axios';

export const uploadImagesToCloudinary = async (file) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  try {
    const response = await axios.post(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data.url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};
