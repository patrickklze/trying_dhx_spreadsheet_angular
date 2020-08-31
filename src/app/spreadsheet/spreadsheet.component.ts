import { Component, ElementRef, Input, AfterViewInit, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Spreadsheet } from 'dhx-spreadsheet';
import './codebase/spreadsheet.css';

@Component({
  selector: 'app-spreadsheet',
  template: `<div #widget class='widget-box-wide'></div>`
})
export class SpreadsheetComponent implements AfterViewInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  spreadsheet;

  @Input() toolbar: string[];
  @Input() menu: boolean;
  @Input() editLine: boolean;
  @Input() rowsCount: number;
  @Input() colsCount: number;


  ngAfterViewInit() {
    this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
      toolbar: this.toolbar,
      menu: this.menu,
      editLine: this.editLine,
      rowsCount: this.rowsCount,
      colsCount: this.colsCount,
    });
  }

  ngOnDestroy() {
    this.spreadsheet.destructor();
  }
}
