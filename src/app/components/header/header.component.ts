import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMenuHeader } from 'src/app/models/interfaces/menu-header.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  menu: IMenuHeader[] = [
    {
      title: 'Home',
      class: 'hover:bg-red-600 border-b-red-600',
      url: '',
    },
    {
      title: 'Pokedex',
      class: 'hover:bg-green-600 border-b-green-600',
      url: '',
    },
  ];
}
