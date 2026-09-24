import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo-filmes',
  imports: [FormsModule],
  templateUrl: './catalogo-filmes.html',
  styleUrl: './catalogo-filmes.css',
})
export class CatalogoFilmes {
  filmes: string[] = ['Em busca do código perdido', 'Em busca da ods', 'Como usar angular', 'getNome()', 'Ta no canvas'];
  selecionada = '';

  nomeFilme = '';
  
  adicionarItem(nomeFilme: string) {
  if (nomeFilme != ''){
    this.filmes.push(nomeFilme);
    nomeFilme = ' ';
  }
  else {
    alert('Digita ae irmão')
  }
  
  
}

favorito : boolean = true;
ativo : boolean = this.favorito

  contador: number = 0;
  incrementar() { this.contador++; }
  decrementar() { this.contador--; }

}

  
