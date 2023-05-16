import { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { SafeArea } from '../components/SafeArea';
import { TextInput } from 'react-native-paper';

export function About () {
    const [text, setText] = React.useState('');
    return (
        <SafeArea>
            <TextInput
            label='email'
            value={text}
            mode='outlined'
            onChangeText={text => setText(text)}/>
        </SafeArea>

    )
}