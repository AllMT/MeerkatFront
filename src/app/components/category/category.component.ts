import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { T3Service } from 'src/app/dapp/t3/t3.service';
import { TokenStateService } from 'src/app/dapp/token-state/token-state.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
  tokens: TokenStateService[];
  title: string;

  category: string;

  constructor(private T3: T3Service, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(p => 
      {
        this.category = p.category;
      });

      this.T3.walletInitalized.subscribe(initialized =>
        {
          if(!initialized)
          {
            return;
          }

          if(this.category.toLocaleLowerCase() === "art")
          {
            this.title = "Latest Art NFTs";
            this.T3.getTokensFromContract("art")
            .then(result => this.tokens = result);
          }
          else if(this.category.toLocaleLowerCase() === "latest")
          {
            this.title = "Latest NFTs";
            this.T3.getLatestTokensFromContract()
            .then(result => this.tokens = result);
          }
          else if(this.category.toLocaleLowerCase() === "music")
          {
            this.title = "Latest Music NFTs";
            this.T3.getTokensFromContract("music")
            .then(result => this.tokens = result);
          }
          else if(this.category.toLocaleLowerCase() === "domainnames")
          {
            this.title = "Latest Domain Names NFTs";
            this.T3.getTokensFromContract("domainnames")
            .then(result => this.tokens = result);
          }
          else if(this.category.toLocaleLowerCase() === "virtualworls")
          {
            this.title = "Latest Virtual World NFTs";
            this.T3.getTokensFromContract("virtualworls")
            .then(result => this.tokens = result);
          }
          else if(this.category.toLocaleLowerCase() === "tradingcards")
          {
            this.title = "Latest Trading Cards NFTs";
            this.T3.getTokensFromContract("tradingcards")
            .then(result => this.tokens = result);
          }
          else if(this.category.toLocaleLowerCase() === "collectibles")
          {
            this.title = "Latest Collectibles NFTs";
            this.T3.getTokensFromContract("collectibles")
            .then(result => this.tokens = result);
          }
          else if(this.category.toLocaleLowerCase() === "sports")
          {
            this.title = "Latest Sports NFTs";
            this.T3.getTokensFromContract("sports")
            .then(result => this.tokens = result);
          }
          else if(this.category.toLocaleLowerCase() === "utility")
          {
            this.title = "Latest Utilities NFTs";
            this.T3.getTokensFromContract("utility")
            .then(result => this.tokens = result);
          }
        })
  }
}
