import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

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
                  <Text style={styles.resultOfSearch}>London, United Kingdom</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}
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
});
