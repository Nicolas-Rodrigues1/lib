import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginModel } from './login.model';

@Component({
  selector: 'ds2u-my-lib',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, ReactiveFormsModule],
  template: `
    <mat-card class="card-container">
        <mat-card-header>
            <mat-card-title>Boas vindas</mat-card-title>
            <h3>{{testInput}}</h3>
        </mat-card-header>
        <mat-card-content>
            <form class="form-container" [formGroup]="loginForm">
                <mat-form-field appearance="outline">
                    <mat-label>User</mat-label>
                    <input matInput formControlName="login" placeholder="User">
                </mat-form-field>
                <mat-form-field appearance="outline">
                    <mat-label>Password</mat-label>
                    <input type="password" matInput formControlName="password" placeholder="password" >
                </mat-form-field>
                <div class="login-button">
                    <button mat-stroked-button (click)="login()">Logar</button>
                </div>
            </form>
        </mat-card-content>
        <p>{{ checkFeature() }}</p>
        <button (click)="changeFeature()">Alterar feature</button>

    </mat-card>
  `,
  styles: ``
})
export class MyLibComponent implements OnInit{
  loginForm!: FormGroup;

  @Input() testInput: any;
  @Input() enableFeature: boolean = true;



  @Output('sentDataOutput')
  enviaDados: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login(){
    let login: LoginModel = new LoginModel(
      this.loginForm.value.login,
      this.loginForm.value.password
    );
    this.sentData()
  }

  changeFeature(){
    this.enableFeature = !this.enableFeature;  
  }

  sentData(){
    this.enviaDados.emit(this.loginForm.value)
  }

  checkFeature(): string {
    return this.enableFeature ? 'Feature is enabled' : 'Feature is disabled';
  }

}
