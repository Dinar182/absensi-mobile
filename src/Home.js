import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";

const Home = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 563.46 343.37" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(246,107,14,1)"
            cx={282}
            cy={172}
            rx={282}
            ry={172}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/logo-bjl-2-removebg-preview.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
        <View style={styles.rect}>
          <View style={styles.image9Row}>
            <Image
              source={require("../assets/ailsa.jpeg")}
              resizeMode="cover"
              style={styles.image9}
            ></Image>
            <View style={styles.AilsaNafaDevinaColumn}>
              <Text style={styles.AilsaNafaDevina}>Ailsa Nafa Devina</Text>
              <Text style={styles.id003}>ID : 003</Text>
            </View>
          </View>
          <View style={styles.rect2Stack}>
            <View style={styles.rect2}>
              <View style={styles.rect2}></View>
              <Text style={styles.masuk}>Masuk</Text>
              <Text style={styles.AilsaNafaDevina2}>00 : 00</Text>
              <View style={styles.rect3}></View>
              <View style={styles.pulangStack}>
                <Text style={styles.pulang}>Pulang</Text>
                <EntypoIcon name="log-out" style={styles.icon2}></EntypoIcon>
                <Text style={styles.AilsaNafaDevina3}>00 : 00</Text>
              </View>
            </View>
            <EntypoIcon name="login" style={styles.icon}></EntypoIcon>
          </View>
        </View>
        <Text style={styles.helloAilsa}>Hello, Ailsa</Text>
        <Text style={styles.loremIpsum}>
          Selamat datang diabsensi online {"\n"}sebagai Staff
        </Text>
      </View>
      <View style={styles.rect4}>
        <View style={styles.button10Row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button10}
          >
            <Image
              source={require("../assets/home.png")}
              resizeMode="contain"
              style={styles.image10}
            ></Image>
            <Text style={styles.text2}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("History")}
            style={styles.button5}
          >
            <View style={styles.image2Stack}>
              <Image
                source={require("../assets/history.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <Text style={styles.text}>History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Profile")}
            style={styles.button6}
          >
            <Image
              source={require("../assets/userhome.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Text style={styles.profile}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.group2Row}>
        <View style={styles.group2}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Absen")}
            style={styles.button}
          >
            <Image
              source={require("../assets/immigration.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <TextInput placeholder="Absen" style={styles.textInput}></TextInput>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("RekapAbsen")}
          style={styles.button7}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("RekapAbsen")}
            style={styles.button3}
          >
            <Image
              source={require("../assets/list.png")}
              resizeMode="contain"
              style={styles.image8}
            ></Image>
            <Text style={styles.rekapAbsen}>Rekap Absen</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.button8Row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Izin")}
          style={styles.button8}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Izin")}
            style={styles.button1}
          >
            <Image
              source={require("../assets/notes.png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
            <Text style={styles.izin}>Izin</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Cuti")}
          style={styles.button9}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Izin")}
            style={styles.button2}
          >
            <Image
              source={require("../assets/travel.png")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
            <Text style={styles.cuti}>Cuti</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse: {
    top: 0,
    width: 563,
    height: 343,
    position: "absolute",
    transform: [
      {
        rotate: "-6.00deg"
      }
    ],
    left: 0
  },
  image5: {
    position: "absolute",
    top: 76,
    left: 282,
    height: 268,
    width: 260,
    opacity: 0.3
  },
  rect: {
    top: 262,
    width: 309,
    height: 182,
    position: "absolute",
    backgroundColor: "rgba(17,43,60,1)",
    borderRadius: 20,
    left: 137
  },
  image9: { //foto ailsa
    height: 70,
    width: 70,
    borderRadius: 100
  },
  AilsaNafaDevina: {
    fontFamily: "signika-negative-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  id003: {
    fontFamily: "heebo-regular",
    color: "rgba(249,249,249,1)"
  },
  AilsaNafaDevinaColumn: {
    width: 149,
    marginLeft: 8,
    marginTop: 11,
    marginBottom: 15
  },
  image9Row: {
    height: 70,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 26,
    marginRight: 56
  },
  rect2: {
    flex: 0.53,
    backgroundColor: "rgba(132,158,229,1)",
    borderRadius: 10
  },
  masuk: {
    top: 7,
    left: 12,
    position: "absolute",
    fontFamily: "signika-negative-regular",
    color: "rgba(249,249,249,1)"
  },
  AilsaNafaDevina2: {
    top: 24,
    left: 59,
    position: "absolute",
    fontFamily: "signika-negative-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  rect3: {
    flex: 0.47,
    backgroundColor: "rgba(32,83,117,1)",
    borderRadius: 10
  },
  pulang: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "signika-negative-regular",
    color: "rgba(249,249,249,1)"
  },
  icon2: {
    top: 17,
    left: 1,
    position: "absolute",
    color: "rgba(242,87,87,1)",
    fontSize: 30,
    height: 32,
    width: 30
  },
  AilsaNafaDevina3: {
    top: 17,
    left: 38,
    position: "absolute",
    fontFamily: "signika-negative-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  pulangStack: {
    top: 7,
    left: 156,
    width: 110,
    height: 49,
    position: "absolute"
  },
  icon: {
    top: 24,
    left: 14,
    position: "absolute",
    color: "rgba(130,244,156,1)",
    fontSize: 30,
    width: 40,
    height: 44
  },
  rect2Stack: {
    width: 277,
    height: 68,
    marginTop: 10,
    marginLeft: 15
  },
  helloAilsa: {
    top: 143,
    left: 126,
    position: "absolute",
    fontFamily: "pacifico-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    opacity: 1.5
  },
  loremIpsum: {
    top: 190,
    left: 128,
    position: "absolute",
    fontFamily: "heebo-regular",
    color: "rgba(249,249,249,1)"
  },
  ellipseStack: {
    width: 563,
    height: 444,
    marginTop: -63,
    marginLeft: -95
  },
  rect4: {
    width: 400,
    height: 98,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginTop: 333
  },
  button10: {
    width: 45,
    height: 57,
    opacity: 0.5
  },
  image10: {
    height: 39,
    width: 45
  },
  text2: {
    fontFamily: "heebo-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    marginTop: 1,
    marginLeft: 7
  },
  button5: {
    width: 40,
    height: 57,
    marginLeft: 75,
    marginTop: 1
  },
  image2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 40
  },
  text: {
    top: 39,
    left: 1,
    position: "absolute",
    fontFamily: "heebo-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12
  },
//   image2Stack: {
//     width: 100,
//     height: 57
//   },
  button6: {
    width: 37,
    height: 55,
    marginLeft: 85,
    marginTop: 3
  },
  image3: {
    height: 37,
    width: 37
  },
  profile: {
    fontFamily: "heebo-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    marginLeft: 1
  },
  button10Row: {
    height: 58,
    flexDirection: "row",
    flex: 1,
    marginRight: 46,
    marginLeft: 47,
    marginTop: 15
  },
  group2: {
    width: 130,
    height: 130
  },
  button: {
    width: 130,
    height: 130,
    backgroundColor: "rgba(212,246,204,1)",
    borderRadius: 10
  },
  image4: {
    height: 80,
    width: 80,
    marginTop: 14,
    marginLeft: 27
  },
  textInput: {
    fontFamily: "heebo-200",
    color: "#121212",
    width: 39,
    height: 17,
    marginTop: 7,
    marginLeft: 46
  },
  button7: {
    width: 130,
    height: 130,
    marginLeft: 37
  },
  button3: {
    width: 130,
    height: 130,
    backgroundColor: "rgba(212,246,204,1)",
    borderRadius: 10
  },
  image8: {
    height: 70,
    width: 70,
    marginTop: 19,
    marginLeft: 31
  },
  rekapAbsen: {
    fontFamily: "heebo-200",
    color: "#121212",
    marginTop: 10,
    marginLeft: 28
  },
  group2Row: {
    height: 130,
    flexDirection: "row",
    marginTop: -406,
    marginLeft: 37,
    marginRight: 41
  },
  button8: {
    width: 130,
    height: 130
  },
  button1: {
    width: 130,
    height: 130,
    backgroundColor: "rgba(212,246,204,1)",
    borderRadius: 10
  },
  image6: {
    height: 70,
    width: 70,
    marginTop: 19,
    marginLeft: 31
  },
  izin: {
    fontFamily: "heebo-200",
    color: "#121212",
    marginTop: 7,
    marginLeft: 51
  },
  button9: {
    width: 130,
    height: 130,
    marginLeft: 37
  },
  button2: {
    width: 130,
    height: 130,
    backgroundColor: "rgba(212,246,204,1)",
    borderRadius: 10
  },
  image7: {
    height: 75,
    width: 75,
    marginTop: 16,
    marginLeft: 30
  },
  cuti: {
    fontFamily: "heebo-200",
    color: "#121212",
    marginTop: 4,
    marginLeft: 54
  },
  button8Row: {
    height: 130,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 38,
    marginRight: 40
  }
});

export default Home;
