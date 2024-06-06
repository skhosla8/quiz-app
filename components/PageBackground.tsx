// Base Imports 
import React, { FC, ReactNode, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import StyleSheet from 'react-native-media-query';
import Svg, { Path } from 'react-native-svg';
// Components
import ToggleButton from 'react-native-toggle-element';
// Images/Icons
import Background_Image_Light from '../assets/pattern-background-desktop-light.svg';

interface PageBackgroundProps {
    children: ReactNode;
}

const PageBackground: FC<PageBackgroundProps> = ({ children }) => {
    const [toggleValue, setToggleValue] = useState(false);

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <Image
                    source={Background_Image_Light}
                    style={styles.backgroundImage}
                    resizeMode='contain'
                />

                <View style={styles.backgroundOverlay} />

                <View style={styles.colorThemeContainer}>
                    <Svg
                        width={20}
                        height={20}
                        viewBox="0 0 30 30"
                    >
                        <Path fill="#626C7F" d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5A.75.75 0 0 1 12 1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.75-2.25a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5ZM12 19.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-8.25-6.75a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5Zm.969-8.031a.75.75 0 0 1 1.062 0l1.5 1.5a.751.751 0 0 1-1.062 1.062l-1.5-1.5a.75.75 0 0 1 0-1.062Zm1.062 14.562a.75.75 0 1 1-1.062-1.06l1.5-1.5a.75.75 0 1 1 1.062 1.06l-1.5 1.5Zm13.5-14.562a.75.75 0 0 0-1.062 0l-1.5 1.5a.751.751 0 0 0 1.062 1.062l1.5-1.5a.75.75 0 0 0 0-1.062Zm-1.062 14.562a.75.75 0 0 0 1.062-1.06l-1.5-1.5a.75.75 0 0 0-1.062 1.06l1.5 1.5Z" />
                    </Svg>

                    <View style={styles.toggleButtonContainer}>
                        <ToggleButton
                            value={toggleValue}
                            onPress={() => setToggleValue(!toggleValue)}
                            thumbButton={{
                                width: 18,
                                height: 18,
                                radius: 18
                            }}
                            thumbStyle={{
                                backgroundColor: '#FFFFFF'
                            }}
                            trackBar={{
                                activeBackgroundColor: '#A729F5',
                                inActiveBackgroundColor: '#A729F5',
                                borderActiveColor: '#A729F5',
                                borderInActiveColor: '#A729F5',
                                borderWidth: 3,
                                width: 30,
                                height: 16
                            }}
                        />
                    </View>

                    <Svg
                        width={20}
                        height={20}
                        viewBox="0 0 30 30"
                    >
                        <Path fill="#626C7F" d="M11.775 4.522A7.5 7.5 0 1 1 4.898 16.09c2.104-.57 4.974-1.953 6.24-5.326.828-2.211.876-4.408.637-6.241ZM20.184 12a8.997 8.997 0 0 0-9.315-8.994.75.75 0 0 0-.713.888c.345 1.821.42 4.092-.424 6.342-1.2 3.201-4.203 4.26-6.115 4.606a.75.75 0 0 0-.542 1.066A9 9 0 0 0 20.184 12Z" />
                    </Svg>
                </View>

                {children}

                <StatusBar style="auto" />
            </View>
        </View>
    )
};

export default PageBackground;

const { styles } = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: 995,
        backgroundColor: '#fff',
        '@media(max-width: 700px)': {
            width: 550,
        }
    },
    backgroundImage: {
        width: 995,
        height: 660,
        '@media(max-width: 700px)': {
            width: 550,
            height: 760
        }
    },
    backgroundOverlay: {
        position: 'absolute',
        width: 995,
        height: `${100}%`,
        backgroundColor: '#F4F6FA',
        zIndex: 10,
        opacity: 0.6,
        '@media(max-width: 700px)': {
            width: 550,
        }
    },
    colorThemeContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        top: 70,
        right: 80,
        zIndex: 300,
        '@media(max-width: 700px)': {
            top: 20,
            marginRight: 10
        }
    },
    toggleButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 3,
        marginRight: 3
    }
});