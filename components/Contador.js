import React from "react"
import {
    View,
    StyleSheet
} from "react-native"

import CountDown from 'react-native-countdown-component';

export default function Contador(){
    
    var seconds = new Date().getTime() / 1000;
    console.log(seconds)

    const deltaTiempo = (1609718400 - seconds + 46720) 

    const deltaTiempo2 = deltaTiempo

  return(
    <View style = {styles.container}>
        <CountDown
            size={30}
            until={deltaTiempo2} 
            //onFinish={() => alert('Finished')}
            digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
            digitTxtStyle={{color: '#1CC625'}}
            timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
            separatorStyle={{color: '#1CC625'}}
            timeToShow={["D",'H', 'M', 'S']}
            timeLabels={{d: "días",h: "horas",m: "minutos", s: "segundos"}}
            timeLabelStyle = {{color: "grey"}}
            showSeparator
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:20
    }
})