import { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";
import * as Crypto from "expo-crypto";
import { useGetGlobalContext } from "../context/GlobalContext";

const TransactionForm = () => {
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState();

  const { addTransaction } = useGetGlobalContext();

  const handlerTransaction = (e) => setTransaction(e);
  const handlerAmount = (e) => setAmount(e);

  const handlerButton = () => {
    addTransaction({
      id: Crypto.randomUUID(),
      description: transaction,
      amount: +amount,
    });
    setTransaction("");
    setAmount();
  };

  return (
    <View>
      <TextInput
        style={styles.transactionForm}
        placeholder="Transacción"
        value={transaction}
        onChangeText={handlerTransaction}
        autoFocus={true}
      />
      <TextInput
        style={styles.transactionForm}
        placeholder="Monto"
        value={amount}
        onChangeText={handlerAmount}
        keyboardType="numeric"
      />
      <Button onPress={handlerButton} title="Agregar Transaccion" />
    </View>
  );
};

export default TransactionForm;

const styles = StyleSheet.create({
  transactionForm: {
    borderWidth: 1,
    padding: 10,
  },
});
