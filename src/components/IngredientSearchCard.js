import { useEffect, useState } from "react";
import { View } from "react-native";
import { Checkbox, Card, Text } from "react-native-paper";

let curCheckArray = [];

export function IngredientSearchCard(props) {
  const { ingredient, setIngredientListChecked, ingredientListChecked, index } =
    props;
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    setChecked(ingredientListChecked[index]);
  }, [ingredientListChecked]);

  return (
    <Card style={{ margin: 10, width: "30%" }}>
      <View
        style={{ flexDirection: "row", justifyContent: "center", margin: 10 }}
      >
        <Text>{ingredient}</Text>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            curCheckArray = [...ingredientListChecked];
            curCheckArray[index] = !curCheckArray[index];
            setChecked(!checked);
            setIngredientListChecked(curCheckArray);
          }}
        />
      </View>
    </Card>
  );
}
