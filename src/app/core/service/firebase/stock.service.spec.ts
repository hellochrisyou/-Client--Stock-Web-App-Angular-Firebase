import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Stock } from '@shared/interface/models';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { StockService } from './stock.service';
describe('StockService', () => {
  let service: StockService;
  beforeEach(() => {
    const angularFirestoreStub = () => ({
      collection: path => ({
        add: () => ({ then: () => ({}) }),
        doc: () => ({ set: () => ({}), delete: () => ({}) })
      })
    });
    const stockStub = () => ({
      symbol: {},
      exchange: {},
      open: {},
      low: {},
      high: {},
      latestPrice: {},
      change: {},
      changePercent: {},
      week52Low: {},
      week52High: {},
      ytdChange: {},
      uId: {},
      name: {}
    });
    const authServiceStub = () => ({ userData: { email: {} } });
    const matSnackBarStub = () => ({ open: (message, title, object) => ({}) });
    const angularFireAuthStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        StockService,
        { provide: AngularFirestore, useFactory: angularFirestoreStub },
        { provide: AuthService, useFactory: authServiceStub },
        { provide: MatSnackBar, useFactory: matSnackBarStub },
        { provide: AngularFireAuth, useFactory: angularFireAuthStub }
      ]
    });
    service = TestBed.get(StockService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
