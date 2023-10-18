import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import { A } from "@expo/html-elements";
import { useMediaQuery } from "react-responsive";
import { styles } from "./style";

const img = require("../../../assets/eu.jpg");
const nimg = require("../../../assets/N.png")

export default function Header () {

    const isMobile = useMediaQuery({
        query: '(max-width: 800px)'
    });

    const aboutTouch = () => {
        document.getElementById('about')
        console.log(document.getElementById('about'))
    }

    const projectTouch = () => {
        document.getElementById('project')
        console.log(document.getElementById('project'))
    }

    const contactTouch = () => {
        document.getElementById('contact')
        console.log(document.getElementById('contact'))
    }

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
                <A href="#about">
                    <TouchableOpacity style={styles.btnWeb} onPress={() => aboutTouch()}>
                            <Text style={styles.textBtn}>
                                Sobre Mim
                            </Text>
                    </TouchableOpacity>
                </A>
                <A href="#project">
                    <TouchableOpacity style={styles.btnWeb} onPress={() => projectTouch()}>
                            <Text style={styles.textBtn}>
                                Projetos
                            </Text>
                    </TouchableOpacity>
                </A>
                <A href="#contact">
                    <TouchableOpacity style={styles.btnWeb} onPress={() => contactTouch()}>
                        <Text style={styles.textBtn}>
                            Contatos
                        </Text>
                    </TouchableOpacity>
                </A>
            </View>
        </View>
    );
}