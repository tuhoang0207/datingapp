
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';

import { take } from 'rxjs';

import { Member } from 'src/app/_models/member';

import { User } from 'src/app/_models/user';

import { AccountService } from 'src/app/_services/account.service';

import { MembersService } from 'src/app/_services/members.service';

import { Directive,HostListener, ElementRef } from '@angular/core';

@Component({

  selector: 'app-member-detail',

  templateUrl: './member-detail.component.html',

  styleUrls: ['./member-detail.component.css']

})

export class MemberDetailComponent implements OnInit {

  member: Member = {} as Member;

  


  constructor(private memberService: MembersService,private route: ActivatedRoute, private el: ElementRef) {

  }


  ngOnInit(): void {

    this.loadMember();

  }


  loadMember() {
    var username = this.route.snapshot.paramMap.get('username');
    if (!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => {
        this.member = member;
      }
    })
  }

  activeTab : string = 'tab1'
  openTab(tabName: string): void {
    this.activeTab = tabName;
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
      (tabContents[i] as HTMLElement).style.display = "none";
    }
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
      (selectedTab as HTMLElement).style.display = "block";
    }
  }

  @HostListener('click')
  imageChange(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    const src = target.src;
    const prev = document.getElementById("preview") as HTMLImageElement;
    prev.src = src;
    
    const imageSlides = document.getElementsByClassName("img-slide");
    for (let i = 0; i < imageSlides.length; i++) {
      imageSlides[i].classList.remove("active");
    }
    
    target.parentElement?.classList.add("active");
  }

}