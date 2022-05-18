import React from "react"

const ReadOnlyRow = ({
    contact,
    handleEditClick,
    handleDeleteClick,
}: {
    contact: ContactObject
    handleEditClick: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        contact: ContactObject
    ) => void
    handleDeleteClick: (id: number) => void
}): React.ReactElement => {
    return (
        <tr>
            <td className="px-4 py-3">{contact.fullName}</td>
            <td className="px-4 py-3">{contact.address}</td>
            <td className="px-4 py-3">{contact.phoneNumber}</td>
            <td className="px-4 py-3">{contact.email}</td>
            <td>
                <button
                    className="p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg focus:border-4 border-gray-300 "
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}>
                    Edit
                </button>
                <button
                    className="p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg focus:border-4 ml-3 border-gray-300 "
                    type="button"
                    onClick={() => handleDeleteClick(contact.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow
