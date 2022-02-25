import axios from "axios";

export const fetchData = async () => {
    try {

        //const response = await axios.get(`/api/news?access_key=6c140bfd35d2c2526206f4e7f5ee1f74`)
        const response = await axios.get(`/api/everything?q=tesla&from=2022-01-25&sortBy=publishedAt&apiKey=82e03435cd8645e2b69c56da31aedab8`)
        console.log(response);
        return response.data.articles;

    } catch (error) {
        console.log(error)
    }
}