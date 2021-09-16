import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  token = [
    {
      img:"assets/Images/about/AutoSalesWear.webp",
      title: 'AutoSalesWear (ASW)',
      subtitle: "Auto Sales Wear is a startup company that is working with an (undisclosed) printing company to create the 'highest quality shirts users can find'. These limited editions shirts will be truly authentic with a numbered, autographed certificate.",
      website: 'https://www.autosaleswear.com/',
      whitepaper: 'https://www.autosaleswear.com/whitepaper'
    },
    {
      img:"assets/Images/about/Roy.webp",
      title: 'Roy',
      subtitle: "Roy starts with the token used in the shopping malls and will extend to the use of music lessons and psychological counseling. The reason for this is to reduce speculation and drive real utility.",
      website: 'https://roycoin.co.kr/',
      whitepaper: 'https://roycoin.co.kr/wp-content/uploads/2018/09/white-paperRoy-1.3En-3.pdf'
    },
    {
      img:"assets/Images/about/img_1.png",
      title: 'BUNK',
      subtitle: "HTMLBunker is the first exchange in the world totally dedicated to HTMLCoin with more than 30 top pairs. HTMLBunker arose from the concept and need to contribute to the HTMLCoin community and crypto community as a whole.",
      website: 'https://htmlbunker.com/',
      whitepaper: ''
    },
    {
      img:"assets/Images/about/img_2.png",
      title: 'XOLA',
      subtitle: "A free-to-community project built using contract-oriented Solidity on the Althash platform. Designed to be a flexible, configurable, yet secure HRC20 Token Smart Contract with XOLA Protection Factor (Simulated Proof-of-Stake).",
      website: 'https://xoladev.github.io/',
      whitepaper: ''
    },
    {
      img:"assets/Images/about/BIFF.webp",
      title: 'BIFF/BIFD/BCDX',
      subtitle: "The Biffy family of tokens was created for fun. Initially, the fun was simply in the name. Since then, it has grown into the learning of contract programming, rewards in tokens, and rewards in htmlcoin.",
      website: 'http://biffytoken.site/token_factory.php',
      whitepaper: 'http://biffytoken.site/white_paper.php'
    },
    {
      img:"assets/Images/about/Photizo.webp",
      title: 'Photizo (PHO)',
      subtitle: "Photizo is an app focused on spreading bible knowledge amongst the wide crypto community. Users earn 'PHO' by answering questions correctly.",
      website: 'https://althash.org/',
      whitepaper: ''
    },
    {
      img:"assets/Images/about/Cryptic_Mag.webp",
      title: 'Cryptic Mag (MAG)',
      subtitle: "Involved in the redeeming of rewards found inside your Cryptic Magazine. To redeem your prize view the 'redeem' tab, then enter the code found inside your magazine along with your destination wallet.",
      website: 'https://althash.org/',
      whitepaper: ''
    },
    {
      img:"assets/Images/about/Codex.png",
      title: 'Codex (CDEX)',
      subtitle: "Codex token is used in the Codex ecosystem, primarily as an access token to VIP features on the Codex Wallet Bot.",
      website: 'https://codextoken.io/',
      whitepaper: 'https://e1087d92-cb3d-44ef-ae3a-57d3801a9a3c.filesusr.com/ugd/b6a441_93d42c270efb4e2fbe499c34c316f90f.pdf'
    },
    {
      img:"assets/Images/about/Rain.webp",
      title: 'Rain (RAIN)',
      subtitle: "Rain token was created to be utilized in testing of the 'Codex Wallet Bot'. 'RAIN' will also be earned in the future by using the / rain function, which will mine 1 RAIN token based on size of rain.",
      website: 'https://t.me/HRC20_Token_Room',
      whitepaper: ''
    },
    {
      img:"assets/Images/about/Love_Smile.webp",
      title: 'Love & Smile (LOVE / SMILE)',
      subtitle: "10 Smiles = 1 Love. And 1 Love = 1 HTMLCoin. Users get airdrops of Smile via codex bot, or you can also buy 5 smiles with 1 HTMLCoin. You can exchange Smile with Love and then You can Hold or exchange love with HTMLCoin. If you buy Smile that qty will be burned. If users donate again it will increase the value of Love.",
      website: 'https://t.me/smilenlove',
      whitepaper: ''
    },
    {
      img:"assets/Images/about/Super_Fun.webp",
      title: 'Super Fun (SFUN)',
      subtitle: "REWARD People for Joke Telling: Knock Knock Jokes, One-Liner, Riddles,Puns, Wisdom/Knowledge Q&A, Teasers, WITTY videos, memes & the Likes.",
      website: 'https://superfuntoken.com/',
      whitepaper: 'https://superfuntoken.com/wp-content/uploads/2020/06/SUPERFUN-TOKEN-WHITEPAPER2020-1.docx'
    },
    {
      img:"assets/Images/about/BURQ.webp",
      title: 'Al-Buraq (BURQ)',
      subtitle: "The main purpose of this token is to spread awareness of Holy Quran to Muslims. Also this token will be used for Al-Quran Online teachers. call centers and Individuals who are teaching online to students abroad and within country will be able to use this token to get their honorarium.",
      website: 'https://al-buraq.net/',
      whitepaper: 'https://al-buraq.net/whitepaper/'
    },
    {
      img:"assets/Images/about/SuperAble.webp",
      title: 'SuperAble (ABLE)',
      subtitle: "Farmers are given x amount of Token as a consolation for their  big contribution to Food Supply in their village & community. This token can be a souvenir/collection or you can use it as a Utility Token or coupon for discounts.",
      website: 'https://superable.net/',
      whitepaper: ''
    },
  ]

}
