import React from 'react';

const Contact = () => {
    return ( 
        <div>
            <h2>Contact Form</h2>
            <p>If you want to get in touch with us, use this contact form (or send an email to the below address)</p>
            <form>
                <label>
                    <h4>Your Name</h4>
                    <input type='text' default='Required'/>
                </label>
                <label>
                    <h4>Your Message</h4>
                    <textarea type='text' default='required' />
                </label>
                <label>
                    <h4>Your Email Address (Optional)</h4>
                    <input type='text' />
                    <h5>Leave blank if you don't need a response from us</h5>
                </label>
            </form>
        </div>
     );
}
 
export default Contact;