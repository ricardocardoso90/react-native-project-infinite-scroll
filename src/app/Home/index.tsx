import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { ActivityIndicator, FlatList, View } from "react-native";

import { Card } from "../../components/Card";
import { productNames } from "../../database/seed";

export default function Home() {
  const database = useSQLiteContext();

  // const [products, setProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>(productNames);

  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function loadProducts() {
    try {
      const result = await database.getAllAsync<Product>(`SELECT * FROM products`);
      setProducts(result);
    } catch (error) {
      console.log(`ERRO AO CARREGAR OS PRODUTOS: ${error}`);
    };
  };

  // useEffect(() => {
  //   loadProducts();
  // }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Card product={item} />
        )}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 62,
          gap: 16
        }}
        onEndReached={() => {
          if (!isLoading && hasMore) {
            loadProducts();
          };
        }}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() => (isLoading ? <ActivityIndicator /> : null)}
      />
    </View>
  );
};