import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 40,
        backgroundColor: "#a3aac2",
        alignItems: "center",
        justifyContent: "flex-start"
    },

    titleText: {
        padding: 10,
        textTransform: "uppercase",
        fontSize: 24,
        fontWeight: "bold"
    },

    containerContent1: {
        flexDirection: "row",
        width: "100%",
        marginVertical: 20,
        backgroundColor: "#A3C9E2",
        borderColor: "#A3C9E2",
        borderWidth: 1,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },


    containerContent: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#A3C9E2",
        marginVertical: 20,
        borderColor: "#A3C9E2",
        borderWidth: 1,
        borderRadius: 30,
        alignItems: "center"
    },

    containerContentWeb: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#A3C9E2",
        marginVertical: 20,
        borderColor: "#A3C9E2",
        borderWidth: 1,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },

    content: {
        flexDirection: "Column",
        padding: 20
    },

    titleContentText: {
        padding: 10,
        textTransform: "uppercase",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },

    imageContent: {
        width: 220,
        height: 220,
        borderRadius: 100,
        padding: 20,
    }
})