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
import { CustomButton } from '../components'

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
                    resizeMode="cover"
                >

                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 200,
                            justifyContent: 'flex-end',
                            paddingHorizontal: SIZES.padding
                        }}
                    >

                        <Text
                            style={{
                                width:"80%",
                                color: COLORS.white,
                                ...FONTS.largeTitle,
                                lineHeight:45
                            }}
                        >
                            Orégano de Pizza
                        </Text>

                    </LinearGradient>

                </ImageBackground>
            </View>
        )
    }

    function renderDetails(){
        return(
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Description  */}
                    <Text
                        style={{
                            marginTop: SIZES.radius,
                            width: "70%",
                            color: COLORS.gray,
                            ...FONTS.body3
                        }}
                    >
                        Viva uma esperiência gastronômica em sabor e serviço.
                    </Text>
                {/* Buttons  */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                    {/* Button 1 */}
                        <CustomButton
                            buttonText='Cardápio'
                            buttonContainerStyle={{
                                paddingVertical: 19,
                                borderRadius: 20
                            }}
                            colors={[COLORS.darkGreen, COLORS. lime]}
                            onPress={() => navigation.replace('Home')}
                        />

                    {/* Button 2 */}
                        <CustomButton
                            buttonText='Unidades'
                            buttonContainerStyle={{
                                marginTop: SIZES.radius,
                                paddingVertical: 18,
                                borderRadius: 20,
                                borderColor: COLORS.darkLime,
                                borderWidth: 1
                            }}
                            colors={[]}
                            onPress={() => navigation.replace('Home')}
                        />

                </View>
                    
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
            {renderDetails()}

        </View>
    )
}

export default Login;