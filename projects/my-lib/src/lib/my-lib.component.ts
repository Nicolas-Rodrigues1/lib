import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card class="card-container">
        <mat-card-header>
            <mat-card-title>Boas vindas</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form class="form-container">
                <mat-form-field appearance="outline">
                    <mat-label>User</mat-label>
                    <input matInput formControlName="login" placeholder="User" >
                </mat-form-field>
                <mat-form-field appearance="outline">
                    <mat-label>Password</mat-label>
                    <input type="password" matInput formControlName="password" placeholder="password" >
                </mat-form-field>
                <div class="login-button">
                    <button mat-stroked-button>Logar</button>
                </div>
            </form>
        </mat-card-content>
    </mat-card>
  `,
  styles: ``
})
export class MyLibComponent {

}
