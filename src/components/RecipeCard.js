import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const RecipeCard = (recipe) => (
  <Card>
    <Card.Title title={recipe.title} left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text>Why</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);
