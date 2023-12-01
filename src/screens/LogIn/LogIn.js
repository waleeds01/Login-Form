import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Logo from "../../../assets/images/boa.png";

const LogIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onLoginPress = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password");
  };

  const onDontHaveAccountPressed = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground source={Logo} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Anime World</Text>

        <Input
          name="username"
          placeholder="Enter your username or name"
          control={control}
          rules={{ required: "Username is required!" }}
        />
        <Input
          name="password"
          placeholder="Enter your password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required!",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />

        <Button text="Log In" type="PRIMARY" onPress={handleSubmit(onLoginPress)} />
        <Button text="Forgot Password?" type="TERTIARY" onPress={onForgotPasswordPressed} />
        <Button
          text="Don't have an account? Register here."
          onPress={onDontHaveAccountPressed}
          type="TERTIARY"
        />
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
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#61dafb", // Tech blue color
    marginBottom: 20,
  },
});

export default LogIn;