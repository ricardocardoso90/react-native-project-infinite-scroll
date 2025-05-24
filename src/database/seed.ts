import { SQLiteDatabase } from "expo-sqlite";

const productNames: string[] = [
  "Arroz",
  "Feijão",
  "Macarrão",
  "Açucar",
  "Sal",
  "Óleo de soja",
  "Café",
  "Leite",
  "Farinha de trigo",
  "Farinha de mandioca",
  "Pão de forma",
  "Biscoito",
  "Manteiga",
  "Margarina",
  "Queijo",
  "Presunto",
  "Ovos",
  "Batata",
  "Cebola",
  "Alho",
  "Tomate",
  "Cenoura",
  "Beterraba",
  "Abobrinha",
  "Chuchu",
  "Alface",
  "Couve",
  "Espinafre",
  "Repolho",
  "Maça",
  "Banana",
  "Laranja",
  "Mamão",
  "Melancia",
  "Uva",
  "Pera",
  "Abacaxi",
  "Limão",
  "Morango",
  "Iogurte",
  "Requeijão",
  "Creme de leite",
  "Leite condensado",
  "Molho de tomate",
  "Extrato de tomate",
  "Milho verde",
  "Ervilha",
];

export async function seed(database: SQLiteDatabase) {
  await database.withTransactionAsync(async () => {
    for (const name of productNames) {
      await database.runAsync("INSERT INTO products (name) VALUES (?);", [name]);
    };
  });
};