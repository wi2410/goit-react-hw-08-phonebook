import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../contacts/contactsOperations';

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactSuccessReducer = (state, action) => {
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(getActions('pending', pendingReducer))
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
