import axios from "axios";

function base64ToBlob(base64: string, mimeType = 'image/png') {
    const byteString = atob(base64.split(',')[1]);
    const byteArray = new Uint8Array(byteString.length);

    for (let i = 0; i < byteString.length; i++) {
        byteArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([byteArray], { type: mimeType });
}

export const sendPhotoToBackend = async (imageData: string) => {
    try {
        const formData = new FormData();

        const blob = base64ToBlob(imageData);
        formData.append('file', blob, 'photo.png');

        const response = await axios.post("http://localhost:8000/predict", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        return {
            predict: response.data.predict,
            gender: response.data.gender
        };
    } catch (error: any) {
        console.error('Ошибка при отправке фото:', error.message);
        if (error.response) {
            console.error('Ответ сервера:', error.response.data);
        } else if (error.request) {
            console.error('Нет ответа от сервера:', error.request);
        } else {
            console.error('Ошибка при настройке запроса:', error.message);
        }
        return {
            predict: 'Не удалось определить профессию',
            gender: null
        };
    }
};