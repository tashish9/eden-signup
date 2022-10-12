const FormTextField = ({ label, id, placeholder }) => {
  return (
    <div className="text-left text-sm my-4">
      <label
        className="block font-medium  capitalize mb-1"
        htmlFor={id || label}
      >
        {label}
      </label>
      <input
        className="border border-lightgray w-full p-3  rounded-md "
        id={id || label}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormTextField;
