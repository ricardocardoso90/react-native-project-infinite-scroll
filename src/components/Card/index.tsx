import { styles } from "./styles";
import { Text, View } from "react-native";

export function Card({ product }: { product: Product }) {
  return (
    <View style={styles.container}>
      <Text>{product.id}</Text>
      <Text>{product.name}</Text>
    </View>
  )
};