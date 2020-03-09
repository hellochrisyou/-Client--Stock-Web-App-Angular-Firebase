import { TestBed } from '@angular/core/testing';
import { NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    const ngZoneStub = () => ({});
    const angularFireAuthStub = () => ({
      authState: { pipe: () => ({}), subscribe: () => ({}) },
      createUserWithEmailAndPassword: (email, password) => ({
        then: () => ({ catch: () => ({}) })
      }),
      signInWithPopup: provider => ({ then: () => ({}) }),
      signOut: () => ({ then: () => ({}) }),
      signInWithEmailAndPassword: (email, password) => ({
        then: () => ({ catch: () => ({}) })
      })
    });
    const angularFirestoreStub = () => ({
      doc: arg => ({ valueChanges: () => ({}), set: () => ({}) })
    });
    const matDialogStub = () => ({
      open: (confirmComponent, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) })
      })
    });
    const matSnackBarStub = () => ({ open: (string, string1, object) => ({}) });
    const routerStub = () => ({
      navigateByUrl: string => ({}),
      navigate: array => ({})
    });
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: NgZone, useFactory: ngZoneStub },
        { provide: AngularFireAuth, useFactory: angularFireAuthStub },
        { provide: AngularFirestore, useFactory: angularFirestoreStub },
        { provide: MatDialog, useFactory: matDialogStub },
        { provide: MatSnackBar, useFactory: matSnackBarStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    service = TestBed.get(AuthService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('signOut', () => {
    it('makes expected calls', () => {
      // tslint:disable-next-line: deprecation
      const angularFireAuthStub: AngularFireAuth = TestBed.get(AngularFireAuth);
      // tslint:disable-next-line: deprecation
      const routerStub: Router = TestBed.get(Router);
      spyOn(angularFireAuthStub, 'signOut').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      service.signOut();
      expect(angularFireAuthStub.signOut).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
