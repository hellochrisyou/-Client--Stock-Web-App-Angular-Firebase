import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/core/service/http/http.service';
import * as GLOBAL from '@shared/const/url.const';
import { SearchHistory } from '@shared/interface/models';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { ColumnObject } from '@shared/interface/interface';
import { SEARCH_COL_OBJ } from '@shared/const/column.const';
import { SearchMapperService } from 'app/core/service/mapper/search-mapper.service';
import { HistoryService } from 'app/core/service/firebase/history.service';
import { AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'history-logic',
  templateUrl: './history-logic.component.html',
  styleUrls: ['./history-logic.component.scss']
})
export class HistoryLogicComponent implements OnInit {
  histories: SearchHistory[];

  isSearch: string = 'neither';
  searchCol: ColumnObject[] = SEARCH_COL_OBJ;
  
  constructor(
    private historyService: HistoryService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {    
     this.historyService.getAllHistory().valueChanges().pipe(map(data => data)).subscribe( value => {
      console.log('observable histories', value)
      this.histories = value;
    });
  }

  public clearHistory(): void {
    this.historyService.clearHistory();
    this.snackBar.open('Delete Search History', 'SUCCESS', {
    });
    this.router.navigateByUrl('search-stock');
  }
}
