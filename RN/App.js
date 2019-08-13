import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Word from './components/Word';
import HandleArray from './components/HandleArray';
import Box from './components/Box';

 const words = [
  {id : "a1" , en : "One" , vn : "Một" , isMemorized : true},
  {id : "a2" , en : "Two" , vn : "Hai" , isMemorized : false},
  {id : "a3" , en : "Three" , vn : "Ba" , isMemorized : false},
  {id : "a4" , en : "Four" , vn : "Bốn" , isMemorized : true},
]

export default class App extends Component {
  render() {
    return (
        <View style={{flex : 1 }}>
            {words.map(function(word) {
                return <Word 
                          key={word.id} 
                          en={word.en} 
                          vn={word.vn} 
                          isMemorized={word.isMemorized}/>
            })}
        </View>
    );
  }
}
// Auto close tag (Jun Han)
// Auto Rename tag (Jun Han)
// ES7 React/Redux (dsznajder)
// npm Intellisense (Christian Kohler)
// Path Intellisense(Christian)
// vscode-icons (vscode icons team)
// auto import (steoat)