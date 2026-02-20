import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";


export default function RootNavigator () {
    const isloggedIn = true;
    return(
        <NavigationContainer >
            {isloggedIn ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}


