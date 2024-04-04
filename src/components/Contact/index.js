import React from "react";

function ContactForm() {
  // // create form state and initial set up of name, email, message.
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const { name, email, message } = formState;
  // //create error message state
  // const [errorMessage, setErrorMessage] = useState("");

  // // function to manage a change in data of the form. Is called onBlur from each input
  // function handleChange(e) {
  //   // validation for email, name, and description. Making sure email is valid and all 3 are required.
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);

  //     // isValid conditional statement
  //     if (!isValid) {
  //       setErrorMessage("Your email is invalid.");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage("");
  //     }
  //   }

  //   // setting the form state if there is no error and the form is correctly filled out.
  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //   }
  // }

  // // Sumbit button was clicked. This is where the developer would continue to integrate into the backend.
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("Form ready to submit. Here are the values...");
  //   console.log(formState);
  // }

  return (
    <section>
      <h1 data-testid="contact_h1">Contact me</h1>
      <div className="phone_email_div">
        <span className="contact_email">Email: kyledaviswx@gmail.com</span>
      </div>
    </section>
  );
}

export default ContactForm;
