import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Profile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 461.42 378.89" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(33,83,118,1)"
              cx={231}
              cy={189}
              rx={231}
              ry={189}
            ></Ellipse>
          </Svg>
          <View style={styles.rect}>
            <View style={styles.image5Row}>
              <Image
                source={require("../assets/ailsa.jpeg")}
                resizeMode="cover"
                style={styles.image5}
              ></Image>
              <View style={styles.ailsaNafaDevinaColumn}>
                <Text style={styles.ailsaNafaDevina}>Ailsa Nafa Devina</Text>
                <View style={styles.group2}>
                  <View style={styles.group}>
                    <View style={styles.rect3}>
                      <View style={styles.logoutRow}>
                        <Text style={styles.logout}>Logout</Text>
                        <EvilIconsIcon
                          name="arrow-right"
                          style={styles.icon5}
                        ></EvilIconsIcon>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.rect4Stack}>
              <View style={styles.rect4}>
                <View style={styles.icon7Row}>
                  <EntypoIcon
                    name="bar-graph"
                    style={styles.icon7}
                  ></EntypoIcon>
                  <View style={styles.divisiColumn}>
                    <Text style={styles.divisi}>Divisi</Text>
                    <Text style={styles.finance}>Finance</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rect5}>
                <View style={styles.icon6Row}>
                  <EntypoIcon
                    name="briefcase"
                    style={styles.icon6}
                  ></EntypoIcon>
                  <View style={styles.jabatanStack}>
                    <Text style={styles.jabatan}>Jabatan</Text>
                    <Text style={styles.staff}>Staff</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.homeStackRow}>
          <View style={styles.homeStack}>
            <Text style={styles.home}>Home</Text>
            <Text style={styles.home1}>Home</Text>
            <Image
              source={require("../assets/home.png")}
              resizeMode="cover"
              style={styles.image4}
            ></Image>
          </View>
          <View style={styles.button2Column}>
            <TouchableOpacity style={styles.button2}>
              <Image
                source={require("../assets/history.png")}
                resizeMode="cover"
                style={styles.image2}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.history}>History</Text>
          </View>
          <View style={styles.button3Column}>
            <TouchableOpacity style={styles.button3}>
              <Image
                source={require("../assets/user.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.text}>Profile</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <View style={styles.icon2Row}>
          <MaterialCommunityIconsIcon
            name="account-key"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.gantiPassword}>Ganti Password</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.icon3Row}>
        <EntypoIcon name="v-card" style={styles.icon3}></EntypoIcon>
        <Text style={styles.dataDiri}>Data Diri</Text>
      </View>
      <View style={styles.namaLengkapIdRow}>
        <Text style={styles.namaLengkapId}>
          Nama Lengkap {"\t"}: Ailsa Nafa Devina{"\n"}ID{"\t"}
          {"\t"}
          {"\t"}
          {"\t"}: XXX{"\n"}Email{"\t"}
          {"\t"}
          {"\t"}: ailsanafadevina@gmail.com {"\n"}Telepon {"\t"}
          {"\t"}
          {"\t"}: 089999222444{"\n"}Nomor KTP {"\t"}
          {"\t"}: 3374567890212121{"\n"}Tanggal Lahir {"\t"}: 07 Januari 2001
          {"\n"}Jenis Kelamin {"\t"}: Perempuan{"\n"}Agama {"\t"}
          {"\t"}
          {"\t"}: Islam{"\n"}Alamat {"\t"}
          {"\t"}
          {"\t"}: Jl. Tandang 2 / 11{"\n"}Status{"\t"}
          {"\t"}
          {"\t"}: Belum Menikah
        </Text>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 308
  },
  ellipse: {
    top: 0,
    width: 461,
    height: 379,
    position: "absolute",
    left: 0
  },
  rect: {
    top: 246,
    left: 79,
    width: 301,
    height: 196,
    position: "absolute",
    backgroundColor: "rgba(212,246,204,1)",
    borderRadius: 25
  },
  image5: {
    width: 61,
    height: 59,
    borderRadius: 100
  },
  ailsaNafaDevina: {
    fontFamily: "roboto-700",
    color: "rgba(33,83,118,1)",
    fontSize: 18,
    letterSpacing: 1,
    marginLeft: 3
  },
  group2: {
    width: 93,
    height: 28,
    marginTop: 9
  },
  group: {
    width: 93,
    height: 28
  },
  rect3: {
    width: 93,
    height: 28,
    backgroundColor: "rgba(174,17,17,1)",
    borderRadius: 8,
    flexDirection: "row"
  },
  logout: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    marginTop: 6
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    height: 28,
    width: 26,
    marginLeft: 8
  },
  logoutRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 4,
    marginLeft: 11
  },
  ailsaNafaDevinaColumn: {
    width: 163,
    marginLeft: 15,
    marginTop: 6
  },
  image5Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 26,
    marginRight: 36
  },
  rect4: {
    top: 0,
    left: 0,
    width: 119,
    height: 65,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  divisi: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  finance: {
    fontFamily: "roboto-700",
    color: "#121212",
    letterSpacing: 1
  },
  divisiColumn: {
    width: 56,
    marginLeft: 7
  },
  icon7Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 11,
    marginRight: 15
  },
  rect5: {
    top: 0,
    left: 117,
    width: 119,
    height: 65,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: "row"
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  jabatan: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  staff: {
    top: 16,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    letterSpacing: 1
  },
  jabatanStack: {
    width: 51,
    height: 33,
    marginLeft: 10
  },
  icon6Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 17,
    marginLeft: 11,
    marginTop: 19
  },
  rect4Stack: {
    width: 236,
    height: 65,
    marginTop: 14,
    marginLeft: 33
  },
  ellipseStack: {
    width: 461,
    height: 442,
    marginLeft: 424
  },
  iconRow: {
    height: 442,
    flexDirection: "row",
    marginTop: -109,
    marginLeft: -507,
    marginRight: -43
  },
  rect2: {
    width: 405,
    height: 100,
    backgroundColor: "#E6E6E6",
    marginTop: 386,
    marginLeft: -15
  },
  home: {
    top: 48,
    left: 13,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9
  },
  home1: {
    top: 48,
    left: 13,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 0
  },
  image4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 50
  },
  homeStack: {
    width: 50,
    height: 59,
    marginTop: 2
  },
  button2: {
    width: 50,
    height: 50
  },
  image2: {
    width: 50,
    height: 50
  },
  history: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9,
    marginLeft: 7
  },
  button2Column: {
    width: 50,
    marginLeft: 73,
    marginBottom: 2
  },
  button3: {
    width: 89,
    height: 50
  },
  image3: {
    width: 89,
    height: 50
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9,
    marginTop: 2,
    marginLeft: 32
  },
  button3Column: {
    width: 89,
    marginLeft: 52
  },
  homeStackRow: {
    height: 63,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 55,
    marginRight: 36
  },
  button: {
    width: 145,
    height: 29,
    backgroundColor: "rgba(246,107,14,1)",
    borderRadius: 45,
    flexDirection: "row",
    marginTop: -204,
    marginLeft: 190
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    height: 16,
    width: 15
  },
  gantiPassword: {
    fontFamily: "roboto-100",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    letterSpacing: 2,
    marginLeft: 8,
    marginTop: 2
  },
  icon2Row: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 15,
    marginTop: 7
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  dataDiri: {
    fontFamily: "roboto-700",
    color: "#121212",
    letterSpacing: 2,
    marginLeft: 12,
    marginTop: 5
  },
  icon3Row: {
    height: 27,
    flexDirection: "row",
    marginTop: -289,
    marginLeft: 40,
    marginRight: 226
  },
  namaLengkapId: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    lineHeight: 20
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 67,
    marginTop: 32
  },
  namaLengkapIdRow: {
    height: 200,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 77,
    marginRight: -64
  }
});

export default Profile;
