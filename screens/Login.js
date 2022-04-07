import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
     StatusBar
} from 'react-native';

import LinearGradient   from 'react-native-linear-gradient'

import { images, COLORS, SIZES, FONTS } from '../constants'

const Login = ({ navigation }) => {

    function renderHeader() {
        return(
            <View
                style={{
                    height: SIZES.height > 700 ? "65%" : "60%"
                }}
            >
                <ImageBackground
                    source={images.loginBackground}
                    style={{
                        flex: 1,
                        justifyContent: "flex-end" 
                    }}
                >

                </ImageBackground>
            </View>
        )
    }

    return (
        <View
        style={{
             flex: 1,
             backgroundColor: COLORS.black
        }}
        >

        <StatusBar barStyle='light-content' />
            {/* Header */}
            {renderHeader()}
            {/* Details */}

        </View>
    )
}

export default Login;