import React from "react";
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Buttons/Button";
import Logo from "../../../assets/images/img.png";

const LandingPage = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const onGetStarted = () => {
    // Navigate to your desired screen when the user clicks "Get Started"
    navigation.navigate("Login");
  };

  return (
    <ImageBackground source={Logo} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Discover the World of Anime</Text>
        <Button text="Enter Dimension" type="PRIMARY" onPress={onGetStarted} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
});

export default LandingPage; // Updated export statement
