import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-inovacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inovacao.component.html',
})
export class InovacaoComponent {
  aboutInovacao = {
    title: 'Oque é a Inovação?',
    paragraph: 'Segundo a RESOLUÇÃO Nº 125, DE 16 DE DEZEMBRO DE 2019, que aprova a Política de Inovação do IFCE, inovação é a introdução de novidade ou aperfeiçoamento no ambiente produtivo e social que resulte em novos produtos, serviços ou processos ou que compreenda a agregação de novas funcionalidades ou características a produto, serviço ou processo já existente que possa resultar.',
  };
  aboutObjective= {
    title: 'Objetivos',
    paragraph1: 'Promover a cultura de inovação, empreendedorismo e proteção à propriedade intelectual, zelando pela adequada proteção das inovações geradas pela comunidade interna e externa.',
    paragraph2: 'Definir as ações de inovação tecnológica nas esferas da ciência e da tecnologia, no âmbito do IFCE, em alinhamento com os campos do saber.',
    paragraph3: 'Estabelecer diretrizes e regras quanto ao processo de inovação tecnológica, criação e transferência de tecnologias, licenciamento, produção, distribuição e exploração.',
    paragraph4: 'Fomentar a inovação no IFCE, em âmbito científico e tecnológico, e o desenvolvimento de projetos de cooperação, visando à geração de produtos e processos inovadores.',
    paragraph5: 'Promover a criação e expansão de ambientes de inovação, como incubadoras, startups e parques tecnológicos, em parceria com entidades públicas e privadas.',
    paragraph6: 'Promover parcerias e buscar financiamento com órgãos governamentais, empresas e outras instituições para desenvolver a inovação.',
    paragraph7: 'Regulamentar o uso compartilhado de laboratórios, instrumentos e instalações do IFCE por pesquisadores e instituições externas, apoiando a pesquisa científica e tecnológica.',
    paragraph8: 'Promover e regular a transferência de tecnologia e inventos do IFCE ao setor produtivo local, nacional ou estrangeiro.',
  };

  constructor(private viewportScroller: ViewportScroller) {}

  ngAfterViewInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
