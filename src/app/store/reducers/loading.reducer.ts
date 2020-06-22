import { LoadingActions } from './../actions/loading.actions';
import { ILoadingState, initialLoadingState } from 'src/app/store/states';
import { fromLoadingActions } from 'src/app/store/actions';

export const loadingReducer = (state = initialLoadingState, action: fromLoadingActions.LoadingActions): ILoadingState => {
  switch(action.type) {
    case fromLoadingActions.ELoadingActions.STARTLOADING:
      console.log('started loading');
      return {...state, isLoading: true}

    case fromLoadingActions.ELoadingActions.FINISHEDLOADING:
      console.log('started loading');
      return {...state, isLoading: false}

    default:
      return state;
  }
};
