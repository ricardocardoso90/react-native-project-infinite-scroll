import { ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator
      style={
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    />
  );
};