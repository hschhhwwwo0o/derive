import { LinearGradient } from "expo-linear-gradient";
import React, { FunctionComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const VisaSVG: FunctionComponent = () => {
  return (
    <>
      <Svg width="33" height="16" viewBox="0 0 33 16" fill="none">
        <Path d="M14.2951 3.37598L12.3745 12.2976H14.7026L16.565 3.37598H14.2951Z" fill="#302A2B" />
        <Path
          d="M10.9195 3.37606L8.53328 9.42163L7.54385 4.25649C7.42745 3.66954 6.96185 3.37606 6.49624 3.37606H2.59676L2.53857 3.61086C3.35339 3.78694 4.22642 4.08041 4.80843 4.37388C5.15764 4.54997 5.21582 4.72605 5.33222 5.13691L7.13647 12.239H9.58089L13.3058 3.31738H10.9195V3.37606Z"
          fill="#302A2B"
        />
        <Path
          d="M29.0203 3.37598H27.0414C26.5758 3.37598 26.2266 3.61078 26.052 4.02164L22.6182 12.2976H25.0044L25.47 10.9476H28.3801L28.6711 12.2976H30.7663L29.0203 3.37598ZM26.2266 9.12807L27.4488 5.78249L28.1473 9.12807H26.2266Z"
          fill="#302A2B"
        />
        <Path
          d="M19.5914 5.84122C19.5914 5.54775 19.8824 5.19558 20.5808 5.07819C20.93 5.0195 21.8031 5.01951 22.8507 5.48907L23.2581 3.61082C22.7342 3.43474 21.9777 3.19995 21.1046 3.19995C18.8348 3.19995 17.2634 4.43254 17.2634 6.1347C17.2634 7.42598 18.4274 8.13031 19.2422 8.54117C20.1152 8.95204 20.4062 9.24552 20.4062 9.65639C20.4062 10.2433 19.7078 10.5368 19.0094 10.5368C17.8454 10.5368 17.2051 10.2433 16.6813 9.94986L16.2739 11.8868C16.7977 12.1216 17.7872 12.3563 18.8348 12.3563C21.221 12.3563 22.7924 11.1825 22.7924 9.30423C22.7924 7.07383 19.5332 6.89773 19.5914 5.84122Z"
          fill="#302A2B"
        />
      </Svg>
    </>
  );
};

interface IMinCard {}

const MinCard: FunctionComponent = () => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.9}>
        <LinearGradient colors={["#CCF0FA", "#E5E5E5"]} end={{ x: 0.9, y: 0.2 }} style={styles.minCard}>
          <VisaSVG />
          <View>
            <Text style={styles.price}>4,450.00 ₽</Text>
            <Text style={styles.typeBalance}>Visa Balance</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardInfoText}>**** 5454</Text>
            <Text style={[styles.cardInfoText, styles.cardInfoDate]}>08/23</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  minCard: {
    height: 195,
    width: 161,
    borderRadius: 20,
    marginLeft: 12,
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 32,
    paddingTop: 36,
    shadowColor: "#eeeeee",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 14.78,
    elevation: 14,
  },
  price: {
    fontFamily: "Lato-Black",
    fontSize: 16,
  },
  typeBalance: {
    fontSize: 11,
    marginTop: 7,
    fontFamily: "Lato-Regular",
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 11,
    fontFamily: "Lato-Regular",
  },
  cardInfoText: { fontSize: 11 },
  cardInfoDate: { fontFamily: "Lato-Black" },
});

export default MinCard;
