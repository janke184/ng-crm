import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    public snackBar: MatSnackBar
  ) { }

  notify(message: string) {
    
    this.snackBar.open(message, '', {
      duration: 2000
    })

  }

}
