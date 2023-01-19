import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RecipeRandomPage from "./RecipeRandomPage";
import RecipeSearchPage from "./RecipeSearchPage";
import RecipeIngredientSearchPage from "./RecipeIngredientSearchPage";
// import Animated from "react-native-reanimated";

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: "row", paddingTop: 20 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        // modify inputRange for custom behavior
        const inputRange = state.routes.map((_, i) => i);
        const opacity = 1;
        // Animated.interpolate(position, {
        //   inputRange,
        //   outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        // });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ opacity }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function RecipePage(props) {
  const { ingredients, mealType, cuisine } = props;
  React.useEffect(() => {
    console.log("Recipe Page");
    navigation.navigate("RecipeIngredientSearchPage", route.params);
  }, [route.params.ingredients]);
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Random Recipe" component={RecipeRandomPage} />
      <Tab.Screen name="Search Recipe" component={RecipeSearchPage} />
      <Tab.Screen
        name="Use Ingredients"
        component={RecipeIngredientSearchPage}
      />
    </Tab.Navigator>
  );
}
