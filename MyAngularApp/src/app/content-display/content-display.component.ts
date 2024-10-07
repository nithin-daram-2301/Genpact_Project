import { Component, OnInit } from '@angular/core';
import { ContentService, ContentItem } from '../content.service';

@Component({
    selector: 'app-content-display',
    templateUrl: './content-display.component.html',
    styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {
    contentItems: ContentItem[] = [];

    constructor(private contentService: ContentService) {}

    ngOnInit() {
        this.loadContentItems();
    }

    loadContentItems() {
        this.contentService.getContentItems().subscribe(items => {
            this.contentItems = items;
        });
    }
}
