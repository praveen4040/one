import React from 'react';
const Contact=()=>{
    return (
        <div className="contact">
            <main>
                <h1>Contact us</h1>
                <form>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="abc@gmail.com"/>
                    </div>
                    <div>
                        <label>Message</label>
                        <input type="text" name="msg" placeholder="tell us about your query..."/>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </main>

        </div>

    )
}
export default Contact