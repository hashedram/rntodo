import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export interface Props {}

export interface State {
    open: boolean;
}

class Wheel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            open: false
        };
    }

    onOpen = () => this.setState({ open: true });
    onClose = () => this.setState({ open: false });

    render() {
        return (
            <TouchableOpacity
                style={styles.root}
                onPressIn={() => {
                    console.log('clicked');
                }}
            >
                <View style={styles.test}></View>
                <View style={styles.bar1}></View>
                <View style={styles.bar2}></View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 35
    },
    test: {
        width: 60,
        height: 60,
        borderRightColor: "#bc7db7",
        borderRightWidth: 5,
        borderLeftColor: "#edb62d",
        borderLeftWidth: 5,
        borderRadius: 60 / 2,
        borderTopColor: "#209a49",
        borderTopWidth: 5,
        borderBottomColor: "#3075d6",
        borderBottomWidth: 5,
        transform: [{ rotate: "45deg" }]
    },
    bar1: {
        position: "absolute",
        width: 5,
        height: 60,
        backgroundColor: "#fff",
        left: 28
    },
    bar2: {
        position: "absolute",
        width: 60,
        height: 5,
        backgroundColor: "#fff",
        bottom: 28
    }
});

export default Wheel;
