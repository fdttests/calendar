import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300)
      ])
    ])
  ]
})
export class ModalComponent {
  @Output() public onCloseModal: EventEmitter<any> = new EventEmitter();
  @Output() public onOpenModal: EventEmitter<any> = new EventEmitter();

  public isOpen: boolean = false;

  public constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  @HostListener('window:keydown.esc', ['$event'])
  public escEventListner(event: KeyboardEvent) {
    if (this.isOpen) {
      this.close();
    }
  }

  public close() {
    this.isOpen = false;
    this.changeDetectorRef.detectChanges();
    this.onCloseModal.emit();
  }

  public open() {
    this.isOpen = true;
    this.changeDetectorRef.detectChanges();
    this.onOpenModal.emit();
  }
}
