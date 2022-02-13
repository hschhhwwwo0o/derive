import { StyleSheet } from "react-native";
import AppConstants from "styles/constants";

export default StyleSheet.create({
  Layout: {
    backgroundColor: AppConstants.BackgroundColor,
    flex: 1,
    paddingHorizontal: AppConstants.PaddingHorizontal,
    paddingTop: AppConstants.PaddingTop,
  },
  LayoutWithoutHorizontalPaddings: {
    backgroundColor: AppConstants.BackgroundColor,
    flex: 1,
    paddingTop: AppConstants.PaddingTop,
  },
});
