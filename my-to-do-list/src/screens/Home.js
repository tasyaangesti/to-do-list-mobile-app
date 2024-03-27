import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { CalendarDaysIcon, MapPinIcon } from "react-native-heroicons/solid";

export default function Home() {
  const [search, setSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = (loc) => {
    console.log("location,", loc);
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../../assets/bg.png")}
        style={{ position: "absolute", height: "100%", width: "100%" }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* search */}
        <View style={{ height: "7%", marginHorizontal: 20 }}>
          <View style={search ? styles.colSearch : "transparent"}>
            {search ? (
              <TextInput
                placeholder="Search for a city"
                placeholderTextColor="lightgray"
                className="pl-6 h-10 pb-1 flex-1 text-base"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => setSearch(!search)}
              style={styles.iconSearch}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size={25} color="white" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && search ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  className={`flex-row items-center border-0 p-3 px-4 mb-1 ${
                    index + 1 !== locations.length
                      ? "border-b-2 border-b-gray-400"
                      : ""
                  }`}
                >
                  <MapPinIcon size={20} color="gray" />
                  <Text style={styles.resultOfSearch}>
                    London, United Kingdom
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}
        </View>
        {/* forecast */}
        <View className="mx-4 justify-around flex-1 mb-2">
          {/* location */}
          <Text className="text-white text-center text-2xl font-bold">
            London,
            <Text className="text-lg font-semibold text-gray-300">
              United Kingdom
            </Text>
          </Text>
          {/* weather Image */}
          <View className="flex-row justify-center">
            <Image
              source={require("../../assets/cloudy.png")}
              className="w-64 h-64"
            />
          </View>
          {/* degree */}
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              23&#176;
            </Text>
            <Text className="text-center text-white text-xl tracking-widest">
              Partly Cloudy
            </Text>
          </View>
          {/* other stats */}
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../../assets/wind.png")}
                className="h-10 w-10"
              />
              <Text className="text-white font-semibold text-base">22km</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../../assets/drop.png")}
                className="h-10 w-10"
              />
              <Text className="text-white font-semibold text-base">22%</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../../assets/sun.png")}
                className="h-10 w-10"
              />
              <Text className="text-white font-semibold text-base">
                6:05 AM
              </Text>
            </View>
          </View>
        </View>

        {/* forecast next day */}
        <View className="mb-2 space-y-3">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size={22} color="white" />
            <Text className="text-white text-base"> Daily Forecast</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 scroll-py-1 mr-4"
              style={styles.forecastNextDay}
            >
              <Image
                source={require("../../assets/heavy-rain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl font-semibold">19&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 scroll-py-1 mr-4"
              style={styles.forecastNextDay}
            >
              <Image
                source={require("../../assets/heavy-rain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Tuesday</Text>
              <Text className="text-white text-xl font-semibold">19&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 scroll-py-1 mr-4"
              style={styles.forecastNextDay}
            >
              <Image
                source={require("../../assets/heavy-rain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Wednesday</Text>
              <Text className="text-white text-xl font-semibold">19&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 scroll-py-1 mr-4"
              style={styles.forecastNextDay}
            >
              <Image
                source={require("../../assets/heavy-rain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Thursday</Text>
              <Text className="text-white text-xl font-semibold">19&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 scroll-py-1 mr-4"
              style={styles.forecastNextDay}
            >
              <Image
                source={require("../../assets/heavy-rain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Friday</Text>
              <Text className="text-white text-xl font-semibold">19&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 scroll-py-1 mr-4"
              style={styles.forecastNextDay}
            >
              <Image
                source={require("../../assets/heavy-rain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Saturday</Text>
              <Text className="text-white text-xl font-semibold">19&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 scroll-py-1 mr-4"
              style={styles.forecastNextDay}
            >
              <Image
                source={require("../../assets/heavy-rain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Sunday</Text>
              <Text className="text-white text-xl font-semibold">19&#176;</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  colSearch: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 40,
    // paddingHorizontal: 1,
  },
  iconSearch: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  resultOfSearch: {
    color: "black",
    fontSize: 16,
    marginLeft: 10,
  },
  forecastNextDay: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
});
