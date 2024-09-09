import { selectNameFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getIsLoading = (state) => state.contacts.isLoading;
export const getError = (state) => state.contacts.error;
export const getIsOpen = (state) => state.contacts.isOpen;
export const getId = (state) => state.contacts.id;

export const selectVisibleContacts = createSelector(
  [getContacts, selectNameFilter],
  (contacts, contactFilter) => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    );
  }
);
