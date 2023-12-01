import React from "react";
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Logo from "../../../assets/images/hinata.png";

const LogIn = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const { control, handleSubmit, watch } = useForm();
  const pass = watch("password");

  const onBackToLogin = () => {
    navigation.navigate("Login");
  };

  const onRegisterPressed = () => {
    navigation.navigate("Login");
  };

  const EMAIL_REGEX = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;

  return (
    <ImageBackground source={Logo} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>

        <Input
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: "Username is required",
            minLength: {
              value: 4,
              message: "Username should be at least 4 characters minimum",
            },
            maxLength: {
              value: 24,
              message: "Username should be only 24 characters long",
            },
          }}
        />

        <Input
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <Input
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <Input
          name="confirm-password"
          placeholder="Confirm Password"
          control={control}
          secureTextEntry
          rules={{
            validate: (value) => value === pass || "Passwords do not match",
          }}
        />

        <Button text="Register" type="PRIMARY" onPress={handleSubmit(onRegisterPressed)} />
        <Button text="Already have an account? Log in here." onPress={onBackToLogin} type="TERTIARY" />
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
  },
  title: {
    fontSize: 25,
    fontWeight: "300",
    color: "white",
  },
});

export default LogIn;