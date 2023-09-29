import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerMobile: {
        width: "100%",
        height: 360,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#A3C9E2",
        borderBottomWidth: 1,
        borderColor: "#A3C9E2",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },

    textMobile: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 30,
    },

    imageMobile: {
        width: 200,
        height: 200,
        borderRadius: 100
    },

    containerWeb: {
        width: "100%",
        height: 110,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#A3C9E2",
        borderBottomWidth: 1,
        borderColor: "#A3C9E2",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        justifyContent: "space-around"
    },

    imageWeb: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },

    textWeb: {
        fontSize: 22,
        fontWeight: "bold",
    },

    caintainerBtnWeb: {
        flexDirection: "row",
    },

    btnWeb: {
        marginHorizontal: 14,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#a3aac2",
        borderColor: "#a3aac2"
    },

    textBtn: {
        fontWeight: "400",
        textTransform: "uppercase"
    }
})