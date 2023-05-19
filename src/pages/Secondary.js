import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

function Secondary() {
    //global state'lerim için selektor kullanıyorum.
    const list = useSelector(s => s.nameList)
    const myUserName = useSelector(s => s.userName)
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Secondary</Text>
            <Text style={{ fontSize: 30 }}>UserName: {myUserName}</Text>
            <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={list}
                renderItem={({ item }) => <Text>{item}</Text>} />
        </View>
    )

}

export default Secondary;

