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
            
            <ScrollView>
            <Card>
                <Card.Cover source={require('../assets/app_images/sick.png')}/>      
                <Card.Title title="NIGERIA,NIG" subtitle="" left={LeftContent} />

                <Card.Content>
                    <Text variant="titleLarge">HELP THE SICK AND CREATE MORE AWARENESS</Text>
                    <Text variant="bodyMedium">support the sick </Text>
                </Card.Content>

                <View>
                    <Text style={styles.first}>__________________________________________________</Text>
                    <Text style={styles.second}> $50 raised - Donation</Text>
                </View>
                

                <Card.Actions>
                <Button>Donate</Button>
                <Button>Cancel</Button>
                </Card.Actions>
                
            </Card>
            </ScrollView>
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

