import Home from "./src/app/Home";

import { Suspense } from "react";
import { SQLiteProvider } from "expo-sqlite";
import { databaseInit } from "./src/database/databaseInit";
import { Loading } from "./src/components/Loading";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <SQLiteProvider
        databaseName="infintescroll.db"
        onInit={databaseInit}
        useSuspense
      >
        <Home />
      </SQLiteProvider>
    </Suspense>
  );
};