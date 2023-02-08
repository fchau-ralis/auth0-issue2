import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

declare var decibelInsight: any;
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  public butterContent: any;
  private readonly PAGE_SLUG: string = 'error';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
