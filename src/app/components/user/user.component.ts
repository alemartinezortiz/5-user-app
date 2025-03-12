import { Component, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { Route, Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'user',
  imports: [RouterModule],
  templateUrl: './user.component.html',
})
export class UserComponent {
  title: string = 'Listado de Usuarios!';

  users: User[] = [];

  constructor(
    private sharingData: SharingDataService,
    private service: UserService,
    private router: Router
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.users = this.router.getCurrentNavigation()?.extras.state!['users'];
    } else {
      this.service.findAll().subscribe((users) => (this.users = users));
    }
  }

  onRemoveUser(id: number): void {
    this.sharingData.idUserEventEmitter.emit(id);
  }

  onSelectedUser(user: User): void {
    this.router.navigate(['/users/edit', user.id], { state: { user } });
  }
}
