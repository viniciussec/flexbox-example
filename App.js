import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          gap: 8,
        }}
      >
        <View
          style={{
            flex: 3,
            width: "100%",
            backgroundColor: "#8876e0",
          }}
        ></View>
        <View style={{ flex: 3, backgroundColor: "#00bcfa" }}></View>
        <View style={{ flex: 6, backgroundColor: "#007ef8" }}></View>
      </View>
      <View
        style={{
          flex: 1,
          gap: 8,
        }}
      >
        <View
          style={{
            flex: 3,
            width: "100%",
            backgroundColor: "#79ccfb",
          }}
        ></View>
        <View
          style={{
            flex: 8,
            backgroundColor: "#00bcfa",
            border: "3px solid black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              transform: [{ rotate: "270deg" }],
              fontSize: 30,
              fontWeight: 900,
              letterSpacing: 5,
            }}
          >
            FLEXBOX
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#573fc0" }}>
          <Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#453f3f",
    gap: 8,
  },
});
