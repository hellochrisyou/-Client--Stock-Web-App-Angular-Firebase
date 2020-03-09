import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from 'app/core/service/http/http.service';
import * as GLOBAL from '@shared/const/url.const';
import { SearchHistory } from '@shared/interface/models';

import { ColumnObject } from '@shared/interface/interface';
import { SEARCH_COL_OBJ } from '@shared/const/column.const';
import { SearchMapperService } from 'app/core/service/mapper/search-mapper.service';
import { HistoryService } from 'app/core/service/firebase/history.service';
import { AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmitService } from 'app/core/service/emit/emit.service';
import { HistoryMapperService } from 'app/core/service/mapper/history-mapper.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'history-logic',
  templateUrl: './history-logic.component.html',
  styleUrls: ['./history-logic.component.scss']
})
export class HistoryLogicComponent implements OnInit {
  histories: SearchHistory[] = [];

  isSearch = 'neither';
  searchCol: ColumnObject[] = SEARCH_COL_OBJ;

  constructor(
    private historyService: HistoryService,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private emitService: EmitService,
    private historyMapperService: HistoryMapperService
  ) { }

  ngOnInit() {
    this.historyService.getAllHistory().valueChanges().pipe(map(data => data)).subscribe(data => {
      this.histories = this.historyMapperService.mapHistoryArray(data);
      this.changeDetectorRefs.detectChanges();
      this.emitService.refreshTable();
    });
  }

  public clearHistory(): void {
    this.historyService.clearHistory();
    this.snackBar.open('Delete Search History', 'SUCCESS', {
    });
  }
}
