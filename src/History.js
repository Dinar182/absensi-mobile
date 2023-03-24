import React, { Component } from "react";
// import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import DateTimePicker from '@react-native-community/datetimepicker';

class TambahJadwal extends Component {
  constructor(props) {
      super(props);
      this.state = {
          tanggal: '',
          date: new Date(),
          mode: 'date',
          show: false,
          showEnd: false,
          range_date: '-',
          display: 'default',

          Lkaryawan: [],
          KarySelected: 0,

          ShiftKary: [],
          shiftSelected: 0,

          showProgres: false,
          progresAlert: false,
          messageAlert: '',
          colorAlert: '#DD6B55'
      };
  }  
      onChange = (event, selectedValue) => {
        this.setState({show: false});

        const curretDate = selectedValue || this.state.date;
        this.setState({tanggal: curretDate});
        let tempDate = new Date(curretDate);
        let fDate =
          tempDate.getFullYear() 
          + '-' +
          String(tempDate.getMonth() + 1).padStart(2, '0') 
          + '-' +
          String(tempDate.getDate()).padStart(2, '0');
        this.setState({tanggal: String(fDate)});
    }

  render() {
        const showMode = (DateMode) => {
            if  (DateMode === 'date') {
              this.setState({show: true});
            }

            this.setState({mode: DateMode});
        };

  // function History(props) {

  return (
      <View style={styles.container}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <Text style={styles.loremIpsum}>
              Cek History Absenmu {"\n"}Hari ini....
            </Text>
          </View>
          <Image
            source={require("../assets/report.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <Text style={styles.pilihTanggal}>Pilih Tanggal</Text>
        <TouchableOpacity style={styles.button} >
          <View style={styles.iconRow}>
            <FontAwesomeIcon
              name="calendar"
              style={styles.icon}
            ></FontAwesomeIcon>
            <EntypoIcon name="chevron-down" style={styles.icon2}></EntypoIcon>
          </View>
        </TouchableOpacity>
        {this.state.show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={this.state.mode}
              is24Hour={true}
              display={this.state.display}
              onChange={this.onChange}
                      />
                  )}
        {/* <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        /> */}
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.oke}>Oke</Text>
        </TouchableOpacity>
        <View style={styles.rect2}>
          <View style={styles.group1Row}>
            <View style={styles.group1}>
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
              <Text style={styles.text1}>Home</Text>
            </View>
            <TouchableOpacity style={styles.button3}>
              <View style={styles.image2Stack}>
                <Image
                  source={require("../assets/history.png")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <Text style={styles.text2}>History</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
              style={styles.button4}
            >
              <Image
                source={require("../assets/userhome.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
              <Text style={styles.profile1}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 0,
    width: 412,
    height: 285,
    position: "absolute",
    backgroundColor: "rgba(32,83,117,1)"
  },
  loremIpsum: {
    fontFamily: "heebo-700",
    color: "rgba(246,107,14,1)",
    fontSize: 35,
    marginTop: 47,
    marginLeft: 42
  },
  image: {
    position: "absolute",
    top: 67,
    left: 56,
    height: 400,
    width: 400
  },
  rectStack: {
    width: 456,
    height: 467
  },
  pilihTanggal: {
    fontFamily: "heebo-300",
    color: "#121212",
    marginTop: 6,
    marginLeft: 58
  },
  button: {
    width: 266,
    height: 50,
    backgroundColor: "rgba(212,246,204,1)",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 9,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: "row",
    marginTop: 13,
    alignSelf: "center"
  },
  icon: {
    color: "rgba(32,83,117,1)",
    fontSize: 25,
    height: 25,
    width: 23,
    marginTop: 1
  },
  icon2: {
    color: "rgba(128,128,128,0.5)",
    fontSize: 25,
    height: 27,
    width: 25,
    marginLeft: 178
  },
  iconRow: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 21,
    marginTop: 12
  },
  button2: {
    width: 73,
    height: 31,
    backgroundColor: "rgba(32,83,117,1)",
    borderRadius: 75,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 2,
      width: 2
    },
    elevation: 9,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginTop: 25,
    marginLeft: 247
  },
  oke: {
    fontFamily: "roboto-700",
    color: "rgba(251,246,246,1)",
    marginTop: 7,
    marginLeft: 25
  },
  rect2: {
    width: 401,
    height: 90,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginTop: 130
  },
//   group1: {
//     width: 45,
//     height: 53
//   },
  image1: {
    height: 39,
    width: 45
  },
  text1: { //teks home 
    fontFamily: "heebo-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    marginTop: 1,
    marginLeft: 7
  },
  button3: { //button history ke kanan
    width: 45,
    height: 53,
    opacity: 0.5,
    marginLeft: 90
  },
  image2: { //gmbr history
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 40
  },
  text2: { // teks history
    top: 39,
    left: 1,
    position: "absolute",
    fontFamily: "heebo-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12
  },
  image2Stack: {
    width: 40,
    height: 56
  },
  button4: { // profile
    width: 37,
    height: 51,
    marginLeft: 85,
    marginTop: 3
  },
  image3: {
    height: 37,
    width: 37
  },
  profile1: {
    fontFamily: "heebo-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    marginLeft: 1
  },
  group1Row: {
    height: 54,
    flexDirection: "row",
    flex: 1,
    marginRight: 72,
    marginLeft: 50,
    marginTop: 20
  }
});

export default History;
