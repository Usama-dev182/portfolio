import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer'
import transporter from '../../../email';

// export async function POST(request) {
//     try {
//         const { subject, message } = await request.json();

//         const transporter = nodemailer.createTransport({
//             service: 'zoho',
//             host: 'smtpro.zoho.in',
//             port: 465,
//             secure: true,
//             auth: {
//                 user: 'careeros@tryporpra.com',
//                 pass: process.env.NEXT_PUBLIC_PASSWORD
//             }
//         })

//         const mailOption = {
//             from: 'careeros@tryporpra.com',
//             to: 'augustinerepos@gmail.com',
//             subject: "Send Email Tutorial",
//             html: `
//         <h3>Hello Augustine</h3>
//         <li> title: ${subject}</li>
//         <li> message: ${message}</li> 
//         `
//         }

//         await transporter.sendMail(mailOption)

//         return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
//     }
// }

export default async (req, res) => {
    if (req.method === "POST") {
      try {
        const { visitor_email, visitor_name, visitor_message , concerned_department } = req.body;
  
        // Send email
        await transporter.sendMail({
          from: "infousamaali2@gmail.com",
          visitor_email, visitor_name, visitor_message , concerned_department
        });
  
        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Email sending failed" });
      }
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  };