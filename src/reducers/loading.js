import {
  START_LOADING,
  END_LOADING
} from '../actions/loading';


const initialState = {
	loading: false
}


export default function reducer(state = initialState, action) {

  switch (action.type) {

	  case START_LOADING:

	    return {
	      loading: true
	    }

	  case END_LOADING:

	  	return {
	  	  loading: false
	  	}


	  default:
	    return state
	  }

}
