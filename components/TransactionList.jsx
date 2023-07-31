import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { useGetGlobalContext } from "../context/GlobalContext";

const Item = ({ transaction, amount, id }) => {
  const { removeTransaction } = useGetGlobalContext();

  const handlerButton = (transactionID) => removeTransaction(transactionID);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{transaction}</Text>
      <Text style={styles.item}>$ {amount}</Text>
      <Button style={styles.item} onPress={() => handlerButton(id)} title="×" />
    </View>
  );
};

const TransactionList = () => {
  const { transactions } = useGetGlobalContext();

  return (
    <FlatList
      style={styles.container}
      data={transactions}
      renderItem={({ item }) => (
        <Item
          transaction={item.description}
          amount={item.amount}
          id={item.id}
        ></Item>
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    maxHeight: "50%",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});
