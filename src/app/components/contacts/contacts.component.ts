import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactsComponent implements OnInit {
  private userId: string = 'ehJAKHyEjesBXWHg1'; 

  ngOnInit() {
    // Inicializa o EmailJS com o user ID
    (window as any).emailjs.init(this.userId);
  }

  sendEmail(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      // Se o formulário não for válido, marque todos os campos como tocados
      Array.from(form.elements).forEach((element: any) => {
        element.classList.add('touched');
      });
      return;
    }

    (window as any).emailjs.sendForm('service_cfmmxr3', 'template_44nn6zs', form)
      .then((result: any) => {
        console.log(result.text);
        alert("Mensagem enviada com sucesso!");
      }, (error: any) => {
        console.log(error.text);
        alert("Erro ao enviar mensagem.");
      });
  }
}
