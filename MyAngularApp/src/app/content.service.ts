import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContentItem {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    htmlContent: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    private apiUrl = 'https://localhost:44390/api/ContentItems';

    constructor(private http: HttpClient) {}

    getContentItems(): Observable<ContentItem[]> {
        return this.http.get<ContentItem[]>(this.apiUrl);
    }

    addContentItem(content: FormData): Observable<ContentItem> {
        return this.http.post<ContentItem>(this.apiUrl, content);
    }

    deleteContentItem(id: number): Observable<ContentItem> {
        return this.http.delete<ContentItem>(`${this.apiUrl}/${id}`);
    }
}
