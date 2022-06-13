import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class GuidelineService {
    PATH_OF_API: string = 'https://openvivqa-nlp-uit.herokuapp.com/api/v1/guideline';

    constructor(
        private httpClient: HttpClient
    ) { }

    public getGuideline(): Observable<any> {
        return this.httpClient.get(this.PATH_OF_API + "/get")
    }

    public updateGuideline(data: string): Observable<any> {
        return this.httpClient.put(this.PATH_OF_API + "/update", data)
    }
}