import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import AppConstants from "styles/constants";

interface IBackButton {
  onPressHandler: () => any;
}

const AngleLeft: FunctionComponent = () => {
  return (
    <>
      <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <G clip-path="url(#clip0_2_194)">
          <Path
            d="M10.0159 13.9999C9.93911 14.0004 9.86301 13.9857 9.79194 13.9566C9.72087 13.9276 9.65622 13.8848 9.60172 13.8308L4.83588 9.06495C4.56427 8.79401 4.34877 8.47215 4.20173 8.11781C4.05469 7.76346 3.979 7.38359 3.979 6.99995C3.979 6.6163 4.05469 6.23643 4.20173 5.88208C4.34877 5.52774 4.56427 5.20588 4.83588 4.93495L9.60172 0.169112C9.65611 0.114723 9.72068 0.0715791 9.79174 0.0421439C9.8628 0.0127087 9.93897 -0.00244141 10.0159 -0.00244141C10.0928 -0.00244141 10.169 0.0127087 10.24 0.0421439C10.3111 0.0715791 10.3757 0.114723 10.4301 0.169112C10.4844 0.223501 10.5276 0.288071 10.557 0.359133C10.5865 0.430196 10.6016 0.506361 10.6016 0.583279C10.6016 0.660197 10.5865 0.736361 10.557 0.807424C10.5276 0.878487 10.4844 0.943056 10.4301 0.997445L5.66422 5.76328C5.3365 6.0914 5.15242 6.53619 5.15242 6.99995C5.15242 7.4637 5.3365 7.90849 5.66422 8.23661L10.4301 13.0024C10.4847 13.0567 10.5281 13.1212 10.5577 13.1923C10.5874 13.2634 10.6026 13.3396 10.6026 13.4166C10.6026 13.4936 10.5874 13.5699 10.5577 13.6409C10.5281 13.712 10.4847 13.7766 10.4301 13.8308C10.3755 13.8848 10.3109 13.9276 10.2398 13.9566C10.1688 13.9857 10.0927 14.0004 10.0159 13.9999Z"
            fill="#F9F9F9"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_2_194">
            <Rect width="14" height="14" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};

const BackButton: FunctionComponent<IBackButton> = ({ onPressHandler = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={AppConstants.ActiveOpacity}>
      <View style={styles.backButton}>
        <AngleLeft />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 42,
    height: 42,
    marginTop: -8,
    backgroundColor: "#1F202F",
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 2,
  },
});

export default BackButton;
