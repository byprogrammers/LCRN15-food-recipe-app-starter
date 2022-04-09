import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import { withStyleAnimation } from 'react-native-reanimated/lib/types/lib/reanimated2/animation';

import { FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';

import { CategoryCard } from '../components'

const Home = ({ navigation }) => {

    function renderHeader(){
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 80
                }}
            >
                {/* Text */}
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.darkGreen,
                                ...FONTS.h2
                            }}
                        >Hello ByProgrammers,</Text>

                        <Text
                            style={{
                                marginTop: 3,
                                color: COLORS.gray,
                                ...FONTS.body3
                            }}
                        >
                            What you want to cook today?
                        </Text>
                    </View>

                {/* Image */}

            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex:1, 
                backgroundColor: COLORS.white
            }}
        >
            <FlatList 
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                ListHeaderComponent= {
                    <View>
                        {/* Header */}
                        {renderHeader()}
                        {/* Search Bar */}
                        {/* See Recipe Card */}
                        {/* Trending Section */}
                        {/* CategoryHeader */}
                    </View>
                }
                renderItem={({item}) =>{
                    return(
                        <CategoryCard 
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate
                            ('Recipe', { recipe: item})}

                        />
                    )
                }}
                ListFooterComponent={
                    <View 
                        style={{
                            marginBottom: 100
                        }}
                    />
                }
            />
        </SafeAreaView>
    )
}

export default Home;