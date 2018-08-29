import {
  Component,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'let-syntax';

  @ViewChild('with')
  templateWith: TemplateRef<any>;
  @ViewChild('without')
  templateWithout: TemplateRef<any>;

  constructor(
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this._viewContainerRef.createEmbeddedView(this.templateWith, {
      $implicit: 'tyapk'
    });
    this._viewContainerRef.createEmbeddedView(this.templateWithout, {
      $implicit: 'is awesome'
    });
  }
}
