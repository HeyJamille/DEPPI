import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule] 
})
export class ContactsComponent {
  onSubmit() {
    alert('Formulário enviado com sucesso!');
  }
}
