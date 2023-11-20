const CheckoutUserDetails = ({
  userDetails,
  handleChange,
  isSelected,
  handleCheckboxChange,
}) => {
  return (
    <>
      <div className="billing-details-container mt-8 flex flex-col gap-8 w-full max-w-md">
        <div className="input-field flex flex-col">
          <label
            className="text-16px font-regular text-textDarkGray"
            htmlFor="firstName"
          >
            First Name <sup className="text-red">*</sup>
          </label>
          <input
            className="bg-secondary px-4 py-2 rounded"
            type="text"
            id="firstName"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input-field flex flex-col">
          <label
            className="text-16px font-regular text-textDarkGray"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="bg-secondary px-4 py-2 rounded"
            type="text"
            id="companyName"
            name="companyName"
            value={userDetails.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="input-field flex flex-col">
          <label
            className="text-16px font-regular text-textDarkGray"
            htmlFor="streetAddress"
          >
            Street Address <sup className="text-red">*</sup>
          </label>
          <input
            className="bg-secondary px-4 py-2 rounded"
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={userDetails.streetAddress}
            onChange={handleChange}
          />
        </div>
        <div className="input-field flex flex-col">
          <label
            className="text-16px font-regular text-textDarkGray"
            htmlFor="apartment"
          >
            Apartment, floor, etc. (optional)
          </label>
          <input
            className="bg-secondary px-4 py-2 rounded"
            type="text"
            id="apartment"
            name="apartment"
            value={userDetails.apartment}
            onChange={handleChange}
          />
        </div>
        <div className="input-field flex flex-col">
          <label
            className="text-16px font-regular text-textDarkGray"
            htmlFor="townCity"
          >
            Town/City <sup className="text-red">*</sup>
          </label>
          <input
            className="bg-secondary px-4 py-2 rounded"
            type="text"
            id="townCity"
            name="townCity"
            value={userDetails.townCity}
            onChange={handleChange}
          />
        </div>
        <div className="input-field flex flex-col">
          <label
            className="text-16px font-regular text-textDarkGray"
            htmlFor="phoneNumber"
          >
            Phone Number <sup className="text-red">*</sup>
          </label>
          <input
            className="bg-secondary px-4 py-2 rounded"
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={userDetails.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="input-field flex flex-col">
          <label
            className="text-16px font-regular text-textDarkGray"
            htmlFor="emailAddress"
          >
            Email Address <sup className="text-red">*</sup>
          </label>
          <input
            className="bg-secondary px-4 py-2 rounded"
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={userDetails.emailAddress}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="save-billing-details-container flex items-center gap-4 mt-6">
        <input
          type="checkbox"
          name="save-billing-details"
          id="save-billing-details"
          value={isSelected}
          onChange={handleCheckboxChange}
        />
        <label className="select-none" htmlFor="save-billing-details">
          Save this information for faster check-out next time
        </label>
      </div>
    </>
  );
};

export default CheckoutUserDetails;
