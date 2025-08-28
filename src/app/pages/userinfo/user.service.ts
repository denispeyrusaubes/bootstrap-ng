import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // ça veut dire que ce service est accessible partout dans l’app
})
export class UserService {
  private userData: any = null; // ici on va garder l’utilisateur

  setUser(data: any) {
    this.userData = data; // on stocke les infos
  }

  getUser() {
    return this.userData; // on renvoie les infos
  }
}
// ce fichier sert a garder les info lors de l'inscription et de l'es renvoyé par la suite a la page userinfo