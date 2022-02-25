import axios from "axios";

export const fetchData = async () => {
    try {

        const response = await axios.get(`/api/news?access_key=6c140bfd35d2c2526206f4e7f5ee1f74`)
        return response.data.data;

    } catch (error) {
        console.log(error)
    }
}