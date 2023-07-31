import { StyleSheet, Text, View } from "react-native";
import { useGetGlobalContext } from "../context/GlobalContext";

export default function Balance() {
  const { transactions } = useGetGlobalContext();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((total, amount) => (total += amount), 0);

  return (
    <>
      <View>
        <Text style={styles.balance}>BALANCE</Text>
        <Text style={styles.amount}>${total}</Text>
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
