import axios from "axios";

export const sendPhotoToBackend = async (imageData: string) => {
    try {
        const formData = new FormData();
        const blob = await fetch(imageData).then(res => res.blob());
        formData.append('file', blob, 'photo.png');

        const response = await axios.post('http://127.0.0.1:3000/predict', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data.predict;
    } catch (error) {
        console.error('Ошибка при отправке фото:', error);
        // return 'Не удалось определить профессию';
    }
};
