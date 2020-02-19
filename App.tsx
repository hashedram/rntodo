import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Wheel from "./src/components/wheel/Wheel";
import GroupCard from "./src/components/card/GroupCard";

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <GroupCard />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
