import { StyleSheet, Text, View } from "react-native";
import { useGetGlobalContext } from "../context/GlobalContext";

export default function Expenses() {
  const { transactions } = useGetGlobalContext();

  const amounts = transactions.map((transaction) => transaction.amount);
  const exprenses =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <>
      <View>
        <Text style={styles.balance}>Expenses</Text>
        <Text style={styles.amount}>${exprenses}</Text>
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
