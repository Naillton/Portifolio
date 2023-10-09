import React from "react";
import { View, Image, Text } from "react-native";
import { useMediaQuery } from "react-responsive";
import { styles } from "./style";

const img = require("../../../assets/eu2.jpeg");
const brakcet = require("../../../assets/bracket.png")

export default function About() {

    const isMobile = useMediaQuery({
        query: '(max-width: 800px)'
    });

    if (isMobile) {
        return(
            <View style={styles.containerMobileFirst}>
                <View style={styles.containerMobile}>
                <Image
                    style={styles.imageContainerMobile}
                    source={img}
                />
                <Text style={styles.titleText}>Sobre Mim</Text>
                <View style={styles.containerContent}>
                    <Text style={styles.containerText}>
                        Olá seja bem vindo!, me chamo Nailton tenho 24 anos e sou desenvolvedor,
                        gosto muito de jogos - principalmente rpg - e sou apaixonado por programação e hacking,
                        tenho muito interesse em desenvolver minhas habilidades ao máximo e no processo aprender coisas novas,
                        em meus projetos uso diferentes linguagens de programação, gosto muito de programar para mobile com kotlin
                        e react native e spring para backend. Olhe os meus projetos abaixo e entre em contato comigo, as informações
                        estão na parte de contato logo abaixo dos projetos.
                    </Text>
                </View>
            </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image
                    style={styles.imageWeb}
                    source={img}
                />
                <Image
                    style={styles.bracket}
                    source={brakcet}
                />
                <View style={styles.containerContentWeb}>
                    <Text style={styles.titleText}>Sobre Mim</Text>
                    <Text style={styles.containerText}>
                        Olá seja bem vindo!, me chamo Nailton tenho 24 anos e sou desenvolvedor,
                        gosto muito de jogos - principalmente rpg - e sou apaixonado por programação e hacking,
                        tenho muito interesse em desenvolver minhas habilidades ao máximo e no processo aprender coisas novas,
                        em meus projetos uso diferentes linguagens de programação, gosto muito de programar para mobile com kotlin
                        e react native e spring para backend. Olhe os meus projetos abaixo e entre em contato comigo, as informações
                        estão na parte de contato logo abaixo dos projetos.
                    </Text>
                </View>
            </View>
        </View>
    )
}