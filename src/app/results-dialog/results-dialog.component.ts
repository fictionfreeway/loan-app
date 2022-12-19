/*
Title: results-dialog.component.ts
Author: William Watlington
Date: 17 December 2022
Description: results dialog component for loan calculator app
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-dialog',
  templateUrl: './results-dialog.component.html',
  styleUrls: ['./results-dialog.component.css']
})
export class ResultsDialogComponent implements OnInit {

  receivedInput: Array<Object>;

  constructor() { }

  ngOnInit(): void {
  }

}
