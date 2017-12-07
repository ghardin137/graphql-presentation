// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    grey: '#555'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={2} textColor="secondary">
            What the heck is GraphQL?
          </Heading>
          <Appear>
            <Text>
              A query language for your api
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            What the heck does that mean?
          </Heading>
          <List>
            <Appear><ListItem>Integrates Data Sources</ListItem></Appear>
            <Appear><ListItem>Manages Relations</ListItem></Appear>
            <Appear><ListItem>Transforms Data</ListItem></Appear>
            <Appear><ListItem>Allows Selecting Subsets of Data</ListItem></Appear>
            <Appear><ListItem>Orchestrates Communication Between Sources</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            How does it work
          </Heading>
          <List>
            <Appear><ListItem>Describe Your Data</ListItem></Appear>
            <Appear><ListItem>Define How To Get That Data</ListItem></Appear>
            <Appear><ListItem>Define The Relationships</ListItem></Appear>
            <Appear><ListItem>Start Querying</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">The Schema</Heading>
          <Heading size={3} textColor="primary" caps>Defining Your Data</Heading>
          <List>
            <ListItem>Fields</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">The Schema</Heading>
          <Heading size={3} textColor="primary" caps>Define How To Get That Data</Heading>
          <List>
            <ListItem textColor="primary">Resolvers</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">The Schema</Heading>
          <Heading size={3} textColor="primary" caps>Define the Relationships</Heading>
          <List>
            <ListItem>Connections</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps>Start Querying</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            But wait!  You've only talked about getting data out.
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Mutations!<sup>*</sup>
          </Heading>
          <Text size={10} textColor="grey">* Professor Xavier Not Included.</Text>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Mutations
          </Heading>
          <List>
            <ListItem>Based on an Existing Type</ListItem>
            <ListItem>Uses Fields just a like a type</ListItem>
            <ListItem>Has a Resolver just a like a type</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Benefits
          </Heading>
          <List>
            <Appear><ListItem>Client Agnostic</ListItem></Appear>
            <Appear><ListItem>Client can choose which data it wants</ListItem></Appear>
            <Appear><ListItem>Client can transform data on the fly</ListItem></Appear>
            <Appear><ListItem>Limits the number of external requests</ListItem></Appear>
            <Appear><ListItem>Allows for rapid changes to client facing APIs</ListItem></Appear>
            <Appear><ListItem>Self Documenting</ListItem></Appear>
            <Appear><ListItem>Easily combines different data sources. (eg. REST APIs, Databases, etc )</ListItem></Appear>
            <Appear><ListItem>Runtime engines available in most languages</ListItem></Appear>
            <Appear><ListItem>Centralized Alerting and Analytics</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Drawbacks
          </Heading>
          <List>
            <Appear><ListItem>Caching can be difficult</ListItem></Appear>
            <Appear><ListItem>Handling File Upload/Downloads</ListItem></Appear>
            <Appear><ListItem>Some Data Is Difficult To Model</ListItem></Appear>
            <Appear><ListItem>Can Make Debugging Difficult</ListItem></Appear>
            <Appear><ListItem>Implementations can vary widely in specification support.</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Somewhere Between?
          </Heading>
          <List>
            <Appear><ListItem>Versioning</ListItem></Appear>
            <Appear><ListItem>Performance</ListItem></Appear>
            <Appear><ListItem>Adds another layer between client and data</ListItem></Appear>
            <Appear><ListItem>Developer Onboarding</ListItem></Appear>
            <Appear><ListItem>Scaling untested outside of Facebook</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Should We Switch Everything?
          </Heading>

          <Appear>
            <Heading size={1} textColor="primary" caps>
              No!
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Who Uses It?
          </Heading>
          <List>
            <Appear><ListItem>Facebook <small>(duh)</small></ListItem></Appear>
            <Appear><ListItem>Github</ListItem></Appear>
            <Appear><ListItem>Intuit</ListItem></Appear>
            <Appear><ListItem>Twitter</ListItem></Appear>
            <Appear><ListItem>Pinterest</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
