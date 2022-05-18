import React from "react"

const EdittableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}): React.ReactElement => {
    return (
        <tr>
            <td>
                <input
                    className=" text-gray-900 my-2 bg-white p-1 ml-3 border border-gray-200 rounded w-32"
                    type="text"
                    placeholder="Enter a name..."
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input
                    className=" text-gray-900 my-2 bg-white p-1 ml-3 border border-gray-200 rounded w-80"
                    type="text"
                    placeholder="Enter an address..."
                    name="address"
                    value={editFormData.address}
                    onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input
                    className=" text-gray-900 my-2 bg-white p-1 ml-3 border border-gray-200 rounded w-32"
                    type="text"
                    placeholder="Enter a phone number..."
                    name="phoneNumber"
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input
                    className=" text-gray-900 my-2 bg-white p-1 ml-3 border border-gray-200 rounded w-56"
                    type="email"
                    placeholder="Enter an email..."
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}></input>
            </td>
            <td>
                <button
                    className="p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg focus:border-4 border-gray-300 "
                    type="submit">
                    save
                </button>
                <button
                    className="p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg focus:border-4 border-gray-300 "
                    type="button"
                    onClick={handleCancelClick}>
                    cancel
                </button>
            </td>
        </tr>
    )
}

export default EdittableRow
