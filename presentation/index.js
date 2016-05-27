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
  logo: require("../assets/culture-hero-logo3.png"),
  kapow: require("../assets/ka-pow.png"),
  pow: require("../assets/pow.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#254da4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="pacman">

          {/*<Slide bgColor="primary">

          </Slide>*/}

          <Slide bgColor="primary" align="center center">
            <Image src={images.logo.replace("/", "")} width="800px" />
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} textColor="white">
              Culture Hero is an interactive company engagement platform that motivates and aligns your workforce with the science of gamification.
            </Heading>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={2} textColor="white">
              Your company has an engagement problem 🔥
            </Heading>
          </Slide>

          <Slide bgColor="white" align="flex-start flex-start">
            <Heading size={2} textColor="black">Gallup studies show:</Heading>
            <List>
              <Appear>
                <ListItem>70% of U.S. employees are disengaged</ListItem>
              </Appear>
              <Appear>
                <ListItem>84% of German workers are disengaged with their jobs</ListItem>
              </Appear>
              <Appear>
                <ListItem>Absenteeism is 67% higher among actively disengaged employees than engaged ones</ListItem>
              </Appear>
              <Appear>
                <ListItem>Only 16% of disengaged employees would recommend their company's products or service</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="white" align="flex-start flex-start">
            <Heading size={2} textColor="black">Why engagement matters</Heading>
            <Heading size={6} textColor="black">Engaged employees are more:</Heading>
            <List>
              <Appear>
                <ListItem>Productive</ListItem>
              </Appear>
              <Appear>
                <ListItem>Happy</ListItem>
              </Appear>
              <Appear>
                <ListItem>Less likely to turn over</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="black">
            <Heading size={1}>Definitions</Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1}>
              Culture
            </Heading>
            <BlockQuote>
              <Quote>How things are done around here</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1}>
              Engagement
            </Heading>
            <BlockQuote>
              <Quote>How people feel about the way things are done around here</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1}>
              Gamification
            </Heading>
            <BlockQuote>
              <Quote>Uses the mechanics that bring out people’s natural desires for competition, achievement, status, and closure when faced with a real-life situation in the form of a game</Quote>
            </BlockQuote>
          </Slide>

          <Slide bgColor="white" align="flex-start flex-start">
            <Heading size={2} textColor="black">How Gamification Improves Engagement</Heading>
            <List>
              <Appear>
                <ListItem>89% of those surveyed stated that a point system would boost their engagement.</ListItem>
              </Appear>
              <Appear>
                <ListItem>82% are in favor of multiple difficulty levels and explorable content.</ListItem>
              </Appear>
              <Appear>
                <ListItem>62% stated that they would be motivated to learn if leaderboards were involved and they had the opportunity to compete with other colleagues.</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="white" align="flex-start flex-start">
            <Heading size={4} textColor="black">How to get Gamification Right</Heading>
            <List>
              <Appear>
                <ListItem>fast feedback</ListItem>
              </Appear>
              <Appear>
                <ListItem>transparency</ListItem>
              </Appear>
              <Appear>
                <ListItem>goals</ListItem>
              </Appear>
              <Appear>
                <ListItem>badges</ListItem>
              </Appear>
              <Appear>
                <ListItem>leveling up</ListItem>
              </Appear>
              <Appear>
                <ListItem>onboarding</ListItem>
              </Appear>
              <Appear>
                <ListItem>competition</ListItem>
              </Appear>
              <Appear>
                <ListItem>collaboration</ListItem>
              </Appear>
              <Appear>
                <ListItem>community</ListItem>
              </Appear>
              <Appear>
                <ListItem>points</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">Roles</Heading>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="white">Employee</Heading>
          </Slide>

          <Slide bgColor="white" align="center flex-start">
            <Heading size={5} textColor="black">Profile</Heading>
            <Image src={images.profile.replace("/", "")} height="400px" />
            <List>
              <Appear>
                <ListItem>Culture Points & Coins</ListItem>
              </Appear>
              <Appear>
                <ListItem>Clear leveling progress indicator</ListItem>
              </Appear>
              <Appear>
                <ListItem>Quest log and items to be completed</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="white" align="center flex-start">
            <Heading size={5} textColor="black">Top Heroes</Heading>
            <Image src={images.topHeroes.replace("/", "")} height="400px" margin={10} />
            <List>
              <Appear>
                <ListItem>Compete by team, department or company for monthly top hero</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="white" align="center flex-start">
            <Heading size={5} textColor="black">Task Proof</Heading>
            <Image src={images.taskProof.replace("/", "")} height="400px" margin={10} />
            <List>
              <Appear>
                <ListItem>"Real world" challenges require photo proof</ListItem>
              </Appear>
              <Appear>
                <ListItem>Managers and/or peers verify proofs to unlock points!</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="white" align="center flex-start">
            <Heading size={5} textColor="black">Bounty Board</Heading>
            <Image src={images.bounties.replace("/", "")} height="400px" margin={10} />
            <List>
              <Appear>
                <ListItem>Managers and execs can post monthly bounties</ListItem>
              </Appear>
              <Appear>
                <ListItem>Managers and/or peers verify proofs to unlock points!</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="white" align="flex-start flex-start">
            <Heading size={5} textColor="black">Other Concepts</Heading>
            <List>
              <Appear>
                <ListItem>Each team member gets a monthly bounty to give away to other team member(s)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Culture Coin Roulette (take a gamble)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Comments on achievements (quick +1 point giveaways)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Culture Point rewards</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="white">Culture Hero Facilitator</Heading>
          </Slide>

          <Slide bgColor="white" align="center flex-start">
            <Heading size={5} textColor="black">File Box</Heading>
            <Image src={images.filebox.replace("/", "")} height="400px" />
            <List>
              <Appear>
                <ListItem>Drop in raw assets to our online file manager</ListItem>
              </Appear>
              <Appear>
                <ListItem>Organize as desired</ListItem>
              </Appear>
              <Appear>
                <ListItem>Drop in videos, images, documents, powerpoints, or even links to external blog posts (works like Pocket)</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="white" align="center flex-start">
            <Heading size={5} textColor="black">Content Chains</Heading>
          <Image src={images.contentChains.replace("/", "")} height="350px" />
            <List>
              <Appear>
                <ListItem>Made up of content “chunks”</ListItem>
              </Appear>
              <Appear>
                <ListItem>Chunks are linked together</ListItem>
              </Appear>
              <Appear>
                <List>
                  <ListItem>Tight Link: means a chunk immediately follows another</ListItem>
                  <ListItem>Loose Link: means chunks from another chain may be woven in by the module builder</ListItem>
                </List>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="white" align="center flex-start">
            <Heading size={5} textColor="black">Module Builder</Heading>
            <Image src={images.moduleBuilder.replace("/", "")} height="400px" />
            <List>
              <Appear>
                <ListItem>Each module a collection of chains</ListItem>
              </Appear>
              <Appear>
                <ListItem>Chains are woven together randomly by their loose links to produce interesting quests</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="white">Executive or Manager</Heading>
          </Slide>

          <Slide bgColor="white" align="center flex-start">
            <Heading size={5} textColor="black">Engagement Dashboard</Heading>
            <Image src={images.engagementDashboard.replace("/", "")} height="400px" />
            <List>
              <Appear>
                <ListItem>View engagement index by team, department, etc</ListItem>
              </Appear>
              <Appear>
                <ListItem>Assess whether cultural initiatives are having an impact on retention and productivity</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="white" align="flex-start flex-start">
            <Heading size={5} textColor="black">Culture Communications</Heading>
            <Image src={images.cultureCommunications.replace("/", "")} height="400px" />
            <List>
              <Appear>
                <ListItem>Communicate with your company or team</ListItem>
              </Appear>
              <Appear>
                <ListItem>Send video “fireside chat” messages</ListItem>
              </Appear>
              <Appear>
                <ListItem>Send e-mail or text messages</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="white" align="flex-start flex-start">
            <Heading size={5} textColor="black">Other Concepts</Heading>
            <List>
              <Appear>
                <ListItem>Sentiment analysis of company communication</ListItem>
              </Appear>
              <Appear>
                <ListItem>Managers earn points when their teams do and compete on different levels than regular employees</ListItem>
              </Appear>
            </List>
          </Slide>






















{/*
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
          </Slide>*/}

          <Slide bgColor="primary">
            <Heading size={4} fit textColor="white">Potential CulturePoints&trade; Rewards</Heading>
            <List>
              <ListItem textColor="white">Company Swag</ListItem>
              <ListItem textColor="white">Monetary stuff like gift cards</ListItem>
              <ListItem textColor="white">Extra vacation time</ListItem>
              <ListItem textColor="white">Cool vacation experiences</ListItem>
              <ListItem textColor="white">Work from the CEO's desk for a day</ListItem>
              <ListItem textColor="white">Go to a Conference, expenses paid</ListItem>
              <ListItem textColor="white">Avatar Upgrades! 👍😀🙌</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">Any Questions?</Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
