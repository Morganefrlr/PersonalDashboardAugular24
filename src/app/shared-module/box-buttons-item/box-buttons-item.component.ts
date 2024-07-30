import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-box-buttons-item',
  template: `
    <div class='boxButtons' (click)="$event.stopPropagation();">
        <div class="boxButtons_item"[class]="class"   (click)='handleEditBtn.emit()'>
            <i class="material-icons" >
                edit
            </i>
        </div>
        <div class="boxButtons_item" [class]="class"   (click)='handleDeleteBtn.emit()'>
            <i class="material-icons">
                delete
            </i>
        </div>
    </div>
    
  `
})
export class BoxButtonsItemComponent {
  @Output() handleEditBtn: EventEmitter<void> = new EventEmitter()
  @Output() handleDeleteBtn: EventEmitter<void> = new EventEmitter()
  
  @Input() class: string

}
