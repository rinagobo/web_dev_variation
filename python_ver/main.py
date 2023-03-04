from flask import Flask, render_template, request, url_for
import smtplib

### Email address and password for sending an email function ###
OWN_EMAIL = ""
OWN_PASSWORD = ""
TO_EMAIL = ""

### Set Flask Server ###
app = Flask(__name__)

### Home for the website ###
@app.route('/')
def gallery():
    return render_template("new_collections.html")

### Contact page for the website ###
@app.route('/contact', methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        data = request.form
        send_email(data["name"], data["email"], data["phone"], data["message"])
        return "<h1>Successfully sent your message</h1>"
    return render_template("contact_form.html")

### Function for sending an email ###
def send_email(name, email, phone, message):
    ### Make masssage by the inputs from the contact form ###
    email_message = f"Subject:New Message\n\n Name: {name}\nEmail: {email}\nPhone: {phone}\nMessage:{message}"
    ### Send an email with smtplib ###
    with smtplib.SMTP("smtp.gmail.com", port=587) as connection:
        connection.starttls()
        connection.login(user=OWN_EMAIL, password=OWN_PASSWORD)
        connection.sendmail(from_addr=OWN_EMAIL, to_addrs=TO_EMAIL, msg=email_message)
        print("Success!")

if __name__ == "__main__":
    app.run(debug=True)
