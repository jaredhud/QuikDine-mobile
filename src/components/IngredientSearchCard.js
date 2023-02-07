import { useEffect, useState } from "react";
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
    <Card>
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
    </Card>
  );
}
