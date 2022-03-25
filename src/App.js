import React from "react";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Container } from "./components/styles/GridStyles";
import Section from "./components/Section";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Container>
          <Section category="general" title="General" />
          <Section category="business" title="Business" />
          <Section category="sports" title="Sports" />
          <Section category="entertainment" title="Entertainment" />
          <Section category="science" title="Science" />
        </Container>
      </div>
    </>
  );
};

export default App;
