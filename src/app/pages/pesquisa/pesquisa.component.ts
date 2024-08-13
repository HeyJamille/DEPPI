import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutComponent } from '../../components/about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AboutComponent, CommonModule],
  templateUrl: './pesquisa.component.html',
})

export class PesquisaComponent {
  aboutPesquisa = {
    title: 'Oque é a Pesquisa?',
    paragraph1: 'A pesquisa institucional é um dos pilares que suportam a evolução de nossa comunidade (docentes, discentes, técnicos administrativos e toda a sociedade).',
    paragraph2:'A PRPI existe para fomentar e direcionar as ações de pesquisa para que haja harmonia nessa evolução.',
    paragraph3: 'Como Instituto de Tecnologia, o IFCE se destaca na forte aplicação da pesquisa acadêmica desenvolvida em seus laboratórios. Neste contexto, ações que objetivam a transferência de produtos, protótipos e/ou processos para o mercado tem sido alvo de diversas iniciativas internas bem como na busca de fomento externo.',
  };
  aboutGestor = {
    title: 'Gestores',
    paragraph1: 'Os gestores de pesquisa, pós-graduação e inovação coordenam essas atividades em seus campus junto com a equipe da PRPI.',
    paragraph2:'A representação pode variar entre chefes de departamentos, diretores ou coordenadores de pesquisa, conforme a estrutura de cada campus.',
    paragraph3: 'Os gestores dos campi do IFCE promovem ações de pesquisa, pós-graduação e inovação e alinham-se às políticas da PRPI.',
  };
  aboutAtribGestor = {
    title: 'Atribuições do gestor do DEPPI',
    paragraph1: 'Divulgar informações sobre pesquisa, pós-graduação e inovação no IFCE e com instituições de fomento como CNPQ e CAPES.',
    paragraph2: 'Organizar e estimular as ações de pesquisa e inovação no campus. ',
    paragraph3: 'Organizar eventos e reuniões de pesquisa e estimular a participação do IFCE em divulgação científica e comissões.',
    paragraph4: 'Incentivar a publicação de pesquisas do IFCE em periódicos científicos.',
  };

}