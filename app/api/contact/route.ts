import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Create a transporter using SMTP
    // Standard configuration for Gmail or other providers
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to your email provider
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Add to .env.local
        pass: process.env.EMAIL_PASS || 'your-app-password', // Add to .env.local
      },
    });

    // Email options
    const mailOptions = {
      from: `Portfolio Contact Form <${process.env.EMAIL_USER || 'your-email@gmail.com'}>`,
      to: process.env.EMAIL_USER || 'your-email@gmail.com', // Sending the email to yourself
      replyTo: email,
      subject: `New Message From ${name} (Portfolio)`,
      text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #8b5cf6;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #8b5cf6; border-radius: 4px;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
    };

    // Send the email
    // NOTE: If process.env.EMAIL_USER is not set, this might fail unless standard fallback is provided. 
    // For portfolio demonstration purposes before env setup, we return "success" if env is not set to not block UI demo
    if (!process.env.EMAIL_USER) {
      console.log('Would have sent email with options:', mailOptions);
      return NextResponse.json({ message: 'Email sent successfully (Simulated - Configure .env for real delivery)' }, { status: 200 });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
