import React, {useEffect, useState, useContext} from "react"
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    FlatList,
    Linking,
    TouchableOpacity
} from "react-native"


export default function Contador(){
    const amigos = [
        {titulo: "Demre", link: "https://demre.cl/"},
        {titulo: "Puntaje Nacional", link: "https://www.puntajenacional.cl/landing"},
        {titulo: "Mauro Quintana", link: "https://www.youtube.com/channel/UCbdoqtgHjDZwYASjQJlxB4A"},
        {titulo: "Ensayos Mat", link: "https://mauroquintana.cl/ensayos-semanales/"},
    ]
  return(
    <FlatList
        data = {amigos}
        showsVerticalScrollIndicator = {false}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => {
            return(
                <TouchableOpacity onPress = {() =>Linking.openURL(item.link)}>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.textStyle}>{item.titulo}</Text>
                    </View>
                </TouchableOpacity>
            )
        }}
    />
  )
}

const styles = StyleSheet.create({
    textContainer:{
        backgroundColor: "#A1A1A1",
        marginVertical: 5,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:50,
        height:70,
        width:"100%",
        borderRadius:15
    },
    textStyle:{
        color: "#353535",
        fontSize: 20,
        fontWeight: "bold"
    }
})