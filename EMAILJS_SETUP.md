# EmailJS Setup Instructions

To enable automatic email sending from the consultation form, follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and follow the authentication steps
5. Note your **Service ID** (it will look like: `service_xxxxxxxxx`)

## 3. Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use the following template:

**Subject:** `New Consultation Request - {{service_type}}`

**Content:**
```
Hello,

You have received a new consultation request from Nehemie Bookkeeping and Tax Solutions website.

Client Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Service Type: {{service_type}}

Please contact this client as soon as possible.

Best regards,
Nehemie Bookkeeping and Tax Solutions Website
```

4. Save the template and note your **Template ID** (it will look like: `template_xxxxxxxxx`)

## 4. Get Your Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key** (it will look like: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

## 5. Update the Code

In `/src/components/ConsultationForm.js`, replace the placeholder values:

```javascript
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID
```

## 6. Test the Form

1. Restart your development server (`npm start`)
2. Open the consultation form
3. Fill out the form and submit
4. Check if you receive the email automatically

## Important Notes

- The free EmailJS plan allows 200 emails per month
- Make sure your email template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service_type}}`
- If EmailJS is not configured, the form will fall back to opening the user's email client
- Test thoroughly before deploying to production

## Troubleshooting

If emails are not sending:
1. Check that all IDs are correctly copied
2. Verify your email service is properly connected
3. Check the EmailJS dashboard for any error messages
4. Ensure your template variables match the code

For more help, visit the [EmailJS documentation](https://www.emailjs.com/docs/).
