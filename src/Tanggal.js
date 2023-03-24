import React, { Component } from "react";
import {View, StyleSheet, Text} from "react-native";
// import DatePicker from "react-native-datepicker";
import DatePicker from "@react-native-community/datetimepicker";

export default class Tanggal extends Component {
  constructor(props) {
    super(props);
    this.state = {date:''};
  }

  selectDate = (date) => {
    this.setState({date: date});
  }

  render () {
    return (
      <View style = {styles.container}>
        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        format="DD-MM-YYYY"
        minDate="01-01-2023"
        maxDate="31-12-2023"
        onDateChange={this.selectDate}
        />
        <Text style={{fontSize: 25}}>{this.state.date}</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});




