import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class hijoComponent implements OnInit {
  @Input() contador:number;
  @Output() contadorCambio= new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  multiplicar(){
    this.contador*=2
    this.contadorCambio.emit(this.contador);
  }
  dividir(){
    this.contador/=2
    this.contadorCambio.emit(this.contador);
  }
  resetAll(event){
    this.contador=event;
    this.contadorCambio.emit(this.contador);
  }

}