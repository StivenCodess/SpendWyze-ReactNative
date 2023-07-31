import { StyleSheet, Text, View } from "react-native";
import { useGetGlobalContext } from "../context/GlobalContext";

export default function Income() {
  const { transactions } = useGetGlobalContext();

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <View>
        <Text style={styles.balance}>Incomes</Text>
        <Text style={styles.amount}>${income}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  balance: {
    textAlign: "center",
    letterSpacing: 3,
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
  },
  amount: {
    textAlign: "center",
    fontSize: 25,
  },
});
