import { Component } from '@angular/core';
import { ContentService, ContentItem } from '../content.service';

@Component({
    selector: 'app-content-form',
    templateUrl: './content-form.component.html',
    styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent {
    title = '';
    description = '';
    htmlContent = '';
    imageFile: File | null = null;

    constructor(private contentService: ContentService) {}

    onFileChange(event: any) {
        this.imageFile = event.target.files[0];
    }

    submit() {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('description', this.description);
        formData.append('htmlContent', this.htmlContent);
        if (this.imageFile) {
            formData.append('file', this.imageFile);
        }

        this.contentService.addContentItem(formData).subscribe(response => {
            console.log('Content item added:', response);
            // Reset the form
            this.title = '';
            this.description = '';
            this.htmlContent = '';
            this.imageFile = null;
        });
    }
}
