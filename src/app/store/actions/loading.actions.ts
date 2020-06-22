import { Action } from '@ngrx/store';

export enum ELoadingActions {
  STARTLOADING = 'Start loading',
  FINISHEDLOADING = 'Finished loading'
}

export class StartLoading implements Action {
  readonly type = ELoadingActions.STARTLOADING;
}

export class FinishedLoading implements Action {
  readonly type = ELoadingActions.FINISHEDLOADING;
}

export type LoadingActions = StartLoading | FinishedLoading;
