import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Group4 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.child, styles.childBorder]} />
      <View style={[styles.screensForNewUsersWrapper, styles.childBorder]}>
        <Text style={styles.screensForNew}>Screens for new users</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    borderColor: Color.secondaryDefault,
    borderStyle: "solid",
    backgroundColor: Color.secondaryDefault,
    position: "absolute",
  },
  child: {
    top: 66,
    left: -2,
    borderTopWidth: 4,
    width: 5774,
    height: 4,
  },
  screensForNew: {
    fontSize: FontSize.mobileH1HeadingDisplay_size,
    letterSpacing: -1,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH1HeadingDisplay,
    color: Color.white,
    textAlign: "left",
  },
  screensForNewUsersWrapper: {
    top: 0,
    left: 0,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_mini,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 68,
  },
});

export default Group4;
