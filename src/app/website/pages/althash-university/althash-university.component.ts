import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-althash-university',
  templateUrl: './althash-university.component.html',
  styleUrls: ['./althash-university.component.scss']
})
export class AlthashUniversityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    $('#thanksModal').modal('show');
  }
  closeModel(){
    $('#thanksModal').modal('hide');
  }
  
  openLink(Url:any){
    window.open(Url);
  }

  
}
