import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '=']  

    const [ currentNumber, setCurrentNumber ] = useState("")
    const [ lastNumber, setLastNumber ] = useState("")

    function calculator(){
        const splitNumbers = currentNumber.split(' ')

        const fistNumber = parseFloat(splitNumbers[0])
        const lastNumber = parseFloat(splitNumbers[2])

        const operator = splitNumbers[1]

        switch(operator){
            case '+':
                setCurrentNumber((fistNumber + lastNumber).toString())
                return
            case '-': 
                setCurrentNumber((fistNumber - lastNumber).toString())
                return
            case '*':
                setCurrentNumber((fistNumber * lastNumber).toString())
                return
            case '/': 
                setCurrentNumber((fistNumber / lastNumber).toString())
                return
        }
    }

    function handleInput(resultPressed){
        console.log(resultPressed)
        if(resultPressed === '+' | resultPressed === "-" | resultPressed === "*" | resultPressed === "/" ){
            setCurrentNumber(currentNumber + " " + resultPressed + " ")
            return
        }
        switch(resultPressed){
            case 'DEL':
                setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
                return
            case 'AC':
                setLastNumber("")
                setCurrentNumber("")
                return
            case '=':
                setLastNumber(currentNumber + " = ")
                calculator()
                return
        }
        setCurrentNumber(currentNumber + resultPressed)
    }

    return (
        <View style={styles.main}>
            <View style={styles.results}>
                <Text style={styles.historyText}>{lastNumber}</Text>
                <Text style={styles.resultText}>{currentNumber}</Text>
            </View>
            
            <View style={styles.buttons}>
                {buttons.map((button) => 
                    button === '=' ?
                        <TouchableOpacity onPress={() => handleInput(button)} 
                            key={button} 
                            style={[styles.button, {backgroundColor: '#9DBC7B'}]}
                        >
                            <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => handleInput(button)} 
                            key={button} 
                            style={[styles.button, { backgroundColor: typeof(button) === 'number' ? '#fff' : '#ededed' }]}
                        >
                            <Text style={styles.textButton}>{button}</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        flexDirection: 'column',
    },
    results: {
        backgroundColor: "#f5f5f5",
        width: '100%',
        flex: .3,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    resultText: {
        color:  "#282F38",
        margin: 10,
        fontSize: 40
    },
    historyText:{
        color:  "#7c7c7c",
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
    },
    themeButton: {
        alignSelf: 'flex-start',
        bottom: 120,
        margin: 10,
        backgroundColor: "#e5e5e5",
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: .7,
    },
    button: {
        borderColor:  "#e5e5e5",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 90, 
        minHeight: 90,
        flex: 2,
    },
    textButton: {
        color: "#7c7c7c",
        fontSize: 20,
    }, 
});