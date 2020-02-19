import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface Props {}
export interface State {}

class GroupCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return <View style={styles.root}></View>;
    }
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'flex-start',
        width: 100,
        height: 150,
        backgroundColor: '#f0f'
    }
});

export default GroupCard;
