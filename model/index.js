const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.resolve('model/contacts.json')
const encoding = 'utf8'

const readContacts = async () => {
  const result = await fs.readFile(contactsPath, encoding)
  const contacts = JSON.parse(result)
  return contacts
}

const listContacts = async () => {
  const contacts = await readContacts()
  return contacts
}

const getContactById = async (contactId) => {
  const contacts = await readContacts()
  const [selectedContact] = contacts.filter(
    contact => contact.id === Number(contactId),
  )
  return selectedContact
}

function removeContact(contactId) { }

const addContact = async (body) => {}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
