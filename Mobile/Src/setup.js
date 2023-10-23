import React, { useCallback } from 'react';
import { View, LogBox } from 'react-native';
import { useFonts } from "expo-font";
import RootNavigation from './Navigation/RootNavigation';

LogBox.ignoreAllLogs()

export default function Root() {
  const [isLoaded] = useFonts({

    "ApercuMonoProBold": require("../assets/fonts/ApercuMonoProBold.ttf"),
    "ApercuMonoProLight": require("../assets/fonts/ApercuMonoProLight.ttf"),
    "ApercuMonoProMedium": require("../assets/fonts/ApercuMonoProMedium.ttf"),
    "ApercuMonoProRegular": require("../assets/fonts/ApercuMonoProRegular.ttf"),
    "BebasNeue-Regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }


  return (
    <View style={{ flex: 1 }}>
      <RootNavigation />
    </View>
  );
}
