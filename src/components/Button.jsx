const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none font-semibold bg-orange-400
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : " text-white "
      } rounded-md ${
        fullWidth && "w-full"
      } outline outline-offset-0 outline-white`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="call icon"
          className="ml-2 rounded-full w-7 h-7"
        />
      )}
    </button>
  );
};

export default Button;
