import React, { useEffect, useState } from "react";

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  // generate random userId
  const generateUserId = () => {
    const id = Math.random().toString(36).substr(2, 9);
    return id;
  };

  // Save form data to local storage
  const saveFormData = () => {
    localStorage.setItem("userData", JSON.stringify(formData));
    setUnsavedChanges(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateUserId();
    setFormData((prevData) => ({
      ...prevData,
      id: id,
    }));
    saveFormData();
    console.log("formsubmitted", formData);
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem("userData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    } else {
      // If there's no data in local storage, initialize the form data with empty values
      setFormData({
        id: "",
        name: "",
        address: "",
        email: "",
        phone: "",
      });
    }
  }, []);

  useEffect(() => {
    // Clear form data when component mounts
    setFormData({
      id: "",
      name: "",
      address: "",
      email: "",
      phone: "",
    });
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);

  return (
    <div className="form-container">
      <h1>User Data form</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label for="address">Address:</label>
        <textarea
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label for="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <input type="submit" id="submit" value="Submit" />
        {unsavedChanges && (
          <p className="warning">Warning: You have unsaved changes!</p>
        )}
      </form>
    </div>
  );
};

export default UserDataForm;
