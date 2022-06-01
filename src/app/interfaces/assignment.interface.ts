import { Moment } from "moment";

export interface AssignmentInterface {
    userId: string,
    subsetId: number,
    assigned: boolean,
    assignedDate: Moment,
    finishDate: Moment,
    validation: boolean
}