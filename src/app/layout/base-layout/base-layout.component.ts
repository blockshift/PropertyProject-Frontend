import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { IPageData } from '../../interfaces/page-data';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { IAppSettings } from '../../interfaces/settings';
import { IMenuItem } from '../../interfaces/main-menu';
import * as SettingsActions from '../../store/actions/app-settings.actions';



@Component({
  selector: 'base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  loaded: boolean;
  pageData: IPageData;
  appSettings: IAppSettings;
  searchForm: FormGroup;
  searchData: any[];
  scrolled: boolean;


  constructor(
    public store: Store<IAppState>,
    public fb: FormBuilder,
    public httpSv: HttpService,
    public router: Router,
    public elRef: ElementRef
  ) {
    this.searchData = [];
    this.scrolled = false;

  }

  ngOnInit() {
    this.store.select('pageData').subscribe(data => {
      setTimeout(() => {
        this.pageData = data ? data : null;
        data.loaded ? this.loaded = true : null;
      });
    });
    this.store.select('appSettings').subscribe(settings => {
      settings ? this.appSettings = settings : null;
    });

    this.scrollToTop();
  }


  getSearchData(url: string) {
    this.httpSv.getData(url).subscribe(
      data => {
        this.getItemsRouters(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  getItemsRouters(data: IMenuItem[]) {
    let links: any[] = [];

    data.forEach((item: IMenuItem) => {
      if (!item.groupTitle) {
        if (item.sub) {
          this.deploySubItems(item, links);
        } else {
          links.push(item);
        }
      }
    });

    this.searchData = links;
  }

  deploySubItems(item: any, links) {
    item.sub.forEach((subItem) => {
      if (subItem.sub) {
        this.deploySubItems(subItem, links)
      } else {
        subItem.title = `${item.title} > ${subItem.title}`;
        links.push(subItem);
      }
    });
  }

  initSearchForm() {
    this.searchForm = this.fb.group({
      search: ''
    });
  }

  toggleSidebar(value: boolean) {
    this.store.dispatch(new SettingsActions.SidebarState(value));
  }

  onScroll(event: Event) {
    this.scrolled = event.srcElement.scrollTop > 0;
  }

  // scroll to page top
  scrollToTop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      const CONTAINER = this.elRef.nativeElement.querySelector('.main-content') || window;

      setTimeout(() => {
        CONTAINER.scrollTo(0, 0);
      });
    });
  }

}
