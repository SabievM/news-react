import axios from "axios"

const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY=import.meta.env.VITE_NEWS_API_KEY

export const getNews = async () => {
    try {
        const responce = await axios.get(`${BASE_URL}latest-news`,
            {params: {
                apiKey: API_KEY
            }
    })
        return responce.data;
    } catch (error) {
        console.log(error)
    }
}
