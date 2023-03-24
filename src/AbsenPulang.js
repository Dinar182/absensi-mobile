import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function AbsenPulang(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.button2Row}>
          <TouchableOpacity style={styles.button2}>
            <EntypoIcon
              name="chevron-with-circle-left"
              style={styles.icon1}
            ></EntypoIcon>
          </TouchableOpacity>
          <Text style={styles.text}>Absen Pulang</Text>
        </View>
        <Text style={styles.loremIpsum2}>17 : 00</Text>
        <Text style={styles.loremIpsum1}>17 / 11/ 2022</Text>
      </View>
      <View style={styles.rect2}>
        <Image
          source={require("../assets/fotoabsen.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.ambilFoto}>Ambil Foto</Text>
      <View style={styles.button1Row}>
        <TouchableOpacity style={styles.button1}>
          <EntypoIcon name="cw" style={styles.icon3}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon name="check" style={styles.icon2}></FontAwesomeIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 395,
    height: 220,
    backgroundColor: "rgba(32,83,117,1)",
    marginTop: -24
  },
  button2: {
    width: 40,
    height: 42,
    marginLeft :10,
    marginTop : -30
  },
  icon1: {
    color: "rgba(230,230,230,1)",
    fontSize: 40
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(230,230,230,1)",
    fontSize: 20,
    marginLeft: 18,
    marginTop: -23
  },
  button2Row: {
    height: 42,
    flexDirection: "row",
    marginTop: 70,
    marginLeft: 14,
    marginRight: 188
  },
  loremIpsum2: {
    fontFamily: "impact-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 45,
    letterSpacing: 2,
    marginTop: 3,
    marginLeft: 75
  },
  loremIpsum1: {
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    marginTop: 1,
    marginLeft: 80
  },
  rect2: {
    width: 290,
    height: 384,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    marginTop: 71,
    marginLeft: 49
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 92,
    marginLeft: 39
  },
  ambilFoto: {
    fontFamily: "heebo-200",
    color: "#121212",
    fontSize: 18,
    marginTop: -413,
    marginLeft: 49
  },
  button1: {
    width: 104,
    height: 47,
    backgroundColor: "rgba(212,246,204,1)",
    borderRadius: 15
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 35,
    width: 30,
    marginTop: 7,
    marginLeft: 36
  },
  button: {
    width: 104,
    height: 47,
    backgroundColor: "rgba(212,246,204,1)",
    borderRadius: 15,
    marginLeft: 79
  },
  icon2: {
    color: "rgba(246,107,14,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginTop: 4,
    marginLeft: 35
  },
  button1Row: {
    height: 47,
    flexDirection: "row",
    marginTop: 420,
    marginLeft: 49,
    marginRight: 49
  }
});

export default AbsenPulang;
