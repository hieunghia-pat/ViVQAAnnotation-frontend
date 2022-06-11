export interface StatisticsInterface {
    userId: string,
    subsetId: number,
    totalImages: number,
    totalTextQA: number,
    totalStateQA: number,
    totalActionQA: number,
    totalAnnotatedImages: number,
    totalDeletedImages: number,
    questionLengths: number[],
    answerLengths: number[]
}