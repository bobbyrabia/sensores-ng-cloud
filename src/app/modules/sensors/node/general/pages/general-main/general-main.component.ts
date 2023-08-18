import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-general-main',
  templateUrl: './general-main.component.html',
  styleUrls: ['./general-main.component.scss']
})
export class GeneralMainComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit(): void {}
    public navigateToPages(page: 'general' | 'drone' ) {
        this.router.navigateByUrl(`/dashboard/${page}`);
    }
}
