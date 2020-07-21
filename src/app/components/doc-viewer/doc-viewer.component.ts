import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss'],
})
export class DocViewerComponent implements OnInit {
  @Input('url') url: string;
  viewer = 'google';

  constructor() {}

  ngOnInit(): void {}
}
