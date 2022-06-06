export interface AnnotationInterface {
    id: number,
    imageId: number,
    userId: string,
    question: string,
    answer: string,
    question_type: number,
    answer_type: number,
    text_QA: boolean,
    state_QA: boolean,
    action_QA: boolean
}