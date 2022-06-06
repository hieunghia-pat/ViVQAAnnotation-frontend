export interface ImageInterface {
    id: number,
    url: string,
    filename: string,
    subset_id: number,
    to_delete: boolean,
    user_id: string,
    annotationIds: number[],
    image: string
}