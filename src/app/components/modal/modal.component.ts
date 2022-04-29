import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity:1,transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity:0,transform: 'translateY(100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ opacity:0,transform: 'translateY(100%)' }))
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
