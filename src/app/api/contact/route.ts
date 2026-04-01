import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(req: Request) {
    try {
        const { name, contact, message } = await req.json();

        if (!name || !contact || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('Core SMTP configuration is missing in .env');
            return NextResponse.json({ error: 'Server configuration is incomplete' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Family Line" <${process.env.SMTP_FROM_EMAIL}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `رسالة جديدة من: ${name}`,
            text: `
                رسالة جديدة من موقع فاميلي لاين:
                
                الاسم: ${name}
                معلومات التواصل: ${contact}
                الرسالة: ${message}
            `,
            html: `
                <div dir="rtl" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
                    <div style="background-color: #3b4666; padding: 30px; text-align: center;">
                        <img src="cid:logo" alt="Family Line Logo" style="max-width: 150px; height: auto;" />
                    </div>
                    <div style="padding: 40px 30px; background-color: #ffffff;">
                        <h2 style="color: #3b4666; margin-bottom: 25px; border-bottom: 2px solid #f19da7; padding-bottom: 15px; font-size: 24px;">طلب تواصل جديد</h2>
                        
                        <div style="margin-bottom: 20px;">
                            <p style="color: #64748b; font-size: 14px; margin-bottom: 5px;">اسم المرسل:</p>
                            <p style="color: #1e293b; font-size: 18px; font-weight: bold; margin-top: 0;">${name}</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <p style="color: #64748b; font-size: 14px; margin-bottom: 5px;">معلومات التواصل (إيميل / هاتف):</p>
                            <p style="color: #1e293b; font-size: 18px; font-weight: bold; margin-top: 0;">${contact}</p>
                        </div>
                        
                        <div style="margin-top: 30px; padding: 25px; background-color: #f1f5f9; border-radius: 12px; border-right: 4px solid #f19da7;">
                            <p style="color: #64748b; font-size: 14px; margin-bottom: 10px;">نص الرسالة:</p>
                            <p style="color: #334155; font-size: 16px; line-height: 1.6; white-space: pre-wrap; margin-top: 0;">${message}</p>
                        </div>
                    </div>
                    <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
                        جميع الحقوق محفوظة © فاميلي لاين 2026
                    </div>
                </div>
            `,
            attachments: [
                {
                    filename: 'logo.png',
                    path: path.join(process.cwd(), 'public', 'logo.png'),
                    cid: 'logo'
                }
            ]
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
