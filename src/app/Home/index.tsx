import { Text, View } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect } from "react";

export default function Home() {
  const database = useSQLiteContext();

  async function loadProducts() {
    try {
      const result = await database.getAllAsync(`SELECT * FROM products`);
      console.log(result);
    } catch (error) {
      console.log(`ERRO AO CARREGAR OS PRODUTOS: ${error}`);
    };
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página Home</Text>
    </View>
  );
};