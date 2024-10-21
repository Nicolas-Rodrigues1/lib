import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibComponent } from 'my-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'teste';
  login: any;
  
  public sendTest!: string;
  
  ngOnInit(): void {
    this.sendTest = "Test send"
  }

  getLogin(dados: any){
    this.login = dados
    console.log(this.login)
  }
}
