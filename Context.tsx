import { FC, useState, createContext, Dispatch, SetStateAction } from 'react';
import { quiz } from './interfaces';

let emptyObj: any = {};

export interface ContextObj {
    subject: string;
    setSubject: (t: string) => void;
    quizzes: quiz[] | [];
    setQuizzes: Dispatch<SetStateAction<quiz[]>>;
    quiz: quiz | typeof emptyObj;
    setQuiz: Dispatch<SetStateAction<quiz>>;
    score: number,
    setScore: Dispatch<SetStateAction<number>>;
}

export const Context = createContext<ContextObj>({ subject: '', setSubject: () => { }, quizzes: [], setQuizzes: () => { }, score: 0, setScore: () => { }, quiz: {}, setQuiz: () => { } });

export const ContextProvider: FC<any> = ({ children }) => {
    const [subject, setSubject] = useState('');
    const [quizzes, setQuizzes] = useState<quiz[] | []>([]);
    const [quiz, setQuiz] = useState<quiz | {}>({});
    const [score, setScore] = useState(0);

    return (
        <Context.Provider value={{ subject, setSubject, quizzes, setQuizzes, quiz, setQuiz, score, setScore }}>
            {children}
        </Context.Provider>
    )
};