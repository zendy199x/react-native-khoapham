import React, { PureComponent } from 'react'
import { Text, View , Dimensions , TouchableOpacity , ScrollView} from 'react-native'

export default class List extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            words : [
                {id : "a1" , en : "One" , vn : "Một" , isMemorized : true},
                {id : "a2" , en : "Two" , vn : "Hai" , isMemorized : false},
                {id : "a3" , en : "Three" , vn : "Ba" , isMemorized : false},
                {id : "a4" , en : "Four" , vn : "Bốn" , isMemorized : true},
                {id : "a5" , en : "Five" , vn : "Năm" , isMemorized : true},
                {id : "a6" , en : "Six" , vn : "Sáu" , isMemorized : true},
            ]
        }
    }
    render() {
        const DeviceHeight = Dimensions.get('window').height
        return (
            <ScrollView style={{flex : 1 }}>
                {this.state.words.map(word =>{
                     return (   
                        <View style={{ flexDirection : 'column' , height : DeviceHeight * 0.2 , margin : 10 , backgroundColor : 'gainsboro' , padding : 10 , borderRadius : 5}}>
                            <View style={{flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : 5}}>
                                <Text style={{fontSize : 30 , color :  'green' }}>{word.en}</Text>
                                <Text 
                                    style={{fontSize : 30 , color :  'red' }}>
                                        {word.isMemorized ? "----" : word.vn}
                                </Text>
                            </View>
                            <View style={{flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : 5}}>
                                    <TouchableOpacity
                                        style={{backgroundColor : word.isMemorized ? "green" : "red" , padding : 10 , borderRadius : 5}}
                                    >
                                        <Text style={{fontSize : 20 , color : 'white'}}>{word.isMemorized ? "Forgot" : "isMemorized"}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{backgroundColor : "orange" , padding : 10 , borderRadius : 5}}
                                    >
                                        <Text style={{fontSize : 25 , color :  'white' }}>Remove</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
                
            
        )
    }
}