import people from './people.json';

const initialstate = {
  people,
  detailView: false,
  personSelected: null,
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case 'SELECTED_PERSON':
      return {
        ...state,
        detailView: true,
        personSelected: action.payload
      }
    case 'NONE_SELECTED':
      return {
        ...state,
        detailView: false,
        personSelected: null
      }
    default:
      return state;
  }
}