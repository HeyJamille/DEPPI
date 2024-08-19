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
    paragraph: `O <span class="text-[#2f9335] font-semibold">Plano Nacional de Extensão Universitária</span> define extensão como um processo educativo, cultural e científico que articula ensino e pesquisa de forma indissociável, viabilizando uma relação transformadora entre a instituição de ensino superior (IES) e a sociedade.`
  };
  aboutGestor = {
    title: 'Gestor de Extensão',
    paragraph1: `<span class="text-[#2f9335] font-semibold">Gestores de extensão são servidores, docentes ou técnicos administrativos</span> designados por portaria para coordenar e supervisionar todas as ações de extensão realizadas pelos campi em que atuam.`,
    paragraph2: 'Eles são responsáveis por garantir a eficácia, a integração e o alinhamento dessas atividades com as diretrizes institucionais, promovendo a articulação entre a instituição e a comunidade.'
  };
  aboutAtribGestor = {
    title: 'Atribuições do Gestor',
    paragraph1: `<span class="text-[#2f9335] font-semibold">Disseminar</span> o conhecimento sobre extensão.`,
    paragraph2: `<span class="text-[#2f9335] font-semibold">Acompanhar as ações</span> de extensão.`,
    paragraph3: `<span class="text-[#2f9335] font-semibold">Acompanhar a certificação das ações</span>, mesmo se assinadas por parceiros externos.`,
    paragraph4: `<span class="text-[#2f9335] font-semibold">Orientar</span> os extensionistas na elaboração, execução e avaliação das ações.`
  };

  constructor(private viewportScroller: ViewportScroller) {}

  ngAfterViewInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
