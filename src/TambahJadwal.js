import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

// import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
// import AwesomeAlert from 'react-native-awesome-alerts';

// import Transaction from '../../data/TransactionData';

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

        // const getDataKaryawan = async () => {
        //   const response = await Transaction.GetKaryawan();
    
        //   if (response.metadata.status > 200) {
        //       this.setState([]);
        //   } else {
        //       this.setState({Lkaryawan: response.response.karyawan});
        //   }
        // }

        // getDataKaryawan();

        // const getShift = async () => {
        //   const response = await Transaction.GetShift();
    
        //   if (response.metadata.status > 200) {
        //       this.setState([]);
        //   } else {
        //       this.setState({ShiftKary: response.response.shift});
        //   }
        // }
    
        // getShift();
    }

    // StoreJadwal = async () => {
    //   this.setState({
    //     showProgres: true,
    //     progresAlert: true
    //   }); 

    //   let data = {
    //     id_karyawan: this.state.KarySelected,
    //     tanggal: this.state.tanggal,
    //     shift: this.state.shiftSelected
    //   };

    //   const response = await Transaction.StoreJadwal(data);

    //   if (response.metadata.status > 200) {
    //     this.setState({
    //       showProgres: false,
    //       progresAlert: false,
    //       messageAlert: response.metadata.message,
    //       tanggal: '',
    //       date: new Date(),
    //     }); 
    //   } else {
    //     this.setState({
    //       showProgres: false,
    //       progresAlert: false,
    //       messageAlert: response.metadata.message
    //     });
    //   }
    // };

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
    };

    render() {
        const showMode = (DateMode) => {
            if  (DateMode === 'date') {
              this.setState({show: true});
            }

            this.setState({mode: DateMode});
        };

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Tambah Jadwal</Text>
                <Text style={styles.labelTeknis}>Teknis</Text>
                {/* <View style={styles.namaTeknis}>
                  <Picker
                    selectedValue={this.state.KarySelected}
                    onValueChange={(ItemKary, indexValue) => this.setState({KarySelected: ItemKary})}
                  >
                    {this.state.Lkaryawan.map((key, idx) => {
                      return (<Picker.Item label={key.nama} value={key.id_karyawan} key={key.id_karyawan} />)
                    })}
                  </Picker>
                </View> */}
                <TouchableOpacity
                    placeholder="Tanggal"
                    clearTextOnFocus={true}
                    inlineImagePadding={0}
                    style={styles.labelTanggal}
                    onPress={() => showMode('date')}>
                    <TextInput
                        style={styles.TglPlaceholder}
                        value={this.state.tanggal}
                        placeholder="Tanggal"
                        editable={false}
                        color={'#000'}
                        onChangeText={value => this.setState({tanggal: value})}
                    />
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
                <Text style={styles.tanggal}>Tanggal</Text>
                <Text style={styles.labelshift}>Shift</Text>
                  <View style={styles.shift}>
                    {/* <Picker
                      selectedValue={this.state.shiftSelected}
                      onValueChange={(ItemShift, indexValue) => this.setState({shiftSelected: ItemShift})}
                    >
                      {this.state.ShiftKary.map((item, index) => {
                        return (<Picker.Item label={item.nama_shift} value={item.id_shift} key={item.id_shift} />)
                      })}
                    </Picker> */}
                  </View>
                <View style={styles.group}>
                    <TouchableOpacity style={styles.btnSubmitJadwal}
                      onPress={() => this.StoreJadwal()}>
                    <Text style={styles.labelTambah}>Tambah</Text>
                    </TouchableOpacity>
                </View>

                {/* <AwesomeAlert
                    show={this.state.progresAlert}
                    showProgress={this.state.showProgres}
                    titleStyle={{fontSize: 20, color: this.state.colorAlert}}
                    title={this.state.messageAlert}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "#121212",
    fontSize: 25,
    marginTop: 77,
    alignSelf: "center"
  },
  labelTeknis: {
    color: "#121212",
    fontSize: 20,
    marginTop: 29,
    marginLeft: 29
  },
  namaTeknis: {
    color: "#121212",
    height: 50,
    width: 350,
    paddingLeft: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 29
  },
  labelTanggal: {
    color: "#121212",
    height: 50,
    width: 350,
    paddingLeft: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 5,
    marginTop: 66,
    marginLeft: 29
  },
  tanggal: {
    color: "#121212",
    fontSize: 20,
    width: 91,
    height: 25,
    marginTop: -90,
    marginLeft: 29
  },

  TglPlaceholder: {
    fontSize: 20,
    marginTop: 10
  },

  labelshift: {
    color: "#121212",
    fontSize: 20,
    width: 77,
    height: 25,
    marginTop: 90,
    marginLeft: 29
  },
  shift: {
    color: "#121212",
    height: 50,
    width: 350,
    paddingLeft: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 29
  },
  group: {
    width: 141,
    height: 40,
    marginTop: 50,
    marginLeft: 236
  },
  btnSubmitJadwal: {
    width: 141,
    height: 50,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 10
  },
  labelTambah: {
    color: "rgba(255,254,254,1)",
    fontSize: 20,
    marginTop: 12,
    marginLeft: 35
  }
});

export default TambahJadwal;
