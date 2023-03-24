import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Cover(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/logo-bjl-2-removebg-preview.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.loremIpsum}>PT. Berkah Jaya Lestarindo</Text>
        </ImageBackground>
        <Svg viewBox="0 0 89.24 93.24" style={styles.ellipse}>
          <Ellipse
            fill="rgba(245,245,245,1)"
            cx={45}
            cy={47}
            rx={45}
            ry={47}
          ></Ellipse>
        </Svg>
        <View style={styles.group}>
          <View style={styles.group2}>
            <View style={styles.group3}>
              <Image
                source={require("../assets/logo-bjl-2-removebg-preview.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </View>
          </View>
        </View>
        <Text style={styles.absensi}>ABSENSI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(32,83,117,1)"
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 986,
    width: 724
  },
  image_imageStyle: {
    opacity: 1 , 
    backgroundColor: "rgba(32,83,117,1)"
  },
  loremIpsum: {
    fontFamily: "mukta-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 400,
    marginLeft: 170
  },
  ellipse: {
    left: 56,
    width: 100,
    height: 100,
    position: "absolute",
    top: 332
  },
  group: {
    top: 333,
    left: 57,
    width: 95,
    height: 91,
    position: "absolute"
  },
  image2: {
    height: 97,
    width: 95,
  },
  absensi: {
    top: 350,
    left: 171,
    position: "absolute",
    fontFamily: "secular-one-regular",
    color: "rgba(246,107,14,1)",
    fontSize: 40
  },
  imageStack: {
    width: 724,
    height: 986,
    marginTop: 0,
    marginLeft: -20
  }
});

export default Cover;
