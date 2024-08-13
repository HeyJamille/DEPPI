import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})

export class AboutComponent {
  about = {
    title: 'Sobre o DEPPI',
    description: 'O Departamento de Extensão, Pesquisa, Pós-Graduação e Inovação (DEPPI) tem como objetivo fomentar a pesquisa, extensão e as novas tecnologias, a busca da atualização sistemática de dados da Pesquisa e da Inovação Tecnológica, divulgando-as por meio de periódicos e incentivando a ética na pesquisa do Instituto, bem como promover a interface do IFCE, com empresas e entidades, para implantação de cursos e atividades da extensão na área de atuação do IFCE.',
  };
}