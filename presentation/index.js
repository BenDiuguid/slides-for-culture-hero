// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#00B0FF"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="pacman">
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Culture Hero
            </Heading>
          </Slide>
          <Slide bgColor="black">
            <Heading size={1}>
              Definitions
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1}>
              Culture
            </Heading>
            <BlockQuote>
              <Quote>How things are done around here</Quote>
              <Quote>A decision making framework</Quote>
              <Cite>Chris</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1}>
              Engagement
            </Heading>
            <BlockQuote>
              <Quote>How people feel about the way things are done around here</Quote>
              <Cite>Chris</Cite>
            </BlockQuote>
          </Slide>
          
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
