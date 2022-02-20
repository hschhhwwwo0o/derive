import React, { FunctionComponent } from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TheLayout from "layouts";
import AppConstants from "styles/constants";
import AddCard from "components/Custom/AddCard";
import MinCard from "components/Custom/MinCard";
import Label from "components/UI/Label";
import AddGoal from "components/Custom/AddGoal";
import Goal from "components/Custom/Goal";
import Transaction from "components/Custom/Transaction";
import TopPanel from "components/UI/TopPanel";

const HomeScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  function onGoToTransactions() {
    navigation.push("Transactions");
  }

  return (
    <>
      <TheLayout withHorizontalPaddings={false}>
        <TopPanel />
        <View style={styles.container}>
          <View style={styles.cardsContainer}>
            <ScrollView horizontal>
              <AddCard navigation={navigation} />
              <MinCard navigation={navigation} />
              <MinCard navigation={navigation} />
            </ScrollView>
          </View>
          <View style={styles.body}>
            <Label>Goals</Label>
            <View style={styles.goalsContent}>
              <Goal name="For a gift" price={100000} navigation={navigation} />
              <View style={styles.addGoal}>
                <AddGoal navigation={navigation} />
              </View>
            </View>
            <View style={styles.transactionsHeader}>
              <Label>Last Transactions</Label>
              <Pressable onPress={onGoToTransactions}>
                <Text style={styles.allTransactions}>All</Text>
              </Pressable>
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
    paddingHorizontal: AppConstants.PaddingHorizontal,
    paddingBottom: 40,
  },
  cardsContainer: {
    paddingLeft: AppConstants.PaddingHorizontal,
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
    fontFamily: AppConstants.FontExtra,
    color: "#585858",
  },
});

export default HomeScreen;
