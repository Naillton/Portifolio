import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { listMobile } from "../../data/lists";

export default function BodyContentMobile() {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Mobile Projects
            </Text>
            <View style={styles.containerContent1}>
                <FlatList
                    data={listMobile}
                    keyExtractor={item => item.id}
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
                />
            </View>
        </View>
    )
}