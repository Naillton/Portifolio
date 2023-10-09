import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerMobile: {
        width: "100%",
        height: "auto",
        padding: 40,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#A3C9E2",
        borderTopWidth: 1,
        borderColor: "#A3C9E2",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        marginTop: 50,
    },

    contentView: {
        width: "auto",
        flexDirection: "row",
        margin: 10,
    },

    textMobileTitle: {
        fontSize: 22,
        fontWeight: "800",
        textTransform: "uppercase",
        color: "#000000"
    },

    textMobileContent: {
        fontSize: 20,
        fontWeight: "400",
        paddingHorizontal: 6
    }
})