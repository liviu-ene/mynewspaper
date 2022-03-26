import React, { useState, useEffect } from "react";
import { ContentSection, Title } from "./styles/SectionStyles";
import { fetchData } from "../api";
import { Col, Row } from "./styles/GridStyles";
import Card from "./Card";
import AnimateHeight from "react-animate-height";

const Section = ({ category, title }) => {
  const [data, setData] = useState({ firstRow: [], restOfRows: [] });
  const [height, setHeight] = useState(0);

  const handleClick = () => {
    setHeight(height === 0 ? "auto" : 0);
  };

  useEffect(() => {
    let isCancelled = false;
    const fetchDataAPI = async () => {
      if (!isCancelled) setData(await fetchData(category));
    };
    fetchDataAPI();
    return () => {
      isCancelled = true;
    };
  }, [category]);

  return (
    <ContentSection id="section">
      <Title>
        <div onClick={handleClick}>
          {title}{" "}
          <i
            className="fa-solid fa-angles-down fa-2xs"
            style={{ fontSize: "1rem" }}
          ></i>
        </div>
      </Title>

      <Row>
        {data.firstRow ? (
          data.firstRow.map((item, index) => (
            <Col size={1} key={index}>
              <Card {...item} />
            </Col>
          ))
        ) : (
          <p>No data received</p>
        )}
      </Row>
      <AnimateHeight
        id="example-panel"
        className="AnimateHeight"
        height={height}
        duration="500"
        easing="ease-in-out"
      >
        <Row>
          {data.restOfRows ? (
            data.restOfRows.map((item, index) => (
              <Col size={1} key={index}>
                <Card {...item} />
              </Col>
            ))
          ) : (
            <p>No data received</p>
          )}
        </Row>
      </AnimateHeight>
    </ContentSection>
  );
};

export default Section;
