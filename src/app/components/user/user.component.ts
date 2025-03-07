import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user',
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() users: User[] = [];

  @Output() idUserEventEmitter = new EventEmitter();

  @Output() selectedUserEventEmitter = new EventEmitter();

  onRemoveUser(id: number): void {
    const confirmRemove = confirm('Esta seguro que desea eliminar?');
    if (confirmRemove) {
      this.idUserEventEmitter.emit(id);
    }
  }

  onSelectedUser(user: User): void {
    this.selectedUserEventEmitter.emit(user);
  }
}
