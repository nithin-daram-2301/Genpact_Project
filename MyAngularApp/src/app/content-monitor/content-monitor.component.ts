import { Component, OnInit } from '@angular/core';
import { ContentService, ContentItem } from '../content.service';

@Component({
    selector: 'app-content-monitor',
    templateUrl: './content-monitor.component.html',
    styleUrls: ['./content-monitor.component.css']
})
export class ContentMonitorComponent implements OnInit {
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

    deleteItem(id: number) {
        this.contentService.deleteContentItem(id).subscribe(() => {
            this.loadContentItems();
        });
    }
}
