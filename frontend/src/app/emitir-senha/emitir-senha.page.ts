import { Component } from '@angular/core';

interface TypePassword {
  sigla: string;
  desc: string;
  icon: string;
  colorClass: 'red' | 'blue' | 'green';
}

@Component({
  selector: 'app-emitir-senha',
  templateUrl: './emitir-senha.page.html',
  styleUrls: ['./emitir-senha.page.scss'],
  standalone: false,
})
export class EmitirSenhaPage {
  typesPassword: TypePassword[] = [
    { sigla: 'SP', desc: 'Prioritária', icon: 'person', colorClass: 'red' },
    { sigla: 'SE', desc: 'Retirada de Exames', icon: 'flask', colorClass: 'blue' },
    { sigla: 'SG', desc: 'Geral', icon: 'people', colorClass: 'green' },
  ];

  selecionarSenha(item: TypePassword) {
    console.log('Senha selecionada:', item);
  }
}