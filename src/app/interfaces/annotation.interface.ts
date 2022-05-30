export interface AnnotationInterface {
    id: number,
    image_id: number,
    question: string,
    answer: string,
    question_type: number,
    answer_type: number,
    text_QA: boolean,
    state_QA: boolean,
    action_QA: boolean
}