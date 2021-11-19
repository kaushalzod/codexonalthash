import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  news = [
    {
      title: 'The CDEXplorer is completed. A rebuilt version of the HTML explorer',
      dateAdded: 'June 2, 2020',
      link: 'http://cdexplorer.net/',
      image: 'assets/Images/news/CDEXplorer.webp'
    },
    {
      title: 'Graviex Lists CDEX with pairs in ETH, DOGE, & BTC ',
      dateAdded: 'April 2, 2020',
      link: 'https://graviex.net/markets/cdexdoge',
      image: 'assets/Images/news/Graviex_lists_CDEX.webp'
    },
    {
      title: 'Completion of the 5th Monthly Airdrop for VIPs',
      dateAdded: 'Mar. 31, 2020',
      link: 'https://twitter.com/Codex_HTML/status/1245094639570427906?s=20',
      image: 'assets/Images/news/Completion_of_the_5th_Monthly.webp'
    },
    {
      title: 'Completion of the 4th Monthly Airdrop for VIPs',
      dateAdded: 'Feb 27, 2020',
      link: 'https://twitter.com/Codex_HTML/status/1233156744760741894?s=20',
      image: 'assets/Images/news/Completion_of_the_4th_Monthly.webp'
    },
    {
      title: 'Completion of the 3rd Monthly Airdrop for VIPs',
      dateAdded: 'Jan. 30, 2020',
      link: 'https://twitter.com/Codex_HTML/status/1222920729831858176?s=20',
      image: 'assets/Images/news/Completion_of_the_3th_Monthly.webp'
    },
    {
      title: "'CDEX' Token gets Listed on STEX Cryptocurrency Exchange​",
      dateAdded: 'Jan. 25, 2020',
      link: 'https://twitter.com/StexExchangeR/status/1221052433033584641?s=20',
      image: 'assets/Images/news/STEX_Cryptocurrency_Exchange​.webp'
    },
    {
      title: "Monthly CodexWalletBot Updates on the 1st Thursday of each month!​",
      dateAdded: 'Jan. 1, 2020',
      link: 'https://twitter.com/Codex_HTML/status/1217463556045668353?s=20',
      image: 'assets/Images/news/Monthly_CodexWalletBot_Updates.webp'
    },
    {
      title: "Milestones for HTMLCoin in 2019",
      dateAdded: 'Jan. 1, 2020',
      link: 'https://twitter.com/HTMLCOIN/status/1212337237398097920?s=20',
      image: 'assets/Images/news/Milestones_for_HTMLCoin_in_2019.webp'
    },
    {
      title: "Completion of Second Ever Monthly Airdrop for VIPs",
      dateAdded: 'Dec. 28, 2019',
      link: 'https://twitter.com/Codex_HTML/status/1210917109569601536?s=20',
      image: 'assets/Images/news/Completion_of_Second_Ever_Monthly_Airdrop_for_VIPs.webp'
    },
    {
      title: "Release of 'CDEX' Monthly Airdrops for VIPs on the CodexWalletBot",
      dateAdded: 'Nov. 29, 2019',
      link: 'https://twitter.com/Codex_HTML/status/1200550841423400960?s=20',
      image: 'assets/Images/news/VIP_MONTHLY_AIRDROPS.webp'
    },
    {
      title: "'CDEX' gets listed on CoinMarketCap",
      dateAdded: 'Oct. 17, 2019',
      link: 'https://coinmarketcap.com/currencies/codex/',
      image: 'assets/Images/news/CDEX_Coinmarketcap.webp'
    },
    {
      title: "Althash University is Added to Codex Official Website",
      dateAdded: 'Oct. 1st, 2019',
      link: 'https://www.codexonalthash.com/althash-university-initiative',
      image: 'assets/Images/news/Althash_University_is_Added.webp'
    },
    {
      title: "Codex Freelance Forum is released",
      dateAdded: 'Sept. 15, 2019',
      link: 'https://www.codexonalthash.com/forum',
      image: 'assets/Images/news/Codex_Forum.webp'
    },
    {
      title: "'CodexWalletBot' Is Adopted By The Althash Community And Hits 350 Users",
      dateAdded: 'June 22, 2019',
      link: 'https://medium.com/@tonyazimmerman1980/codextoken-cdex-is-a-token-hrc-20-created-on-htmlcoins-blockchain-called-althash-7a149d37ef69',
      image: 'assets/Images/news/CodexWalletBot_Is_Adopted_By_The_Althash.webp'
    },
    {
      title: "Whitepaper And Roadmap are Completed",
      dateAdded: 'May 20, 2019',
      link: 'https://www.codexonalthash.com/roadmap',
      image: 'assets/Images/news/Whitepaper_And_Roadmap.webp'
    },
  ]

  openLink(Url:any){
    window.open(Url);
  }
  
  ngOnInit(): void {
  }

}
