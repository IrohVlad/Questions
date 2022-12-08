export interface IQuestion {
    question: string,
    variants: string[],
    correct?: number
}

export const questions: IQuestion[] = [
    {
        question: 'Вы пациент?',
        variants: ['Да', 'Нет', 'Не знаю'],
        correct: 0
    },
    {
        question: 'Вы врач?',
        variants: ['Да', 'Нет', 'Не знаю'],
        correct: 1
    },
    {
        question: 'Как вам?',
        variants: ['Нормально', 'Не очень'],
        correct: 1
    },
    {
        question: 'Нормально?',
        variants: ['Да', 'Нет', 'Не знаю'],
        correct: 1
    }
] 