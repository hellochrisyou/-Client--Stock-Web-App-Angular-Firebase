import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { HistoryService } from './history.service';
describe('HistoryService', () => {
  let service: HistoryService;
  beforeEach(() => {
    const angularFirestoreStub = () => ({
      collection: path => ({
        add: () => ({ then: () => ({}) }),
        doc: () => ({ set: () => ({}), delete: () => ({}) })
      })
    });
    const authServiceStub = () => ({ userData: { email: {}, emaill: {} } });
    const matSnackBarStub = () => ({ open: (message, title, object) => ({}) });
    TestBed.configureTestingModule({
      providers: [
        HistoryService,
        { provide: AngularFirestore, useFactory: angularFirestoreStub },
        { provide: AuthService, useFactory: authServiceStub },
        { provide: MatSnackBar, useFactory: matSnackBarStub }
      ]
    });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(HistoryService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
