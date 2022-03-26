import axios from "axios";

export const fetchData = async (category) => {
  try {
    const response1 = await axios.get(
      `/api/top-headlines?language=en&category=${category}&country=us&pagesize=4&apiKey=82e03435cd8645e2b69c56da31aedab8`
    ); //first 4 items for fast loading
    const response2 = await axios.get(
      `/api/top-headlines?language=en&category=${category}&country=us&pagesize=20&apiKey=82e03435cd8645e2b69c56da31aedab8`
    ); //rest of items for collapse button
    const curatedData = {
      firstRow: response1.data.articles,
      restOfRows: response2.data.articles.slice(4),
    };

    console.log(curatedData);
    return curatedData;
  } catch (error) {
    console.log(error);
  }
};
