import { StyleSheet, View } from "react-native";
import { GlobalProvider } from "../context/GlobalContext";
import Constants from "expo-constants";

import Balance from "../components/Balance";
import Income from "../components/Income";
import Expenses from "../components/Expenses";

export default function MainScreen() {
  return (
    <GlobalProvider>
      <View style={styles.container}>
        <Balance />
        <View style={styles.containerIncome}>
          <Income />
          <Expenses />
        </View>
      </View>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    gap: 50,
    paddingTop: 30,
    backgroundColor: "#266A61",
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },
  containerIncome: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
