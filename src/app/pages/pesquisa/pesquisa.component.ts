import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pesquisa.component.html',
})

export class PesquisaComponent {
  aboutPesquisa = {
    title: 'Oque é a Pesquisa?',
    paragraph1: `A <span class="text-[#2f9335] font-semibold">pesquisa institucional</span> é essencial para o crescimento de nossa comunidade, envolvendo docentes, discentes, técnicos administrativos e a sociedade em geral. A <span class="text-[#2f9335] font-semibold">PRPI</span> tem a função de promover e orientar as ações de pesquisa para garantir um desenvolvimento harmonioso.`,
    paragraph2:`No <span class="text-[#2f9335] font-semibold">IFCE</span>, como Instituto de Tecnologia, a pesquisa acadêmica nos laboratórios se destaca. Nesse cenário, iniciativas internas e externas têm focado na transferência de produtos, protótipos e processos para o mercado.`,
  };
  aboutGestor = {
    title: 'Gestor de Pesquisa',
    paragraph1: `Os <span class="text-[#2f9335] font-semibold">gestores de pesquisa, pós-graduação e inovação</span> coordenam essas atividades em seus campus junto com a equipe da PRPI.`,
    paragraph2:'A representação pode variar entre chefes de departamentos, diretores ou coordenadores de pesquisa, conforme a estrutura do campus.',
    paragraph3: `Os <span class="text-[#2f9335] font-semibold">gestores dos campi do IFCE</span> promovem ações de pesquisa, pós-graduação e inovação e alinham-se às políticas da PRPI.`,
  };
  aboutAtribGestor = {
    title: 'Atribuições do Gestor',
    paragraph1: `<span class="text-[#2f9335] font-semibold">Divulgar informações</span> sobre pesquisa, pós-graduação e inovação no IFCE e com instituições de fomento como CNPQ e CAPES.`,
    paragraph2: `<span class="text-[#2f9335] font-semibold">Organizar e estimular</span> as ações de pesquisa e inovação no campus. `,
    paragraph3: `<span class="text-[#2f9335] font-semibold">Organizar eventos e reuniões</span> de pesquisa e estimular a participação do IFCE em divulgação científica e comissões.`,
  };

  constructor(private viewportScroller: ViewportScroller) {}

  ngAfterViewInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
  
