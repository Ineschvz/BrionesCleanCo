import nodemailer from 'nodemailer';

export async function POST(req) {

    const { firstName, lastName, role, location, rating, service, otherService, testimonial, website } = await req.json();

    // Honeypot — bots fill this, real users never see it
    if (website) {
        return new Response('OK', { status: 200 });
    }

    // Basic input validation
    if (!firstName || !lastName || !location || !rating || !service || !testimonial) {
        return new Response('Missing required fields', { status: 400 });
    }

    // Validate testimonial length
    if (testimonial.length < 50 || testimonial.length > 300) {
        return new Response('Testimonial must be between 50 and 300 characters', { status: 400 });
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
        return new Response('Rating must be between 1 and 5', { status: 400 });
    }

    const serviceName = service === 'other' ? otherService : service;

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
        subject: 'New Testimonial Submission',
        text: `Name: ${firstName} ${lastName}\nRole/Title: ${role || 'N/A'}\nLocation: ${location}\nRating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5)\nService: ${serviceName}\n\nTestimonial:\n"${testimonial}"`
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.error('Error sending testimonial email:', error);
        return new Response('Error sending email', { status: 500 });
    }

}
