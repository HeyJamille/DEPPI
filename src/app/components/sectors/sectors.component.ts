import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule

@Component({
  selector: 'app-sectors',
  standalone: true,
  templateUrl: './sectors.component.html',
  imports: [CommonModule] 
})
export class SectorsComponent {
  sector = [
    {
      title: "Pesquisa",
      description: "Fomentamos a pesquisa científica e acadêmica, promovendo a atualização sistemática de dados e a divulgação por meio de periódicos.",
      linkText: "Saiba mais"
    },
    {
      title: "Extensão",
      description: "Promovemos a interação entre o Instituto e a comunidade, oferecendo cursos e atividades de extensão para compartilhar conhecimento e tecnologia.",
      linkText: "Saiba mais"
    },
    {
      title: "Inovação",
      description: "Incentivamos a pesquisa e a implementação de novas tecnologias, promovendo a inovação no Instituto e no mercado.",
      linkText: "Saiba mais"
    },
    {
      title: "Pós-Graduação",
      description: "Oferecemos cursos de pós-graduação para aprofundar conhecimentos e preparar profissionais para novos desafios no mercado.",
      linkText: "Saiba mais"
    }
  ];
}
