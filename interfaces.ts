export interface question {
    question: string;
    options: string[];
    answer: string;
}

export interface quiz {
    title: string;
    icon: string;
    questions: question[];
}