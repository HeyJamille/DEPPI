import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pos-graduacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pos-graduacao.component.html',
})
export class PosGraduacaoComponent {
  aboutExtensao = {
    title: 'Oque é a Pós Graduação?',
    paragraph: `Os <span class="text-[#2f9335] font-semibold">cursos de pós-graduação lato sensu</span> são voltados para aqueles que já concluíram o ensino superior e buscam atualização acadêmica ou profissional. Eles visam promover o aprimoramento das competências adquiridas na graduação, permitindo o desenvolvimento de novas habilidades e conhecimentos específicos que atendam às demandas do mercado e às necessidades de evolução na carreira.`
  };
  aboutMestrado = {
    title: 'Mestrados',
    paragraph1: `O <span class="text-[#2f9335] font-semibold">mestrado acadêmico</span> é destinado a todos que tenham concluído o ensino superior e desejam obter titulação com grau de mestre, por meio de estudos voltados para o ensino e pesquisa direcionados para a carreira acadêmica.`,
    paragraph2: `O <span class="text-[#2f9335] font-semibold">mestrado profissional</span> é voltado para quem já concluiu o ensino superior e deseja obter o título de mestre, focando em estudos e técnicas que aumentam a qualificação profissional e atendem à demanda do mercado.`
  };
  aboutDoutorado = {
    title: 'Doutorados',
    paragraph1: `Os <span class="text-[#2f9335] font-semibold">doutorados</span> são cursos de pós-graduação stricto sensu destinados a formar profissionais que desejam obter titulação com grau de doutor, com foco na carreira acadêmica e na área de inovação. `,
    paragraph2: 'No IFCE, esses cursos são ofertados em parceria com outras instituições que já tem programas de pós-graduação na área de interesse, por isso, são chamados de <span class="text-[#2f9335] font-semibold">doutorados interinstitucionais</span>.'
  };
}
