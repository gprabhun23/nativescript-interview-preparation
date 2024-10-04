import { Component, HostListener, OnInit } from "@angular/core";
import { ItemService, IType } from './item.service'
import { ItemEventData } from "@nativescript/core/ui/list-view";
import { Router } from "@angular/router";

@Component({
    selector: 'demo-list',
    templateUrl: "./list.component.html",
})
export class ListComponent implements OnInit {
    public items: Array<IType> = [];
    isActive: boolean = false; // Track active state
    constructor(private _itemService: ItemService, private router: Router) { }

    ngOnInit(): void {
        this._itemService.items = this._itemService.items.map((e) => {
            return {
                id: e.id,
                name: e.name.toUpperCase(),
                fileName: e.fileName // Convert fileName to uppercase
            };
        });
        this.items = this._itemService.items;
    }

    onItemTap(args: ItemEventData) {
        this.router.navigate(['/pdf-viewer', this.items[args.index].id]);
    }
    setActive(value: boolean) {
        this.isActive = value; // Set active state based on touch
    }
    @HostListener('touchstart') onTouchStart() {
        this.isActive = true; // Set active on touch start
    }

    @HostListener('touchend') onTouchEnd() {
        this.isActive = false; // Reset active on touch end
    }
}