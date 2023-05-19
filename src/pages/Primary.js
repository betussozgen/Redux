import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

function Primary() {
    const [text, setText] = useState('');

    const handleAdd = () => {
        console.log(text);
    };
    return (
        <View>
            <Text style={{ fontSize: 30 }}>PRIMARY</Text>
            <View style={{
                borderWidth: 1,
                margin: 10,
                padding: 5,
                borderColor: '#e0e0e0'
            }}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder='İsminizi Giriniz...' />
            </View>
            <Button
                title='Ekle'
                onPress={handleAdd} />
        </View>
    )

}

export default Primary;

