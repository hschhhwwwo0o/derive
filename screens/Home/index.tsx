import React, { FunctionComponent } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "components/UI/Logo";
import TheLayout from "layouts";
import AddCard from "components/Custom/AddCard";
import MinCard from "components/Custom/MinCard";
import Label from "components/UI/Label";
import AddGoal from "components/Custom/AddGoal";
import Goal from "components/Custom/Goal";
import Transaction from "components/Custom/Transaction";

const HomeScreen: FunctionComponent = () => {
  return (
    <>
      <TheLayout withHorizontalPaddings={false}>
        <Logo textAlign="center" />
        <View style={styles.container}>
          <View style={styles.cardsContainer}>
            <ScrollView horizontal>
              <AddCard />
              <MinCard />
              <MinCard />
            </ScrollView>
          </View>
          <View style={styles.body}>
            <Label>Goals</Label>
            <View style={styles.goalsContent}>
              <Goal />
              <Goal />
              <Goal />
              <View style={styles.addGoal}>
                <AddGoal />
              </View>
            </View>
            <View style={styles.transactionsHeader}>
              <Label>Last Transactions</Label>
              <Text style={styles.allTransactions}>All</Text>
            </View>
            <View style={styles.transactionsBody}>
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
            </View>
          </View>
        </View>
      </TheLayout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 46,
  },
  body: {
    marginTop: 22,
    paddingHorizontal: 31,
    paddingBottom: 40,
  },
  cardsContainer: {
    paddingLeft: 31,
    height: 220,
  },
  goalsContent: {
    marginTop: 11,
  },
  addGoal: {
    marginTop: 12,
  },
  transactionsHeader: {
    marginTop: 42,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transactionsBody: {
    marginTop: 11,
  },
  allTransactions: {
    fontFamily: "Lato-Black",
    color: "#585858",
  },
});

export default HomeScreen;
