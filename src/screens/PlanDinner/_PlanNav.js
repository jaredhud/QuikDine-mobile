import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EventList } from "./EventList";
import { NewEvent } from "./NewEvent";
import { PastEvent } from "./PastEvent";
import { InProgressEvent } from "./InProgressEvent";
import { VotingPage } from "./VotingPage";
import SendEmail from "./SendEmail";

const Stack = createNativeStackNavigator();
export default function PlanNav(props) {
  const { selectedRecipesList } = props;
  return (
    <Stack.Navigator id="Plan Nav">
      <Stack.Screen name="Event List">
        {(props) => <EventList {...props} />}
      </Stack.Screen>
      <Stack.Screen name="New Event">
        {(props) => (
          <NewEvent {...props} selectedRecipesList={selectedRecipesList} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Past Event">
        {(props) => <PastEvent {...props} />}
      </Stack.Screen>
      <Stack.Screen name="In-Progress Event">
        {(props) => <InProgressEvent {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Voting Page">
        {(props) => <VotingPage {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Guest List">
        {(props) => <SendEmail {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
