import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Gantipass(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.button4Row}>
          <TouchableOpacity style={styles.button4}>
            <EntypoIcon
              name="chevron-with-circle-left"
              style={styles.icon}
            ></EntypoIcon>
          </TouchableOpacity>
          <Text style={styles.gantiPassword}>Ganti Password</Text>
        </View>
      </View>
      <TextInput
        placeholder="Masukan Password Sebelumnya"
        textBreakStrategy="simple"
        clearButtonMode="while-editing"
        keyboardAppearance="light"
        dataDetector="all"
        placeholderTextColor="rgba(230, 230, 230,1)"
        secureTextEntry={false}
        style={styles.placeholder}
      ></TextInput>
      <Text style={styles.passwordSebelumnya}>Password Sebelumnya</Text>
      <View style={styles.rect2}>
        <View style={styles.buttonColumnRow}>
          <View style={styles.buttonColumn}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.home}>Home</Text>
          </View>
          <View style={styles.button2Stack}>
            <TouchableOpacity style={styles.button2}>
              <Image
                source={require("../assets/history.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.history}>History</Text>
          </View>
          <View style={styles.button3Column}>
            <TouchableOpacity style={styles.button3}>
              <Image
                source={require("../assets/userhome.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.profile}>Profile</Text>
          </View>
        </View>
      </View>
      <Text style={styles.passwordBaru}>Password Baru</Text>
      <TextInput
        placeholder="Masukan Password Baru"
        textBreakStrategy="simple"
        clearButtonMode="while-editing"
        keyboardAppearance="light"
        dataDetector="all"
        placeholderTextColor="rgba(230, 230, 230,1)"
        secureTextEntry={false}
        style={styles.placeholder1}
      ></TextInput>
      <TextInput
        placeholder="Masukan Ulang Password"
        textBreakStrategy="simple"
        clearButtonMode="while-editing"
        keyboardAppearance="light"
        dataDetector="all"
        placeholderTextColor="rgba(230, 230, 230,1)"
        secureTextEntry={false}
        style={styles.placeholder2}
      ></TextInput>
      <Text style={styles.konfirmasiPassword}>Konfirmasi Password</Text>
      <TouchableOpacity style={styles.button5}>
        <View style={styles.rect3}>
          <View style={styles.icon2Row}>
            <EntypoIcon name="edit" style={styles.icon2}></EntypoIcon>
            <Text style={styles.ubah}>Ubah</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 395,
    height: 90,
    backgroundColor: "rgba(33,83,118,1)",
    flexDirection: "row",
    marginTop : -20
  },
  button4: {
    width: 35,
    height: 35
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    
  },
  gantiPassword: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 15,
    marginTop: 7,
    fontSize: 18,

  },
  button4Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 200,
    marginLeft: 20,
    marginTop: 38
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 300,
    backgroundColor: "rgba(155,155,155,1)",
    fontSize: 10,
    borderRadius: 30,
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 106,
    marginLeft: 44
  },
  passwordSebelumnya: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: -78,
    marginLeft: 46
  },
  rect2: { //kotak abu2 bawah//
    width: 395,
    height: 100,
    backgroundColor: "#E6E6E6",
    marginTop: 550,

  },
  button: {
    width: 50,
    height: 50
  },
  image: {
    width: 50,
    height: 50
  },
  home: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 10
  },
  buttonColumn: {
    width: 60
  },
//   button2: {
//     top: 0,
//     left: 0,
//     width: 50,
//     height: 50,
//     position: "absolute"
//   },

  image2: {
    width: 50,
    height: 50
  },
  history: {
    top: 49,
    left: 5,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize:  12
  },
  button2Stack: {
    width: 50,
    height: 60,
    marginLeft: 75,
    // marginTop: 1
  },
  button3: {
    width: 45,
    height: 45
  },
  image3: {
    width: 45,
    height: 45,
    opacity : 0.5
  },
  profile: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 2,
    marginLeft: 5,

  },
  button3Column: {
    width: 40,
    marginLeft: 82,
    marginTop: 3
  },
  buttonColumnRow: {
    height: 61,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 41,
    marginRight: 46
  },
  passwordBaru: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: -550,
    marginLeft: 47
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 300,
    backgroundColor: "rgba(155,155,155,1)",
    fontSize: 10,
    borderRadius: 30,
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 9,
    marginLeft: 44
  },

  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 300,
    backgroundColor: "rgba(155,155,155,1)",
    fontSize: 10,
    borderRadius: 30,
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 68,
    marginLeft: 44
  },
  konfirmasiPassword: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: -76,
    marginLeft: 47
  },
  button5: {
    width: 109,
    height: 33,
    marginTop: 109,
    marginLeft: 240
  },
  rect3: {
    width: 100,
    height: 33,
    backgroundColor: "rgba(246,107,14,1)",
    borderRadius: 35,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    height: 16,
    width: 15,
    marginTop: 1
  },
  ubah: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    letterSpacing: 1,
    marginLeft: 12
  },
  icon2Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 30,
    marginLeft: 16,
    marginTop: 8
  }
});

export default Gantipass;
