import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extensao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extensao.component.html',
})
export class ExtensaoComponent {
  aboutExtensao = {
    title: 'Oque é Extensão?',
    paragraph: 'O Plano Nacional de Extensão Universitária define extensão como um processo educativo, cultural e científico que articula ensino e pesquisa de forma indissociável, viabilizando uma relação transformadora entre a instituição de ensino superior (IES) e a sociedade.'
  };
  aboutGestor = {
    title: 'Gestor de Extensão',
    paragraph: 'Gestores de extensão são os servidores, docentes ou técnicos administrativos, designados através de portaria, para coordenar todas as ações de extensão promovidas pelos campi em que atuam.',
  };
  aboutAtribGestor = {
    title: 'Atribuições do Gestor',
    paragraph1: 'Disseminar o conhecimento sobre extensão.',
    paragraph2: 'Acompanhar as ações de extensão;',
    paragraph3: 'Acompanhar o processo de certificação das ações, ainda que sejam assinados por eventuais parceiros externos',
  };
}
