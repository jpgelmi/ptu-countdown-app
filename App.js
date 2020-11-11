import React, {useEffect, useState, useContext} from "react"
import {View,Text, SafeAreaView, StatusBar,Linking, StyleSheet, ScrollView, TouchableOpacity} from "react-native"
import Contador from "./components/Contador"
import List from "./components/List"


export default function App(){
    
  return(
    <SafeAreaView>
      <ScrollView>
        <View style = {{flex:1}}>
          <Text style = {styles.text}>PTU Countdown</Text>
          <View style = {styles.container}>
              <Contador/>
              <Text style = {[styles.text, {paddingBottom:30}]}>Material recomendado</Text>
              <List/>
          </View>
          <View style = {styles.footer}>
            <TouchableOpacity
              onPress = {() =>Linking.openURL("https://www.instagram.com/jpgelmi/")}
            >
              <Text style = {styles.footerText}>Juan Pablo Gelmi /@jpgelmi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "flex-end",
    //backgroundColor: "red",
    paddingTop: 30,
  },
  text:{
    paddingTop:30,
    paddingHorizontal: 30,
    fontSize:20,
    fontWeight:"bold"
  },
  footer:{
    //backgroundColor: "#C9C9C9",
    paddingVertical: 10,
    marginTop: 30,
    alignItems: "center"
    //bottom: 0,
    //position: "absolute"

  },
  footerText:{
    color: "#C9C9C9",
    fontWeight: "bold"
  }
})