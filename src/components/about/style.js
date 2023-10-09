import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerMobileFirst: {
        width: "100%",
        marginTop: 20,
    },
    containerMobile: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#A3C9E2",
        borderColor: "#A3C9E2",
        borderRadius: 30,
        marginTop: 40
    },

    imageContainerMobile: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 20,
    },

    titleText: {
        padding: 10,
        textTransform: "uppercase",
        fontSize: 24,
        fontWeight: "bold"
    },

    containerContent: {
        width: "auto",
        padding: 40
    },

    containerText: {
        fontSize: 18,
        textAlign: "justify",
        letterSpacing: 0.5,
    },

    container: {
        width: "100%",
        marginTop: 20,
        alignItems: "center"
    },

    container1: {
        width: 900,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#A3C9E2",
        borderColor: "#A3C9E2",
        marginTop: 20,
        borderRadius: 30,
        padding: 20,
        marginHorizontal: 40,
    },

    containerContentWeb: {
        width: 420,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    imageWeb: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginRight: 40
    },

    bracket: {
        width: 100,
        height: 500
    }
})