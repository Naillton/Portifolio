import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import { useMediaQuery } from "react-responsive";
import { styles } from "./style";

const img = require("../../../assets/eu.jpg");
const nimg = require("../../../assets/N.png")

export default function Header () {

    const isMobile = useMediaQuery({
        query: '(max-width: 800px)'
    });

    if (isMobile) {
        return(
            <View style={styles.containerMobile}>
                <Image
                    style={styles.imageMobile}
                    source={img}
                />
                <Text style={styles.textMobile}>
                    Nailton Jr.
                </Text>
            </View>
        );
    }
    return(
        <View style={styles.containerWeb}>
            <Image
                style={styles.imageWeb}
                source={nimg}
            />
            <Text style={styles.textWeb}>
                Nailton Jr.
            </Text>
            <View style={styles.caintainerBtnWeb}>
                <TouchableOpacity style={styles.btnWeb}>
                    <Text style={styles.textBtn}>
                        Sobre Mim
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnWeb}>
                    <Text style={styles.textBtn}>
                        Projetos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnWeb}>
                    <Text style={styles.textBtn}>
                        Contatos
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}