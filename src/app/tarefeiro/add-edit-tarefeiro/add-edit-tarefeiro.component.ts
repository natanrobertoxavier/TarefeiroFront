import { Component, Input, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';
import { TarefeiroApiService } from 'src/app/tarefeiro-api.service';

@Component({
  selector: 'app-add-edit-tarefeiro',
  templateUrl: './add-edit-tarefeiro.component.html',
  styleUrls: ['./add-edit-tarefeiro.component.css']
})

export class AddEditTarefeiroComponent implements OnInit{
  
  tarefaList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  tarefaTipoList$!: Observable<any[]>;

  constructor(private service:TarefeiroApiService) {}

  @Input() tarefa:any;
  id:number = 0;
  status: string = "";
  comentario: string = "";
  tarefaTipoId!: number;

  ngOnInit(): void{
    this.id               = this.tarefa.id;
    this.status           = this.tarefa.status;
    this.comentario       = this.tarefa.comentario;
    this.tarefaTipoId     = this.tarefa.tarefaTipoId;
    this.statusList$      = this.service.getStatusList();
    this.tarefaTipoList$  = this.service.getTarefaTiposList();
    this.tarefaList$      = this.service.getTarefaList();
  }

  //funcoes
  addTarefa(){
    let tarefa = {
      status        :this.status,
      comentario    :this.comentario,
      tarefaTipoId  :this.tarefaTipoId
    }

    this.service.addTarefa(tarefa).subscribe(res => {
      let closeModalBtn = document.getElementById('add-edit-modal-close');
      
      if(closeModalBtn){
        closeModalBtn.click();
      }

      let showAddSucess = document.getElementById('add-success-alert');
      
      if(showAddSucess){
        showAddSucess.style.display = "block";
      }

      setTimeout(() => {
        if(showAddSucess){
          showAddSucess.style.display = "none";
        }
      }, 4000);
    })
  }

  updateTarefa(){
    let tarefa = {
      id            :this.id,
      status        :this.status,
      comentario    :this.comentario,
      tarefaTipoId  :this.tarefaTipoId
    }

    let id: number = this.id;

    this.service.updateTarefa(id, tarefa).subscribe(res => {
      let closeModalBtn = document.getElementById('add-edit-modal-close');
      
      if(closeModalBtn){
        closeModalBtn.click();
      }

      let showUpdateSucess = document.getElementById('update-success-alert');
      
      if(showUpdateSucess){
        showUpdateSucess.style.display = "block";
      }

      setTimeout(() => {
        if(showUpdateSucess){
          showUpdateSucess.style.display = "none";
        }
      }, 4000);
    })
  }
}
