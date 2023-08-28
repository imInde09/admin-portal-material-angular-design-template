import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
formData={
  name:'',
  email:'',
}
updatepassword={
  oldPassword:'',
  newPassword:'',
  confirmPassword:'',
}
  updateProfile(){
    console.log("update profile");
    console.log(this.formData);
  }
  updatePassword(){
    console.log("update password");
    console.log(this.updatepassword);
  }
}
