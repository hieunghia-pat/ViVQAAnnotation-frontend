export interface AnnotationInterface {
    id: string,
    imageId: number,
    userId: string,
    question: string,
    answer: string,
    questionType: number,
    answerType: number,
    textQA: boolean,
    stateQA: boolean,
    actionQA: boolean
}