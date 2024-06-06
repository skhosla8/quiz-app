// Base Imports 
import React, { useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import StyleSheet from 'react-native-media-query';
import Svg, { Path } from 'react-native-svg';
import { ContextObj, Context } from '../Context';
import { useNavigate } from 'react-router-dom';
// Components
import PageBackground from '../components/PageBackground';
// Utils
import { getIconBgColor } from '../utils';

export default function QuizScorePage() {
    const { subject, score } = useContext<ContextObj>(Context);

    const navigate = useNavigate();

    const handlePress = () => {
        navigate('/');
    };

    return (

        <PageBackground>
            <View style={styles.main}>
                <View>
                    <View style={styles.subjectContainer}>
                        <View style={[styles.iconContainer, { backgroundColor: getIconBgColor(subject) }]}>
                            {subject === 'HTML' &&
                                <Svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#FF7E35" d="M24.508 7.607a1.25 1.25 0 0 1 .634 1.65l-10 22.5a1.25 1.25 0 1 1-2.284-1.015l10-22.5a1.251 1.251 0 0 1 1.65-.635ZM10.832 13.44a1.249 1.249 0 0 1 .1 1.765L6.674 20l4.263 4.795a1.25 1.25 0 1 1-1.87 1.66l-5-5.625a1.25 1.25 0 0 1 0-1.66l5-5.625a1.25 1.25 0 0 1 1.764-.105Zm18.337 0a1.25 1.25 0 0 1 1.765.105l5 5.625a1.25 1.25 0 0 1 0 1.66l-5 5.625a1.25 1.25 0 1 1-1.87-1.66L33.327 20l-4.262-4.795a1.25 1.25 0 0 1 .105-1.765Z" />
                                </Svg>
                            }

                            {subject === 'CSS' &&
                                <Svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#2FD887" d="M10 2.505a1.25 1.25 0 0 0-1.25 1.25V21.25a5 5 0 0 0 5 5H15v6.25a4.999 4.999 0 0 0 9.615 1.913c.25-.607.38-1.257.38-1.913v-6.25h1.255a5 5 0 0 0 5-5V3.755A1.25 1.25 0 0 0 30 2.505H10ZM28.75 17.5h-17.5V5.005h7.5V8.76a1.25 1.25 0 0 0 2.5 0V5.005h2.5v6.24a1.25 1.25 0 0 0 2.5 0v-6.24h2.5V17.5Zm-17.5 3.75V20h17.5v1.25a2.5 2.5 0 0 1-2.5 2.5h-2.505a1.25 1.25 0 0 0-1.25 1.25v7.5a2.497 2.497 0 1 1-4.995 0V25a1.25 1.25 0 0 0-1.25-1.25h-2.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                                </Svg>
                            }

                            {subject === 'JavaScript' &&
                                <Svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#2FD887" d="M10 2.505a1.25 1.25 0 0 0-1.25 1.25V21.25a5 5 0 0 0 5 5H15v6.25a4.999 4.999 0 0 0 9.615 1.913c.25-.607.38-1.257.38-1.913v-6.25h1.255a5 5 0 0 0 5-5V3.755A1.25 1.25 0 0 0 30 2.505H10ZM28.75 17.5h-17.5V5.005h7.5V8.76a1.25 1.25 0 0 0 2.5 0V5.005h2.5v6.24a1.25 1.25 0 0 0 2.5 0v-6.24h2.5V17.5Zm-17.5 3.75V20h17.5v1.25a2.5 2.5 0 0 1-2.5 2.5h-2.505a1.25 1.25 0 0 0-1.25 1.25v7.5a2.497 2.497 0 1 1-4.995 0V25a1.25 1.25 0 0 0-1.25-1.25h-2.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                                </Svg>
                            }

                            {subject === 'Accessibility' &&
                                <Svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#A729F5" d="M16.875 8.125a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0ZM20 2.5a5.625 5.625 0 0 0-5.475 6.915l-4.03-1.625a4 4 0 0 0-5.19 2.18 3.95 3.95 0 0 0 2.175 5.175l5.02 2.027v5.96l-4.532 8.525a3.98 3.98 0 0 0 7.024 3.738L20 25.975l5.01 9.42a3.978 3.978 0 0 0 7.025-3.735L27.5 23.13v-5.957l5.02-2.028a3.95 3.95 0 0 0 2.175-5.175 4 4 0 0 0-5.19-2.183l-4.027 1.628A5.626 5.626 0 0 0 20 2.5ZM7.618 10.922a1.5 1.5 0 0 1 1.94-.817l8.57 3.463a5 5 0 0 0 3.744 0l8.57-3.463a1.5 1.5 0 0 1 1.94.817 1.45 1.45 0 0 1-.8 1.905l-5.02 2.025A2.5 2.5 0 0 0 25 17.175v5.957c0 .41.1.814.293 1.175l4.535 8.528a1.48 1.48 0 0 1-2.61 1.39l-5.01-9.425a2.5 2.5 0 0 0-4.415 0l-5.008 9.418a1.477 1.477 0 1 1-2.61-1.388l4.532-8.525A2.5 2.5 0 0 0 15 23.133v-5.96a2.5 2.5 0 0 0-1.563-2.318l-5.02-2.03a1.45 1.45 0 0 1-.8-1.902Z" />
                                </Svg>
                            }
                        </View>

                        <Text style={styles.subjectText}>{subject}</Text>
                    </View>

                    <View style={styles.mainContainer}>
                        <Text style={styles.quizCompleted}>Quiz completed</Text>
                        <Text style={styles.youScored}>You scored...</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.scoreContainer}>
                        <View style={[styles.subjectContainer, { marginTop: -1, display: 'flex', justifyContent: 'center', marginLeft: -60 }]}>
                            <View style={[styles.iconContainer, { backgroundColor: getIconBgColor(subject), width: 39, height: 37 }]}>
                                {subject === 'HTML' &&
                                    <Svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 40 40"
                                    >
                                        <Path fill="#FF7E35" d="M24.508 7.607a1.25 1.25 0 0 1 .634 1.65l-10 22.5a1.25 1.25 0 1 1-2.284-1.015l10-22.5a1.251 1.251 0 0 1 1.65-.635ZM10.832 13.44a1.249 1.249 0 0 1 .1 1.765L6.674 20l4.263 4.795a1.25 1.25 0 1 1-1.87 1.66l-5-5.625a1.25 1.25 0 0 1 0-1.66l5-5.625a1.25 1.25 0 0 1 1.764-.105Zm18.337 0a1.25 1.25 0 0 1 1.765.105l5 5.625a1.25 1.25 0 0 1 0 1.66l-5 5.625a1.25 1.25 0 1 1-1.87-1.66L33.327 20l-4.262-4.795a1.25 1.25 0 0 1 .105-1.765Z" />
                                    </Svg>
                                }

                                {subject === 'CSS' &&
                                    <Svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 40 40"
                                    >
                                        <Path fill="#2FD887" d="M10 2.505a1.25 1.25 0 0 0-1.25 1.25V21.25a5 5 0 0 0 5 5H15v6.25a4.999 4.999 0 0 0 9.615 1.913c.25-.607.38-1.257.38-1.913v-6.25h1.255a5 5 0 0 0 5-5V3.755A1.25 1.25 0 0 0 30 2.505H10ZM28.75 17.5h-17.5V5.005h7.5V8.76a1.25 1.25 0 0 0 2.5 0V5.005h2.5v6.24a1.25 1.25 0 0 0 2.5 0v-6.24h2.5V17.5Zm-17.5 3.75V20h17.5v1.25a2.5 2.5 0 0 1-2.5 2.5h-2.505a1.25 1.25 0 0 0-1.25 1.25v7.5a2.497 2.497 0 1 1-4.995 0V25a1.25 1.25 0 0 0-1.25-1.25h-2.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                                    </Svg>
                                }

                                {subject === 'JavaScript' &&
                                    <Svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 40 40"
                                    >
                                        <Path fill="#2FD887" d="M10 2.505a1.25 1.25 0 0 0-1.25 1.25V21.25a5 5 0 0 0 5 5H15v6.25a4.999 4.999 0 0 0 9.615 1.913c.25-.607.38-1.257.38-1.913v-6.25h1.255a5 5 0 0 0 5-5V3.755A1.25 1.25 0 0 0 30 2.505H10ZM28.75 17.5h-17.5V5.005h7.5V8.76a1.25 1.25 0 0 0 2.5 0V5.005h2.5v6.24a1.25 1.25 0 0 0 2.5 0v-6.24h2.5V17.5Zm-17.5 3.75V20h17.5v1.25a2.5 2.5 0 0 1-2.5 2.5h-2.505a1.25 1.25 0 0 0-1.25 1.25v7.5a2.497 2.497 0 1 1-4.995 0V25a1.25 1.25 0 0 0-1.25-1.25h-2.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                                    </Svg>
                                }

                                {subject === 'Accessibility' &&
                                    <Svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 40 40"
                                    >
                                        <Path fill="#A729F5" d="M16.875 8.125a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0ZM20 2.5a5.625 5.625 0 0 0-5.475 6.915l-4.03-1.625a4 4 0 0 0-5.19 2.18 3.95 3.95 0 0 0 2.175 5.175l5.02 2.027v5.96l-4.532 8.525a3.98 3.98 0 0 0 7.024 3.738L20 25.975l5.01 9.42a3.978 3.978 0 0 0 7.025-3.735L27.5 23.13v-5.957l5.02-2.028a3.95 3.95 0 0 0 2.175-5.175 4 4 0 0 0-5.19-2.183l-4.027 1.628A5.626 5.626 0 0 0 20 2.5ZM7.618 10.922a1.5 1.5 0 0 1 1.94-.817l8.57 3.463a5 5 0 0 0 3.744 0l8.57-3.463a1.5 1.5 0 0 1 1.94.817 1.45 1.45 0 0 1-.8 1.905l-5.02 2.025A2.5 2.5 0 0 0 25 17.175v5.957c0 .41.1.814.293 1.175l4.535 8.528a1.48 1.48 0 0 1-2.61 1.39l-5.01-9.425a2.5 2.5 0 0 0-4.415 0l-5.008 9.418a1.477 1.477 0 1 1-2.61-1.388l4.532-8.525A2.5 2.5 0 0 0 15 23.133v-5.96a2.5 2.5 0 0 0-1.563-2.318l-5.02-2.03a1.45 1.45 0 0 1-.8-1.902Z" />
                                    </Svg>
                                }
                            </View>

                            <Text style={[styles.subjectText, { fontSize: 18 }]}>{subject}</Text>
                        </View>

                        <Text style={styles.score}>{score}</Text>
                        <Text style={styles.outOf10}>out of 10</Text>
                    </View>

                    <Pressable style={styles.button} onPress={handlePress}>
                        <Text style={[styles.rubikMedium, { color: '#FFFFFF' }]}>Play Again</Text>
                    </Pressable>
                </View>
            </View>
        </PageBackground>

    )
};

const { styles } = StyleSheet.create({
    main: {
        position: 'absolute',
        top: 60,
        display: 'flex',
        flexDirection: 'row',
        zIndex: 100,
        width: 840,
        height: `${80}%`,
        '@media(max-width: 700px)': {
            flexDirection: 'column',
            width: 400
        }
    },
    subjectContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 350,
        height: 20,
        marginTop: 20,
        marginLeft: -20,
        '@media(max-width: 700px)': {
            marginLeft: 10
        }
    },
    subjectText: {
        fontFamily: 'Rubik-Medium',
        fontSize: 22,
        color: '#313E51',
        fontWeight: '500',
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 43,
        height: 43,
        borderRadius: 8,
        marginRight: 17,
        marginLeft: 15,
        backgroundColor: '#F4F6FA'
    },
    mainContainer: {
        marginTop: 70,
        width: 350,
        '@media(max-width: 700px)': {
            marginLeft: 25
        }
    },
    quizCompleted: {
        fontFamily: 'Rubik',
        fontSize: 40,
        color: '#313E51',
        fontWeight: '300',
        letterSpacing: 1,
    },
    youScored: {
        fontFamily: 'Rubik',
        fontSize: 40,
        color: '#313E51',
        fontWeight: '500',
        letterSpacing: 1,
    },
    rubikMedium: {
        fontFamily: 'Rubik',
        fontSize: 19,
        color: '#313E51',
        fontWeight: '500',
        letterSpacing: 1,
    },
    scoreContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: 350,
        height: 240,
        marginTop: 115,
        marginLeft: 50,
        borderRadius: 16,
        '@media(max-width: 700px)': {
            marginTop: 50,
            marginLeft: 25
        }
    },
    score: {
        fontFamily: 'Rubik',
        fontSize: 85,
        color: '#313E51',
        fontWeight: '500',
        letterSpacing: 1,
        marginTop: -20
    },
    outOf10: {
        marginTop: -35,
        color: '#626C7F',
        fontSize: 17
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 70,
        backgroundColor: '#A729F5',
        color: '#FFFFFF',
        borderRadius: 16,
        marginLeft: 50,
        marginTop: 20,
        '@media(max-width: 700px)': {
            marginLeft: 22
        }
    }
});