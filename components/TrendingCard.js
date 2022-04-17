import React from 'react';
import { 
    View,
    TouchableOpacity,
    Image,
    Text,
    Platform,
    StyleSheet
 } from 'react-native'

 import { BlurView } from '@react-native-community/blur';

 import { SIZES, COLORS, FONTS, icons } from '../constants';

 const RecipeCardDetails = ({recipeItem}) => {
     return(
         <View
            style={{
                flex: 1
            }}
         >
            {/* Name & Bookmark */}
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        width: '70%',
                        color: COLORS.white,
                        ...FONTS.h3,
                        fontSize: 18
                    }}
                >
                     {recipeItem.name}
                </Text>

                <Image
                    source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: SIZES.base,
                        tintColor: COLORS.darkGreen,
                    }}
                />
            </View>

            {/* Duration & Serving */}
            <Text
                style={{
                    color: COLORS.lightGray,
                    ...FONTS.body4
                }}
            >
                {recipeItem.duration} | {recipeItem.serving} Serving
            </Text>
         </View>
     )
 }

 const RecipeCardInfo = ({recipeItem}) => {
    if(Platform.OS === 'ios'){
        return (
            <BlurView
              blurType='dark'
              style={styles.recipeCardContainer}
            >
                <RecipeCardDetails 
                    recipeItem={recipeItem}
                />   
            </BlurView>
       )
    } else {
        return(
            <View
                style={{
                    ...styles.recipeCardContainer,
                    backgroundColor: COLORS.transparentDarkGray
                }}
            >
                <RecipeCardDetails 
                    recipeItem={recipeItem}
                />
            </View>
        )
    }
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
            <RecipeCardInfo
             recipeItem={recipeItem}
            />
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