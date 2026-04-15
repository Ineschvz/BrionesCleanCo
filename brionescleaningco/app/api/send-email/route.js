import nodemailer from 'nodemailer';

export async function POST(req) {

    const { name, phone, email, service, message, website } = await req.json();

    // Honeypot — bots fill this, real users never see it
    if (website) {
        return new Response('OK', { status: 200 });
    }

    // Basic input validation
    if (!name || !email || !message) {
        return new Response('Missing required fields', { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: 'brionescleaningco@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response('Error sending email', { status: 500 });
    }

}
