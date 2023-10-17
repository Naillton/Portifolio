import React from "react";
import { View, Text } from "react-native";
import * as Linking from 'expo-linking';
import { setStringAsync } from 'expo-clipboard';
import { useMediaQuery } from "react-responsive";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { styles } from "./styles"
import { contactId } from "../../data/lists";

export default function Contact(props) {

    const isMobile = useMediaQuery({
        query: '(max-width: 800px)'
    });

    const link = (url) => {
        Linking.openURL(url)
    }

    const copied = async () => {
        await setStringAsync('nailton_junior@protonmail.com');
    }

    if (isMobile) {
        return(
            <View style={styles.containerMobile} id={props.id}>
                <Text style={styles.textMobileTitle}>
                    Contatos
                </Text>
                <View style={styles.contentView}>
                    <FontAwesome.Button onPress={() => link('https://github.com/Naillton')} name="github" size={24} backgroundColor="#08c874" style={styles.textMobileContent}>
                        <Text style={styles.textMobileContent}> Naillton Junior </Text>
                    </FontAwesome.Button>
                </View>
                <View style={styles.contentView}>
                    <FontAwesome.Button onPress={() => link('https://www.linkedin.com/in/nailtonjr/')} name="linkedin" size={24} style={styles.textMobileContent}>
                        <Text style={styles.textMobileContent}> Naillton Junior </Text>
                    </FontAwesome.Button>
                </View>
                <View style={styles.contentView}>
                    <FontAwesome.Button onPress={() => link('https://w.app/9O7MSN')} name="whatsapp" size={24} backgroundColor="#229954" style={styles.textMobileContent}>
                        <Text style={styles.textMobileContent}> (81) 98226-2060 </Text>
                    </FontAwesome.Button>
                </View>
                <View style={styles.contentView}>
                    <FontAwesome.Button onPress={() => copied()} name="mail-forward" size={24} backgroundColor="#133ca6" style={styles.textMobileContent}>
                        <Text style={styles.textMobileContent}> nailton_junior@protonmail.com </Text>
                    </FontAwesome.Button>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.containerMobile} id={props.id}>
            <Text style={styles.textMobileTitle}>
                Contatos
            </Text>
            <View style={styles.contentView}>
                <FontAwesome.Button onPress={() => link('https://github.com/Naillton')} name="github" size={24} backgroundColor="#08c874" style={styles.textMobileContent}>
                    <Text style={styles.textMobileContent}> Naillton Junior </Text>
                </FontAwesome.Button>
            </View>
            <View style={styles.contentView}>
                <FontAwesome.Button onPress={() => link('https://www.linkedin.com/in/nailtonjr/')} name="linkedin" size={24} style={styles.textMobileContent}>
                    <Text style={styles.textMobileContent}> Naillton Junior </Text>
                </FontAwesome.Button>
            </View>
            <View style={styles.contentView}>
                <FontAwesome.Button onPress={() => link('https://w.app/9O7MSN')} name="whatsapp" size={24} backgroundColor="#229954" style={styles.textMobileContent}>
                    <Text style={styles.textMobileContent}> (81) 98226-2060 </Text>
                </FontAwesome.Button>
            </View>
            <View style={styles.contentView}>
                <FontAwesome.Button onPress={() => copied()} name="mail-forward" size={24} backgroundColor="#133ca6" style={styles.textMobileContent}>
                    <Text style={styles.textMobileContent}> nailton_junior@protonmail.com </Text>
                </FontAwesome.Button>
            </View>
        </View>
    )

}