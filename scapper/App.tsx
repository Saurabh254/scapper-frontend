import React, { useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import Header from './components/header/Header';
import RootLayout from './components/root/Root';

const App = () => {


  return (
    <SafeAreaView>
      <Header />
      <RootLayout />
    </SafeAreaView>
  )
}


export default App;