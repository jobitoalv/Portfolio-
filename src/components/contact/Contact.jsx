import "./contact.scss"
import emailjs from "emailjs-com";

const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm("service_9p00yao", "template_diddccb", e.target, "user_Ug3k9N5FcIHT5GmfvZOYO")
        .then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className="contact" id="contact">
            <h1>Contact Form.</h1>
            <form className="row" style={{ margin: "25px 85px 75px 100px" }} onSubmit={sendEmail}>
                <lable>Name</lable>
                <input type="text" name="name" className="form-control"/>

                <lable>Email</lable>
                <input type="email" name="user_email" className="form-control"/>

                <lable>Message</lable>
                <textarea name="message" rows="4" className="form-control"/>
                <input type="submit" value="send" className="form-control btn btn-primary" style={{ marginTop: "30px" }}/>
            </form>
        </div>
    );
}

export default Mailer;