import people from './people.json';

const initialstate = {
  people,
}

export default (state = initialstate, action) => {
  switch(action.type) {
    default:
      return state;
  }
}