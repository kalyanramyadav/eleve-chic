import React from 'react'
import { Image, View,Text } from 'react-native'
import Imgsrc from '../assets/favicon.png'
export default function Images() {
    return (

        <View>
            <Image src={require(Imgsrc)} />
            <Text>Displaying image with ImgSrc</Text>
        </View>
    )
}
