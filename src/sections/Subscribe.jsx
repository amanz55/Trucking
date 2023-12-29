const Subscribe = () => {
  // eslint-disable-next-line no-unused-vars
  const check = () => {
    if (!document.getElementById("Email").checkValidity()) {
      //do stuff here ie. show errors
      alert("input not valid!");
    } else {
      submitForm();
    }
  };
  const submitForm = () => {
    // Get the user input
    var userName = document.getElementById("Email").value;

    // Construct the URL with parameters
    var url = import.meta.env.VITE_URL + encodeURIComponent(userName);

    // Open the URL in a new tab
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold">
        Subscribe for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="relative w-[50%] max-sm:w-full">
        <form id="myForm">
          <input
            type="email"
            id="Email"
            name="Email"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            onClick={check}
            className="text-white absolute end-0.5 bottom-0.5 bg-coral-red hover:bg-coral-red focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-6 py-4"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
