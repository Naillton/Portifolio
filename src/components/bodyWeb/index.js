import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { listWeb } from "../../data/lists";

export default function BodyContentWeb(props) {
    return(
        <View style={styles.container} id={props.id}>
            <Text style={styles.titleText}>
                Web Projects
            </Text>
            <View style={styles.containerContent1}>
                <FlatList
                    data={listWeb}
                    horizontal={true}
                    contentContainerStyle={styles.containerContent}
                    renderItem={
                        (item) => (
                            <View style={styles.content}>
                                <Text style={styles.titleContentText}>{item.item.title}</Text>
                                <Image
                                    source={item.item.image}
                                    style={styles.imageContent}
                                />
                            </View>
                        ) 
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}