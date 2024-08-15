import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-extensao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extensao.component.html',
})
export class ExtensaoComponent {
  aboutExtensao = {
    title: 'Oque é a Extensão?',
    paragraph: 'O Plano Nacional de Extensão Universitária define extensão como um processo educativo, cultural e científico que articula ensino e pesquisa de forma indissociável, viabilizando uma relação transformadora entre a instituição de ensino superior (IES) e a sociedade.'
  };
  aboutGestor = {
    title: 'Gestor de Extensão',
    paragraph1: 'Gestores de extensão são servidores, docentes ou técnicos administrativos designados por portaria para coordenar e supervisionar todas as ações de extensão realizadas pelos campi em que atuam.',
    paragraph2: 'Eles são responsáveis por garantir a eficácia, a integração e o alinhamento dessas atividades com as diretrizes institucionais, promovendo a articulação entre a instituição e a comunidade.'
  };
  aboutAtribGestor = {
    title: 'Atribuições do Gestor',
    paragraph1: 'Disseminar o conhecimento sobre extensão.',
    paragraph2: 'Acompanhar as ações de extensão.',
    paragraph3: 'Acompanhar a certificação das ações, mesmo se assinadas por parceiros externos.',
    paragraph4: 'Orientar os extensionistas na elaboração, execução e avaliação das ações.'
  };

  constructor(private viewportScroller: ViewportScroller) {}

  ngAfterViewInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
