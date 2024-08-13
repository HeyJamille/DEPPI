import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pesquisa.component.html',
})

export class PesquisaComponent {
  aboutPesquisa = {
    title: 'Oque é a Pesquisa?',
    paragraph1: 'A pesquisa institucional é essencial para o crescimento de nossa comunidade, envolvendo docentes, discentes, técnicos administrativos e a sociedade em geral. A PRPI tem a função de promover e orientar as ações de pesquisa para garantir um desenvolvimento harmonioso.',
    paragraph2:'No IFCE, como Instituto de Tecnologia, a pesquisa acadêmica nos laboratórios se destaca. Nesse cenário, iniciativas internas e externas têm focado na transferência de produtos, protótipos e processos para o mercado.',
  };
  aboutGestor = {
    title: 'Gestor de Pesquisa',
    paragraph1: 'Os gestores de pesquisa, pós-graduação e inovação coordenam essas atividades em seus campus junto com a equipe da PRPI.',
    paragraph2:'A representação pode variar entre chefes de departamentos, diretores ou coordenadores de pesquisa, conforme a estrutura de cada campus.',
    paragraph3: 'Os gestores dos campi do IFCE promovem ações de pesquisa, pós-graduação e inovação e alinham-se às políticas da PRPI.',
  };
  aboutAtribGestor = {
    title: 'Atribuições do Gestor',
    paragraph1: 'Divulgar informações sobre pesquisa, pós-graduação e inovação no IFCE e com instituições de fomento como CNPQ e CAPES.',
    paragraph2: 'Organizar e estimular as ações de pesquisa e inovação no campus. ',
    paragraph3: 'Organizar eventos e reuniões de pesquisa e estimular a participação do IFCE em divulgação científica e comissões.',
  };
}