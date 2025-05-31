import React from "react";
import { View, Image, Text } from "react-native";
import { useMediaQuery } from "react-responsive";
import { styles } from "./style";

const img = require("../../../assets/eu2.jpeg");
const brakcet = require("../../../assets/bracket.png")

export default function About(props) {

    const isMobile = useMediaQuery({
        query: '(max-width: 800px)'
    });

    if (isMobile) {
        return(
            <View style={styles.containerMobileFirst} id={props.id}>
                <View style={styles.containerMobile}>
                <Image
                    style={styles.imageContainerMobile}
                    source={img}
                />
                <Text style={styles.titleText}>Sobre Mim</Text>
                <View style={styles.containerContent}>
                    <Text style={styles.containerText}>
                        Olá, meu nome é Nailton!

Sou estudante de Análise e Desenvolvimento de Sistemas com paixão por tecnologia, hacking ético e desenvolvimento de software. Tenho experiência em linguagens como C#, Java, Kotlin, Spring, ASP.NET, Python, React, React Native, HTML, CSS e JavaScript. Estou em busca de uma oportunidade para aplicar e expandir meus conhecimentos.
                    </Text>
                </View>
            </View>
            </View>
        )
    }

    return(
        <View style={styles.container} id={props.id}>
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
                            Olá, meu nome é Nailton!

Sou estudante de Análise e Desenvolvimento de Sistemas com paixão por tecnologia, hacking ético e desenvolvimento de software. Tenho experiência em linguagens como C#, Java, Kotlin, Spring, ASP.NET, Python, React, React Native, HTML, CSS e JavaScript. Estou em busca de uma oportunidade para aplicar e expandir meus conhecimentos.
                    </Text>
                </View>
            </View>
        </View>
    )
}
