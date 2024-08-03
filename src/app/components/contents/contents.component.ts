import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule

@Component({
  selector: 'app-contents',
  standalone: true,
  templateUrl: './contents.component.html',
  imports: [CommonModule] 
})
export class ContentsComponent {
  contents = [
    {
      title: "Pesquisa",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, recusandae, repellendus vel distinctio nulla ut ipsam obcaecati perspiciatis quisquam, repellat animi debitis corrupti enim nisi amet ad iste? Quaerat, dolores!",
      linkText: "Saiba mais"
    },
    {
      title: "Extensão",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, recusandae, repellendus vel distinctio nulla ut ipsam obcaecati perspiciatis quisquam, repellat animi debitis corrupti enim nisi amet ad iste? Quaerat, dolores!",
      linkText: "Saiba mais"
    },
    {
      title: "Inovação",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, recusandae, repellendus vel distinctio nulla ut ipsam obcaecati perspiciatis quisquam, repellat animi debitis corrupti enim nisi amet ad iste? Quaerat, dolores!",
      linkText: "Saiba mais"
    },
    {
      title: "Pós-Graduação",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, recusandae, repellendus vel distinctio nulla ut ipsam obcaecati perspiciatis quisquam, repellat animi debitis corrupti enim nisi amet ad iste? Quaerat, dolores!",
      linkText: "Saiba mais"
    }
  ];
}
