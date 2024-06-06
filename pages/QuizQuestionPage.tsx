// Base Imports 
import React, { useContext, useState, FC } from 'react';
import { View, Text, Pressable } from 'react-native';
import StyleSheet from 'react-native-media-query';
import Svg, { Path } from 'react-native-svg';
import { ContextObj, Context } from '../Context';
import { useNavigate } from 'react-router-dom';
// Components
import PageBackground from '../components/PageBackground';
import * as Progress from 'react-native-progress';
// Utils
import { getIconBgColor } from '../utils';

export const QuizQuestionPage: FC = () => {
    const { subject, quizzes, quiz, score, setScore } = useContext<ContextObj>(Context);

    const questions = quizzes && quiz && quiz['questions'];

    const globalStyle = require('../globalStyles');

    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [hover, setHover] = useState(false);
    const [highlightedOption, setHighlightedOption] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const correctText = questions && questions[currentQuestion]?.answer;
    const correctAnswerIndex = questions && questions[currentQuestion].options?.findIndex((option: string) => option === correctText);

    const handleHoverIn = (e: any) => {
        if (subject) {
            setHighlightedOption(e.target.firstChild.innerText);
            setHover(true);
        }
    };

    const handleHoverOut = () => {
        setHighlightedOption('');
        setHover(false);
    };


    const getCorrectAnswer = () => {
        let correctAnswer;

        if (correctAnswerIndex === 0) {
            correctAnswer = 'A';
        } else if (correctAnswerIndex === 1) {
            correctAnswer = 'B';
        } else if (correctAnswerIndex === 2) {
            correctAnswer = 'C';
        } else {
            correctAnswer = 'D';
        }

        return correctAnswer;
    };

    const handleSubmit = (e: any) => {
        if (submitted) {
            // if on last question of the quiz
            if (currentQuestion === 9) {
                navigate('/score');
            } else {
                // if an answer has already been submitted
                setSubmitted(false);
                setSelectedAnswer('');
                setCurrentQuestion(currentQuestion + 1);
            }

            if (selectedAnswer === getCorrectAnswer()) {
                setScore(score + 1);
            }
        } else {
            // if an answer hasn't been submitted yet
            if (selectedAnswer) {
                setSubmitted(true);
            }
        }
    };

    const getAContainerStyles = () => {
        // red color
        if (submitted && selectedAnswer === 'A' && selectedAnswer !== getCorrectAnswer()) {
            return { borderColor: '#EE5454' };
        }
        // green color
        else if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 0) {
            return { borderColor: '#26D782' }
        }
        // purple color
        else if (selectedAnswer === 'A') {
            return { borderColor: '#A729F5' };
        }
    };

    const getAIconContainerStyles = () => {
        //red color
        if (submitted && selectedAnswer === 'A' && selectedAnswer !== getCorrectAnswer()) {
            return { backgroundColor: '#EE5454' }
        }

        // green color
        if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 0) {
            return { backgroundColor: '#26D782' }
        }

        // light purple color (on hover)
        if (!submitted && hover && (highlightedOption === 'A') && (selectedAnswer !== highlightedOption)) {
            return { backgroundColor: '#F6E7FF' };
        }

        if (selectedAnswer === 'A') {
            return { backgroundColor: '#A729F5' }
        }
    };

    const getAIconTextStyles = () => {
        // light purple color (on hover)
        if (!submitted && hover && (highlightedOption === 'A') && (selectedAnswer !== highlightedOption)) {
            return { color: '#A729F5' };
        }

        // dark purple highlight when selected
        if (!submitted && selectedAnswer === 'A') {
            return { color: '#FFFFFF' }
        }

        // white color when answer is correct
        if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 0) {
            return { color: '#FFFFFF' }
        }

        // white color when answer is incorrect
        if (submitted && selectedAnswer === 'A' && selectedAnswer !== getCorrectAnswer()) {
            return { color: '#FFFFFF' };
        }
    }

    const getBContainerStyles = () => {
        // red color
        if (submitted && selectedAnswer === 'B' && selectedAnswer !== getCorrectAnswer()) {
            return { borderColor: '#EE5454' };
        }
        // green color
        else if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 1) {
            return { borderColor: '#26D782' }
        }
        // purple color
        else if (selectedAnswer === 'B') {
            return { borderColor: '#A729F5' };
        }
    };

    const getBIconContainerStyles = () => {
        //red color
        if (submitted && selectedAnswer === 'B' && selectedAnswer !== getCorrectAnswer()) {
            return { backgroundColor: '#EE5454' }
        }

        // green color
        if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 1) {
            return { backgroundColor: '#26D782' }
        }

        // light purple color (on hover)
        if (!submitted && hover && (highlightedOption === 'B') && (selectedAnswer !== highlightedOption)) {
            return {
                backgroundColor: '#F6E7FF'
            };
        }

        if (selectedAnswer === 'B') {
            return { backgroundColor: '#A729F5' };
        }
    };

    const getBIconTextStyles = () => {
        // light purple color (on hover)
        if (!submitted && hover && (highlightedOption === 'B') && (selectedAnswer !== highlightedOption)) {
            return { color: '#A729F5' };
        }

        // dark purple highlight when selected
        if (!submitted && selectedAnswer === 'B') {
            return { color: '#FFFFFF' }
        }


        // white color when answer is correct
        if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 1) {
            return { color: '#FFFFFF' }
        }

        // white color when answer is incorrect
        if (submitted && selectedAnswer === 'B' && selectedAnswer !== getCorrectAnswer()) {
            return { color: '#FFFFFF' };
        }
    }
    const getCContainerStyles = () => {
        // red color
        if (submitted && selectedAnswer === 'C' && selectedAnswer !== getCorrectAnswer()) {
            return { borderColor: '#EE5454' };
        }
        // green color
        else if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 2) {
            return { borderColor: '#26D782' }
        }
        // purple color
        else if (selectedAnswer === 'C') {
            return { borderColor: '#A729F5' };
        }
    };

    const getCIconContainerStyles = () => {
        //red color
        if (submitted && selectedAnswer === 'C' && selectedAnswer !== getCorrectAnswer()) {
            return { backgroundColor: '#EE5454' }
        }

        // green color
        if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 2) {
            return { backgroundColor: '#26D782' }
        }

        // light purple color (on hover)
        if (!submitted && hover && (highlightedOption === 'C') && (selectedAnswer !== highlightedOption)) {
            return { backgroundColor: '#F6E7FF' }
        }

        if (selectedAnswer === 'C') {
            return { backgroundColor: '#A729F5' };
        }
    };

    const getCIconTextStyles = () => {
        // light purple color (on hover)
        if (!submitted && hover && (highlightedOption === 'C') && (selectedAnswer !== highlightedOption)) {
            return { color: '#A729F5' };
        }

        // dark purple highlight when selected
        if (!submitted && selectedAnswer === 'C') {
            return { color: '#FFFFFF' }
        }


        // white color when answer is correct
        if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 2) {
            return { color: '#FFFFFF' }
        }

        // white color when answer is incorrect
        if (submitted && selectedAnswer === 'C' && selectedAnswer !== getCorrectAnswer()) {
            return { color: '#FFFFFF' };
        }
    }

    const getDContainerStyles = () => {
        // red color
        if (submitted && selectedAnswer === 'D' && selectedAnswer !== getCorrectAnswer()) {
            return { borderColor: '#EE5454' };
        }  // green color
        else if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 3) {
            return { borderColor: '#26D782' }
        }
        // purple color
        else if (selectedAnswer === 'D') {
            return { borderColor: '#A729F5' };
        }
    };

    const getDIconContainerStyles = () => {
        //red color
        if (submitted && selectedAnswer === 'D' && selectedAnswer !== getCorrectAnswer()) {
            return { backgroundColor: '#EE5454' }
        }

        // green color
        if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 3) {
            return { backgroundColor: '#26D782' }
        }

        // light purple color (on hover)
        if (!submitted && hover && (highlightedOption === 'D') && (selectedAnswer !== highlightedOption)) {
            return {
                backgroundColor: '#F6E7FF'
            };
        }

        if (selectedAnswer === 'D') {
            return { backgroundColor: '#A729F5' };
        }
    };

    const getDIconTextStyles = () => {
        // light purple color (on hover)
        if (!submitted && hover && (highlightedOption === 'D') && (selectedAnswer !== highlightedOption)) {
            return { color: '#A729F5' };
        }

        // dark purple highlight when selected
        if (!submitted && selectedAnswer === 'D') {
            return { color: '#FFFFFF' }
        }


        // white color when answer is correct
        if (submitted && selectedAnswer === getCorrectAnswer() && correctAnswerIndex === 3) {
            return { color: '#FFFFFF' }
        }

        // white color when answer is incorrect
        if (submitted && selectedAnswer === 'D' && selectedAnswer !== getCorrectAnswer()) {
            return { color: '#FFFFFF' };
        }
    }

    return (
        <PageBackground>
            <View style={styles.main}>
                <View style={{ position: 'relative' }}>
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
                        <View>
                            <Text style={styles.questionNumber}>Question {currentQuestion + 1} of 10</Text>

                            <Text style={styles.questionText}>{questions && questions[currentQuestion]?.question}</Text>
                        </View>
                    </View>

                    <View style={styles.progressBarContainer}>
                        <Progress.Bar
                            progress={(currentQuestion + 1) / 10}
                            width={330}
                            color='#A729F5'
                            unfilledColor='#FFFFFF'
                            borderColor='#FFFFFF'
                            borderWidth={2}
                            borderRadius={20} />
                    </View>
                </View>

                <View style={styles.optionsContainer}>
                    <Pressable
                        style={[globalStyle.multipleChoiceBox, getAContainerStyles(), styles.multipleChoiceBox]}
                        onHoverIn={handleHoverIn}
                        onHoverOut={handleHoverOut}
                        onPress={(e) => setSelectedAnswer('A')}
                        disabled={submitted ? true : false}
                    >

                        <View style={[styles.iconContainer, getAIconContainerStyles()]}>
                            <Text style={[styles.rubikMedium, getAIconTextStyles()]}>A</Text>
                        </View>

                        <Text style={[styles.rubikMedium, styles.optionText]}>{questions && questions[currentQuestion]?.options[0]}</Text>

                        <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                            {submitted && correctAnswerIndex === 0 &&
                                <Svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z" />
                                </Svg>
                            }
                        </View>

                        <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                            {submitted && selectedAnswer === 'A' && selectedAnswer !== getCorrectAnswer() &&

                                <Svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z" />
                                </Svg>
                            }
                        </View>
                    </Pressable>

                    <Pressable
                        style={[globalStyle.multipleChoiceBox, getBContainerStyles(), styles.multipleChoiceBox]}
                        onHoverIn={handleHoverIn}
                        onHoverOut={handleHoverOut}
                        onPress={(e) => setSelectedAnswer('B')}
                        disabled={submitted ? true : false}
                    >

                        <View style={[styles.iconContainer, getBIconContainerStyles()]}>
                            <Text style={[styles.rubikMedium, getBIconTextStyles()]}>B</Text>
                        </View>

                        <Text style={[styles.rubikMedium, styles.optionText]}>{questions && questions[currentQuestion]?.options[1]}</Text>

                        <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                            {submitted && correctAnswerIndex === 1 &&
                                <Svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z" />
                                </Svg>
                            }
                        </View>

                        <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                            {submitted && selectedAnswer === 'B' && selectedAnswer !== getCorrectAnswer() &&
                                <Svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z" />
                                </Svg>
                            }
                        </View>
                    </Pressable>

                    <Pressable
                        style={[globalStyle.multipleChoiceBox, getCContainerStyles(), styles.multipleChoiceBox]}
                        onHoverIn={handleHoverIn}
                        onHoverOut={handleHoverOut}
                        onPress={(e) => setSelectedAnswer('C')}
                        disabled={submitted ? true : false}>
                        <View style={[styles.iconContainer, getCIconContainerStyles()]}>
                            <Text style={[styles.rubikMedium, getCIconTextStyles()]}>C</Text>
                        </View>

                        <Text style={[styles.rubikMedium, styles.optionText]}>{questions && questions[currentQuestion]?.options[2]}</Text>

                        <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                            {submitted && correctAnswerIndex === 2 &&
                                <Svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z" />
                                </Svg>
                            }
                        </View>

                        <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                            {submitted && selectedAnswer === 'C' && selectedAnswer !== getCorrectAnswer() &&
                                <Svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z" />
                                </Svg>
                            }
                        </View>
                    </Pressable>

                    <Pressable
                        style={[globalStyle.multipleChoiceBox, getDContainerStyles(), styles.multipleChoiceBox]}
                        onHoverIn={handleHoverIn}
                        onHoverOut={handleHoverOut}
                        onPress={(e) => setSelectedAnswer('D')}
                        disabled={submitted ? true : false}>

                        <View style={[styles.iconContainer, getDIconContainerStyles()]}>
                            <Text style={[styles.rubikMedium, getDIconTextStyles()]}>D</Text>
                        </View>

                        <Text style={[styles.rubikMedium, styles.optionText]}>{questions && questions[currentQuestion]?.options[3]}</Text>

                        <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                            {submitted && correctAnswerIndex === 3 &&
                                <Svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z" />
                                </Svg>
                            }
                        </View>

                        <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                            {submitted && selectedAnswer === 'D' && selectedAnswer !== getCorrectAnswer() &&
                                <Svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 40 40"
                                >
                                    <Path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z" />
                                </Svg>
                            }
                        </View>
                    </Pressable>

                    <Pressable style={[globalStyle.multipleChoiceBox, styles.submit, styles.multipleChoiceBox]} onPress={handleSubmit}>
                        <Text style={[styles.rubikMedium, { color: '#FFFFFF' }]}>{submitted ? 'Next Question' : 'Submit Answer'}</Text>
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
            justifyContent: 'flex-start',
            top: 30,
            left: 20
        },
    },
    subjectContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        height: 25,
        marginTop: 20,
        '@media(max-width: 700px)': {
            width: 350,
            marginTop: -10,
            marginBottom: 5,
            justifyContent: 'flex-start',
            marginLeft: 60
        },
    },
    subjectText: {
        fontFamily: 'Rubik-Medium',
        fontSize: 22,
        color: '#313E51',
        fontWeight: '500',
        '@media(max-width: 700px)': {
            fontSize: 17,
            marginLeft: -5
        },
    },
    multipleChoiceBox: {
        '@media(max-width: 700px)': {
            position: 'relative',
            width: 380,
            marginLeft: 14,
        }
    },
    optionText: {
        '@media(max-width: 700px)': {
            width: 250,
            flexWrap: 'wrap'
        }
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 43,
        height: 38,
        borderRadius: 8,
        marginRight: 17,
        marginLeft: 15,
        backgroundColor: '#F4F6FA'
    },
    icon: {
        width: 27,
        height: 27,
    },
    mainContainer: {
        marginTop: 50,
        width: 350,
        marginLeft: 15,
        '@media(max-width: 700px)': {
            marginTop: 10
        }
    },
    questionNumber: {
        fontFamily: 'Rubik',
        fontStyle: 'italic',
        color: '#626C7F',
        fontSize: 15,
        letterSpacing: 0.5,
        fontWeight: '100',
        opacity: 0.8,
        '@media(max-width: 700px)': {
            marginLeft: 65,
            opacity: 1,
            fontWeight: 400,
            fontSize: 14
        }
    },
    questionText: {
        fontFamily: 'Rubik-Medium',
        fontSize: 28,
        color: '#313E51',
        fontWeight: '500',
        marginTop: 23,
        '@media(max-width: 700px)': {
            marginLeft: 65,
            marginTop: 15,
            opacity: 1,
            fontSize: 21
        }
    },
    progressBarContainer: {
        position: 'absolute',
        bottom: 45,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        width: 330,
        height: 50,
        '@media(max-width: 700px)': {
            position: 'relative',
            top: 15,
            marginLeft: 75,
        }
    },
    optionsContainer: {
        marginTop: 105,
        marginLeft: 50,
        '@media(max-width: 700px)': {
            marginTop: 40,
        }
    },
    rubikMedium: {
        fontFamily: 'Rubik',
        fontSize: 19,
        color: '#313E51',
        fontWeight: '500',
        letterSpacing: 1,
        '@media(max-width: 700px)': {
            fontSize: 16
        }
    },
    submit: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#A729F5',
    }
});