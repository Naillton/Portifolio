import React from "react";
import { View } from "react-native";

import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import BodyContentWeb from "./components/bodyWeb";
import BodyContentMobile from "./components/bodyMobile";
import { aboutId, contactId, projectId } from "./data/lists";

export default function Screen() {
    return(
        <View>
            <Header />
            <About id='about' />
            <BodyContentWeb id='project' />
            <BodyContentMobile />
            <Contact id='contact' />
        </View>
    )
}