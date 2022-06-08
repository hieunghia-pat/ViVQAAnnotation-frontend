import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AnnotationInterface } from "../interfaces/annotation.interface";

@Injectable({
    providedIn: "root"
})
export class AnnotationService {
    PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/annotations';
    // PATH_OF_API: string = 'http://localhost:8080/api/v1/annotations';

    constructor(
        private httpClient: HttpClient
    ) { }

    public getAnnotationByImage(imageId: number): Observable<any> {
        return this.httpClient.get(this.PATH_OF_API + `/get/image/${imageId}`)
    }

    public getAnnotationByUserForImage(username: string, imageId: number): Observable<any> {
        return this.httpClient.get(this.PATH_OF_API + `/get/annotation-per-image?username=${username}&id=${imageId}`)
    }

    public getAnnotation(annotationId: string): Observable<any> {
        return this.httpClient.get(this.PATH_OF_API + `/get/annotation/${annotationId}`)
    }

    public addAnnotation(annotationInterface: AnnotationInterface): Observable<any> {
        return this.httpClient.post(this.PATH_OF_API + `/add/${annotationInterface.imageId}`, annotationInterface)
    }

    public updateAnnotation(annotationInterface: AnnotationInterface): Observable<any> {
        return this.httpClient.put(this.PATH_OF_API + `/update/${annotationInterface.id}`, annotationInterface)
    }

    public deleteAnnotation(annotationId: number): Observable<any> {
        return this.httpClient.delete(this.PATH_OF_API + `/delete/${annotationId}`)
    }
}