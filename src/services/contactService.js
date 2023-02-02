import axios from "axios";

const SERVER_URL = "https://contact-manager-dc5eb-default-rtdb.firebaseio.com";

// @desc Get All Contacts

export const getAllContacts = () => {
  const url = `${SERVER_URL}/contacts.json`;

  return axios.get(url);
};

// @desc Get Contact With Contact ID

export const getContact = (contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}.json`;
  return axios.get(url);
};

// @desc  Get All Groups

export const getAllGroups = () => {
  const url = `${SERVER_URL}/groups.json`;
  return axios.get(url);
};

// @desc  Get Group Name With Group ID

export const getGroup = (groupId) => {
  const url = `${SERVER_URL}/groups/${groupId}.json`;
  return axios.get(url);
};

// @desc  Create New Contact

export const createContact = (contact) => {
  const url = `${SERVER_URL}/contacts.json`;
  return axios.post(url, contact);
};

// @desc  Update Contact

export const updateContact = (contact, contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}.json`;
  return axios.put(url, contact);
};

// @desc  Delete Contact

export const deleteContact = (contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}.json`;
  return axios.delete(url);
};
