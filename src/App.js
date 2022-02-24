import React, {useState, useEffect} from "react";
import { fetchData } from "./api";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataAPI = async () => {
          setData(await fetchData())
        }
        fetchDataAPI();
      }, []) 


    return (
        <div>
           {data.map((item) => <p>{item.title}</p>)}
        </div>
    )
}

export default App;