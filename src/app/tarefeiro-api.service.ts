import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefeiroApiService {

  readonly tarefeiroAPIUrl = "https://localhost:7268/api"

  constructor(private http:HttpClient) { }

  //#region Tarefas
  getTarefaList():Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl + `/tarefas`)
  }

  addTarefa(data:any){
    return this.http.post(this.tarefeiroAPIUrl + `/tarefas`, data)
  }

  getTarefa(id:number|string){
    return this.http.get<any>(this.tarefeiroAPIUrl + `/tarefas/${id}`)
  }

  updateTarefa(id:number|string, data:any){
    return this.http.put(this.tarefeiroAPIUrl + `/tarefas/${id}`, data)
  }

  deleteTarefa(id:number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/tarefas/${id}`);
  }
  //#endregion

  //#region TarefaTipos
  getTarefaTiposList():Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl + `/tarefatipos`)
  }

  addTarefaTipos(data:any){
    return this.http.post(this.tarefeiroAPIUrl + `/tarefatipos`, data)
  }

  getTarefaTipos(id:number|string){
    return this.http.get<any>(this.tarefeiroAPIUrl + `/tarefatipos/${id}`)
  }

  updateTarefaTipos(id:number|string, data:any){
    return this.http.put(this.tarefeiroAPIUrl + `/tarefatipos/${id}`, data)
  }

  deleteTarefaTipos(id:number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/tarefatipos/${id}`);
  }
  //#endregion

    //#region Status
    getStatusList():Observable<any[]>{
      return this.http.get<any>(this.tarefeiroAPIUrl + `/status`)
    }
  
    addStatus(data:any){
      return this.http.post(this.tarefeiroAPIUrl + `/status`, data)
    }
  
    getStatus(id:number|string){
      return this.http.get<any>(this.tarefeiroAPIUrl + `/status/${id}`)
    }

    updateStatus(id:number|string, data:any){
      return this.http.put(this.tarefeiroAPIUrl + `/status/${id}`, data)
    }
  
    deleteStatus(id:number|string){
      return this.http.delete(this.tarefeiroAPIUrl + `/status/${id}`);
    }
    //#endregion

}
