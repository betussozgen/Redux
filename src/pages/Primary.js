import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

//reducewr'ları tektiklemem lazım. Reducerlara erişim sağlıyorum.
import { useDispatch } from 'react-redux';

function Primary() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({ type: 'ADD_NAME', payload: { name: text } })
    };

    const handleClean = () => {
        dispatch({ type: 'CLEAN_LIST' })
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
            <Button
                title='Temizle'
                onPress={handleClean} />

        </View>
    )

}

export default Primary;

