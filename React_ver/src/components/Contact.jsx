import React, {useState} from "react";

function Contact() {

    const [inputText, setInputText] = useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    });


    function showInputText(event){
        event.preventDefault();
        const {name, value}=event.target;

        setInputText(prevText => {
            return{
                ...prevText,
                [name]:value
            }
        });
    };

    function submitInputText(event){
        event.preventDefault();
        console.log(inputText);
    };

    return(
        <div className="second-container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto" id="contact-form">
                <h1>Contact Me</h1>
                <br />
                <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                <br />
                <form name="sentMessage" id="contactForm" novalidate>
                    <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                        <label>Name</label>
                        <input onChange={showInputText} value={inputText.name} type="text" name="name" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                        <p class="help-block text-danger"></p>
                    </div>
                    </div>
                    <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                        <label>Email Address</label>
                        <input onChange={showInputText} value={inputText.email} type="email" name="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                        <p class="help-block text-danger"></p>
                    </div>
                    </div>
                    <div className="control-group">
                    <div className="form-group col-xs-12 floating-label-form-group controls">
                        <label>Phone Number</label>
                        <input onChange={showInputText} value={inputText.phone} type="tel" name="phone" class="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                        <p class="help-block text-danger"></p>
                    </div>
                    </div>
                    <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                        <label>Message</label>
                        <textarea onChange={showInputText} value={inputText.message} rows="5" name="message" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                    </div>
                    <br />
                    <div id="success"></div>
                    <button onClick={submitInputText} type="submit" className="btn btn-secondary btn-block" id="sendMessageButton">Send</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;