import React from "react";
import { View } from "react-native";

import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";

export default function Screen() {
    return(
        <View>
            <Header />
            <About />
            <Contact />
        </View>
    )
}