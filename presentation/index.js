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
  badges: require("../assets/badge-style.jpg"),
  callingAllSuperHeros: require("../assets/d993f80c1f73fee0699a7a63f9136f27.jpg"),
  bounties: require("../assets/mockup-bounties.png"),
  cultureCommunications: require("../assets/mockup-culturecommunications.png"),
  engagementDashboard: require("../assets/mockup-engagementdashboard.png"),
  filebox: require("../assets/mockup-filebox.png"),
  moduleBuilder: require("../assets/mockup-modulebuilder.png"),
  profile: require("../assets/mockup-profile.png"),
  taskProof: require("../assets/mockup-taskproof.png"),
  topHeroes: require("../assets/mockup-topheroes.png"),
  contentChains: require("../assets/mockup-contentchains.png"),
  logo: require("../assets/culture-hero-logo3.png")
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
            <Heading size={1} fit caps lineHeight={1} textColor="black">Culture Hero</Heading>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} textColor="black">
              Culture Hero is an interactive company engagement platform that motivates and aligns your workforce with the science of gamification.
            </Heading>
          </Slide>

          <Slide bgColor="black">
            <Heading size={1}>Let's start with some definitions</Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1}>
              Culture
            </Heading>
            <BlockQuote>
              <Quote>How things are done around here</Quote>
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

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">Features</Heading>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} fit textColor="black">Sentiment analysis</Heading>
            <List>
              <Appear><ListItem>Channels like Slack, Lync, Emails</ListItem></Appear>
              <Appear><ListItem>Vertical/Horizontal integrations.</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} fit textColor="black">Communication</Heading>
            <List>
              <Appear><ListItem>Manager (team leader) reports</ListItem></Appear>
              <Appear><ListItem>"Fireside chats" allowing executives to 'pulse' videos to the company</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} fit textColor="black">Culture Profile Comparisons</Heading>
            <List>
              <Appear><ListItem>Employee-to-Employee</ListItem></Appear>
              <Appear><ListItem>Team-to-Team</ListItem></Appear>
              <Appear><ListItem>Company-to-Company - MNA</ListItem></Appear>
            </List>
          </Slide>



          <Slide bgColor="primary">
            <Heading size={4} fit textColor="black">Learning Management System</Heading>
            <List>
              <Appear><ListItem>Training Videos</ListItem></Appear>
              <Appear><ListItem>Quizzes</ListItem></Appear>
              <Appear><ListItem>Other content</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">CulturePoints&trade;</Heading>
            <Appear>
              <Heading size={6} textColor="black">CulturePoints&trade; gamify a system in which a company can increase their desired culture.</Heading>
            </Appear>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">How to gain CulturePoints&trade;</Heading>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} fit textColor="black">Peer-to-Peer Recognition</Heading>
            <List>
              <Appear><ListItem>CulturePoint 'allowance' for employees to give away</ListItem></Appear>
              <Appear><ListItem>Allowance is reset weekly to encourage members to look for more opportunities to share</ListItem></Appear>
              <Appear><ListItem>Points for referals who get hired</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} fit textColor="black">Social Media</Heading>
            <List>
              <Appear><ListItem>Simply sharing to various media outlets like Twitter, Facebook, LinkedIn, Instagram with a given # can earn CulturePoints</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} fit textColor="black">Gamified Leadership Hierarchy</Heading>
            <List>
              <Appear><ListItem>If your team gets points, the leader get some</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} fit textColor="black">Camera Quests</Heading>
            <Heading size={6} textColor="black">Proof on Camera of achieving a cultural task</Heading>
            <List>
              <Appear><ListItem>Taking a selfie with 3 executives</ListItem></Appear>
              <Appear><ListItem>Participating in community service work</ListItem></Appear>
              <Appear><ListItem>Take a pic with new employee</ListItem></Appear>
              <Appear><ListItem>Take a pic with the fountain</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} fit textColor="black">Bounty Board</Heading>
            <List>
              <Appear><ListItem>Team Lead creates some optional tasks that anyone on the team can accomplish within a given time frame</ListItem></Appear>
              <Appear><ListItem>If team member accomplishes they can earn extra CulturePoints</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} fit textColor="black">Potential CulturePoints&trade; Rewards</Heading>
            <List>
              <ListItem>Company Swag</ListItem>
              <ListItem>Monetary stuff like gift cards</ListItem>
              <ListItem>Extra vacation time</ListItem>
              <ListItem>Cool vacation experiences</ListItem>
              <ListItem>Work from the CEO's desk for a day</ListItem>
              <ListItem>Go to a Conference, expenses paid</ListItem>
              <ListItem>Avatar Upgrades! 👍😀🙌</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">Any Questions?</Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
