import React, { useState, Fragment } from "react"

import { nanoid } from "nanoid"

import data from "./mock-data.json"
import EdittableRow from "./Table/EdittableRow"
import ReadOnlyRow from "./Table/ReadOnlyRow"
const Users = (): React.ReactElement => {
    const [contacts, setContacts] = useState<ContactObject[]>(data)
    const [addFormData, setAddFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    })
    const [editFormData, setEditFormData] = useState<ContactObject>({
        id: 0,
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    })
    const [editContactId, setEditContactId] = useState<null | number>(null)
    const handleAddFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        const fieldName = event.target.getAttribute("name")
        const fieldValue = event.target.value
        const newFormData = { ...addFormData }
        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
    }
    const handleEditFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        const fieldName = event.target.getAttribute("name")
        const fieldValue = event.target.value
        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue
        setEditFormData(newFormData)
    }
    const handleAddFormSubmit = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,
        }
        const newContacts = [...contacts, newContact]
        setContacts(newContacts)
    }
    const handleEditFormSubmit = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
        }
        const newContacts = [...contacts]
        const index = contacts.findIndex((contact) => contact.id === editContactId)
        newContacts[index] = editedContact
        setContacts(newContacts)
        setEditContactId(null)
    }
    const handleEditClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        contact: ContactObject
    ): void => {
        event.preventDefault()
        setEditContactId(contact.id)
        const formValues = {
            id: contact.id,
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        }
        setEditFormData(formValues)
    }
    const handleCancelClick = (): void => {
        setEditContactId(null)
    }
    const handleDeleteClick = (contactId: number): void => {
        const newContacts = [...contacts]
        const index = contacts.findIndex((contact) => contact.id === contactId)
        newContacts.splice(index, 1)
        setContacts(newContacts)
    }
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div>
            <input
                className=" placeholder-gray-600 focus:placeholder-gray-500 my-2 bg-white p-1  border border-gray-200 rounded"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <form onSubmit={handleEditFormSubmit}>
                <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
                    <thead>
                        <tr className="text-left border-b border-gray-300">
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Address</th>
                            <th className="px-4 py-3">Phone Number</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Actions </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-700 border-b border-gray-600">
                        {contacts
                            .filter((val) => {
                                if (searchTerm === "") {
                                    return val
                                } else if (
                                    val.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    val.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    val.phoneNumber
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    val.email.toLowerCase().includes(searchTerm.toLowerCase())
                                ) {
                                    return val
                                }
                            })
                            .map((contact: ContactObject, index) => (
                                <Fragment key={index}>
                                    {editContactId === contact.id ? (
                                        <EdittableRow
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}
                                        />
                                    ) : (
                                        <ReadOnlyRow
                                            key={index}
                                            contact={contact}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                        />
                                    )}
                                </Fragment>
                            ))}
                    </tbody>
                </table>
            </form>

            <h2 className="text-blue-500 font-semibold .text-lg ml-5 mb-2 leading-none">
                {" "}
                Add a Contact{" "}
            </h2>
            <form onSubmit={handleAddFormSubmit} className="w-9/12 flex space-x-6 ml-8">
                <input
                    className=" placeholder-gray-600 focus:placeholder-gray-500 my-2 bg-white p-1  border border-gray-200 rounded"
                    type="text"
                    name="fullName"
                    placeholder="Enter a name ..."
                    onChange={handleAddFormChange}
                />
                <input
                    className=" placeholder-gray-600 focus:placeholder-gray-500 my-2 bg-white p-1  border border-gray-200 rounded"
                    type="text"
                    name="address"
                    placeholder="Enter a address ..."
                    onChange={handleAddFormChange}
                />
                <input
                    className=" placeholder-gray-600 focus:placeholder-gray-500 my-2 bg-white p-1  border border-gray-200 rounded"
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter a phoneNumber ..."
                    onChange={handleAddFormChange}
                />
                <input
                    className=" placeholder-gray-600 focus:placeholder-gray-500 my-2 bg-white p-1  border border-gray-200 rounded"
                    type="email"
                    name="email"
                    placeholder="Enter a email ..."
                    onChange={handleAddFormChange}
                />
                <button
                    type="submit"
                    className="shadow-md font-medium py-2 px-4 text-green-100
                  cursor-pointer bg-blue-600 rounded text-lg text-center w-20">
                    Add
                </button>
            </form>
        </div>
    )
}

export default Users
