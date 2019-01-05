import React from 'react';
import './index.css';

const sendMail = (text) => {
    let formData = new FormData();
    let username = 'api';
    let password = '98606f662b9c8d3788888e4deadba3e3-49a2671e-c9621f46';
    formData.append("from", "mail@jgibbs.io")
    formData.append("to", "jon@jgibbs.io")
    formData.append("subject", "From jgibbs.io contact form")
    formData.append("text", text)


    window.fetch('https://api.mailgun.net/v3/sandbox32add5add8d14985a0b852cf593cd55f.mailgun.org', {
        mode: 'no-cors',
        body: formData,
        method: "post",
        headers: new Headers({
            "Authorization": `Basic ${btoa(`${username}:${password}`)}`
          })
    })
    .then(resp => console.log(resp.data))
    .catch(err => console.log(err))
}

const Mailform = () => {
    return (
        <div className="form-wrapper">
            <div className="textarea-label">Communique</div>
            <textarea/>
            <button onClick={() => sendMail("whoa")}>Fire</button>
        </div>
    )
}

export default Mailform;