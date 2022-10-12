const FormHeading = ({ header, subHeader }) => {
  return (
    <div className="text-center py-4">
      <h1 className="font-bold text-2xl text-black">{header}</h1>
      <h3 className="text-gray text-sm p-2">{subHeader}</h3>
    </div>
  );
};

export default FormHeading;
