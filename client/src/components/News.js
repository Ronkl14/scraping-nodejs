import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await axios.get("http://localhost:5000/api/v1/data");
    const data = await response.data.data;
    setData(data);
  }

  return (
    <div>
      {data.length === 0
        ? ""
        : data.map((headline) => {
            return (
              <div>
                <h2>{headline.title}</h2>
                <p>{headline.content}</p>
              </div>
            );
          })}
    </div>
  );
};

export default News;
