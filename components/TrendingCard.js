import React from 'react';
import { 
    View,
    TouchableOpacity,
    Image,
    Text,
    Platform,
    StyleSheet
 } from 'react-native'

 import { SIZES, COLORS, FONTS, icons } from '../constants';

 import { BlurView } from '@react-native-community/blur';

 const RecipeCardInfo = ({recipeItem}) => {
     return (
          <BlurView
            blurType='dark'
            style={styles.recipeCardContainer}
          >

          </BlurView>
     )
 }

 const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
     return(
        <TouchableOpacity
            style={{
                height: 350,
                width: 250,
                marginTop: SIZES.radius,
                marginRight: 20,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Background Image */}
            <Image 
                source={recipeItem.image}
                resizeMode='cover'
                style={{
                    width: 250,
                    height: 350,
                    borderRadius: SIZES.radius
                }}
            />

            {/* Category */}
            <View
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 15,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                    backgroundColor: COLORS.transparentGray,
                    borderRadius: SIZES.radius
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h4
                    }}
                >
                    {recipeItem.category}
                </Text>
            </View>

            {/* Card Info Blur */}
            <RecipeCardInfo>
                recipeItem={recipeItem}
            </RecipeCardInfo>

        </TouchableOpacity>
     )
 }

 const styles = StyleSheet.create({
    recipeCardContainer:{
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    }
 })

 export default TrendingCard;