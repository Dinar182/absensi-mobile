import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Notif(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Image
          source={require("../assets/cancel.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.loremIpsum}>
          Maaf anda belum terdaftar menjadi {"\n"}karyawan PT. Berkah Jaya
          Lestarindo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  rect: {
    width: 296,
    height: 249,
    backgroundColor: "rgba(17,43,60,1)",
    borderRadius: 35,
    marginLeft: 39
  },
  image: {
    height: 80,
    width: 80,
    marginTop: 61,
    marginLeft: 109
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "rgba(245,245,245,1)",
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.6,
    marginTop: 19,
    marginLeft: 21
  }
});

export default Notif;
