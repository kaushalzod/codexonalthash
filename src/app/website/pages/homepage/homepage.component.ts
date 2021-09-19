import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  slide=1;
  changeSlide(num:any){
    this.slide=num
    console.log(this.slide)
  }

  ngOnInit(): void {

   
  }

  owlNext(item:any) {
    item.next([200]);
  }
  owlPrev(item:any) {
    item.previous([200]);
  }

  submitForm(){
    $('#exchangeModal').modal('show');
  }
  closeModel(){
    $('#exchangeModal').modal('hide');
  }
   profileCarousel: any = {
    loop: false,
    navSpeed: 700,
    nav: false,
    dots:false,
    margin:50,
    items:3,
    stagePadding:40,
    slideTransition: 'ease-out',
    
    responsiveClass: true,
    responsive: {
    
      380:{
        items: 1,
        stagePadding:30
      },
      500:{
        items: 1,
        stagePadding:70
      },
      600: {
        items: 2,
        stagePadding:90
      },
      991:{
        items:3,
        stagePadding:80
      },
      1200:{
        items:3,
        stagePadding:150
      }
    },
}


  roadmap1 = [
    {
     img:'assets/roadmap/logo.svg',
     date:'March 2019',
     text:'Codex is created'
  },
  {
    img:'assets/roadmap/people.svg',
    date:'April 2019',
    text:'Codex Team is hired'
 },
 {
  img:'assets/roadmap/bot.svg',
  date:'May 2019',
  text:'Release of Codex Tip Bot'
},
{
  img:'assets/roadmap/html.svg',
  date:'June 2019',
  text:'HTML Coin main group and community groups start using CDEX Tip Bot'
},
{
  img:'assets/roadmap/work.svg',
  date:'July 2019',
  text:'Release of Codex Freelance Coding platform'
},
{
  img:'assets/roadmap/tune.svg',
  date:'August 2019',
  text:'Fine tuning of Platform and Tip bot'
},
{
  img:'assets/roadmap/rise.svg',
  date:'September 2019',
  text:'Ecosystem of programmers using CDEX and HTML emerges CDEX programming competitions begin'
},
{
  img:'assets/roadmap/tool.svg',
  date:'Oct 2019 - Nov 2019',
  text:'Fine tuning of tools/programming competitions on platform'
},
{
  img:'assets/roadmap/bot2.svg',
  date:'Dec 2019 - Dec 2020',
  text:'Creation of bots using AI'
},
  ]

  roadmap2 = [
    {
     img:'assets/roadmap/bot.svg',
     date:' Nov - Dec 2020',
     text:'Update Codex Wallet Bot'
  },
  {
    img:'assets/roadmap/work.svg',
    date:'Jan-Feb 2021',
    text:'Release Codex WorkPlace Job Platform'
 },
 {
  img:'assets/roadmap/setting.svg',
  date:'Mar-Apr 2021',
  text:'Build Codex Platform Utility'
},
{
  img:'assets/roadmap/mike.svg',
  date:'May-June 2021',
  text:'Marketing Campaign'
},
{
  img:'assets/roadmap/bot.svg',
  date:'July-Aug 2021',
  text:'Update Codex Wallet Bot'
},
{
  img:'assets/roadmap/money.svg',
  date:'Sept-Oct 2021',
  text:'Development on Codex Forex Platform Begins'
},
{
  img:'assets/roadmap/money.svg',
  date:'Nov-Dec 2021',
  text:'Continue Codex Forex Platform Development'
},
{
  img:'assets/roadmap/globe.svg',
  date:'Jan-June 2022',
  text:'Global Crypto Marketing Tour'
},
{
  img:'assets/roadmap/handshake.svg',
  date:'July - Dec 2022',
  text:'Establish Global Institutional Partners'
},
  ]
}
