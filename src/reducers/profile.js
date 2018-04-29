import {
  UPDATE_PROFILE_BIO
} from '../actions/profile'

const initialState = {
	bio: null
}


export default function reducer(state = initialState, action) {

  switch (action.type) {

	  case UPDATE_PROFILE_BIO:

	    return {
	      bio: action.bio
	    }

	  default:
	    return state
	  }

}
