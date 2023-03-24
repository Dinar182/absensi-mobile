import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Entypo";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 549.24 378.77" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(33,83,118,1)"
            cx={275}
            cy={189}
            rx={275}
            ry={189}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/images/documents1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Icon name="chevron-with-circle-left" style={styles.icon}></Icon>
        <Text style={styles.absen}>Absen</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <View style={styles.image2Row}>
          <Image
            source={require("../assets/images/rating.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <View style={styles.absen2Column}>
            <Text style={styles.absen2}>ABSEN</Text>
            <Text style={styles.masuk}>Masuk</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <View style={styles.absen3ColumnRow}>
          <View style={styles.absen3Column}>
            <Text style={styles.absen3}>ABSEN</Text>
            <Text style={styles.pulang}>Pulang</Text>
          </View>
          <Image
            source={require("../assets/images/win.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 549,
    height: 379,
    position: "absolute",
    transform: [
      {
        rotate: "-17.00deg"
      }
    ]
  },
  image: {
    top: 182,
    left: 101,
    width: 271,
    height: 295,
    position: "absolute"
  },
  icon: {
    top: 89,
    left: 120,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  absen: {
    top: 100,
    left: 169,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  ellipseStack: {
    width: 549,
    height: 477,
    marginTop: -55,
    marginLeft: -108
  },
  button: {
    width: 267,
    height: 91,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    marginTop: 14,
    marginLeft: 45
  },
  image2: {
    width: 89,
    height: 78
  },
  absen2: {
    fontFamily: "roboto-700",
    color: "rgba(246,107,14,1)",
    letterSpacing: 1,
    fontSize: 25
  },
  masuk: {
    fontFamily: "roboto-300",
    color: "#121212",
    letterSpacing: 4
  },
  absen2Column: {
    width: 85,
    marginLeft: 20,
    marginTop: 13,
    marginBottom: 15
  },
  image2Row: {
    height: 78,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 21,
    marginRight: 52
  },
  button2: {
    width: 267,
    height: 91,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    marginTop: 39,
    marginLeft: 45
  },
  absen3: {
    fontFamily: "roboto-700",
    color: "rgba(246,107,14,1)",
    letterSpacing: 1,
    fontSize: 25,
    marginLeft: 2
  },
  pulang: {
    fontFamily: "helvetica-regular",
    color: "#121212",
    letterSpacing: 4
  },
  absen3Column: {
    width: 87,
    marginTop: 8,
    marginBottom: 10
  },
  image3: {
    width: 69,
    height: 68,
    marginLeft: 56
  },
  absen3ColumnRow: {
    height: 68,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 28,
    marginRight: 27
  }
});

export default Coverabsen;
