import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefeiroApiService } from 'src/app/tarefeiro-api.service';

@Component({
  selector: 'app-show-tarefeiro',
  templateUrl: './show-tarefeiro.component.html',
  styleUrls: ['./show-tarefeiro.component.css']
})
export class ShowTarefeiroComponent {

  tarefeiroList$!:Observable<any[]>;
  tarefeiroTiposList$!:Observable<any[]>;
  tarefeiroTiposList:any=[];

  //Map para mostrar a associação entre as tabelas (FK)
  tarefeiroTiposMap:Map<number, string> = new Map()

  constructor(private service:TarefeiroApiService) {}

  ngOnInit(): void{
    this.tarefeiroList$               = this.service.getTarefaList();
    this.tarefeiroTiposList$          = this.service.getTarefaTiposList();
    this.refreshTarefeiroTiposMap();
  }

  //Propriedades
  modalTitle:string = '';
  activateAddEditTarefeiroComponent:boolean = false;
  tarefeiro:any;

  //Funcoes
  refreshTarefeiroTiposMap(){
    this.service.getTarefaTiposList().subscribe(data => {
      this.tarefeiroTiposList = data;

      for(let i = 0; i < data.length; i++){
        this.tarefeiroTiposMap.set(this.tarefeiroTiposList[i].id, this.tarefeiroTiposList[i].tarefaNome)
      }
    })
  }
  
  modalAdd(){
    this.tarefeiro = {
      id:0,
      status:null,
      comentario:null,
      tarefaTipoId:null
    }
    this.modalTitle = "Nova Tarefa";
    this.activateAddEditTarefeiroComponent = true;
  }

  modalEdit(item: any){
    this.tarefeiro = item;
    this.modalTitle = "Edição de tarefa"
    this.activateAddEditTarefeiroComponent = true;
  }

  delete(item:any){
    if (confirm(`Deseja realmente deletar a tarefa ${item.comentario}`)){
      this.service.deleteTarefa(item.id).subscribe(res => {
        let closeModalBtn = document.getElementById('add-edit-modal-close');
        
        if(closeModalBtn){
          closeModalBtn.click();
        }
  
        let showDeleteSucess = document.getElementById('delete-success-alert');
        
        if(showDeleteSucess){
          showDeleteSucess.style.display = "block";
        }
  
        setTimeout(() => {
          if(showDeleteSucess){
            showDeleteSucess.style.display = "none";
          }
        }, 4000);
      })
    }
  }

  modalClose(){
    this.activateAddEditTarefeiroComponent = false;
    this.tarefeiroList$ = this.service.getTarefaList();
  }
}
