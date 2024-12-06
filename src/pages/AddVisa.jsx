import React, { useState } from "react";

const AddVisa = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        country: "",
        visaType: "",
        passportNumber: "",
        issueDate: "",
        expiryDate: "",
        imageUrl: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Visa added successfully!");
    };

    return (
        <div className="max-w-4xl p-8 mx-auto my-10 bg-white rounded-lg shadow-md">
            <h2 className="p-2 mb-6 text-2xl font-bold text-center text-white rounded-lg bg-gradient-to-r from-orange-950 to-gray-800">Add New Visa</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2 font-medium">Visa Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="e.g., USA Tourist Visa"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        rows="3"
                        placeholder="Provide details about the visa"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block mb-2 font-medium">Country</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="e.g., USA, Canada"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">Visa Type</label>
                    <select
                        name="visaType"
                        value={formData.visaType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Tourist">Tourist</option>
                        <option value="Work">Work</option>
                        <option value="Study">Study</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 font-medium">Passport Number</label>
                    <input
                        type="text"
                        name="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter passport number"
                        required
                    />
                </div>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="block mb-2 font-medium">Date of Issue</label>
                        <input
                            type="date"
                            name="issueDate"
                            value={formData.issueDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block mb-2 font-medium">Date of Expiry</label>
                        <input
                            type="date"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block mb-2 font-medium">Visa Image URL</label>
                    <input
                        type="url"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter image URL"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 font-bold text-orange-700 rounded-lg shadow-md bg-gradient-to-r from-orange-950 to-gray-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Add Visa
                </button>
            </form>
        </div>
    );
};

export default AddVisa;
