import React from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/app/store";
import Toast from 'react-native-toast-message';


export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
      <Toast />
    </Provider>
  )

}