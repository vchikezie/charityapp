import { useContext, } from "react";
import { AppContext } from "../sittings/globalVariables";
import { StyleSheet,View,Image,ScrollView,TouchableOpacity } from "react-native";
import { SafeArea } from "../components/SafeArea";
import { Theme } from "../utils/Theme";
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon{...props} icon="folder"/>
export const FundRaiser = () => (
        <SafeArea>
            
        </SafeArea>    
)

const styles=StyleSheet.create({
    first:{
        paddingLeft:15
    },
    second:{
        paddingLeft:13
    }
})

