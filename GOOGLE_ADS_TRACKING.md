# Google Ads Conversion Tracking for EZVEP

This document explains how to set up and use Google Ads conversion tracking for form submissions on the EZVEP website.

## How It Works

When a user successfully submits the contact form, the following happens:

1. The form data is submitted to Firebase
2. The user is redirected to a unique URL: `/thank-you-for-submission`
3. A Google Ads conversion event is triggered

## Setting Up Google Ads Conversion Tracking

### Step 1: Configure Your Google Ads Account

1. Log in to your Google Ads account
2. Go to "Tools & Settings" > "Conversions"
3. Click the "+" button to create a new conversion action
4. Select "Website" as the conversion source
5. For "Conversion name", enter "Form Submission"
6. For "Category", select "Contact"
7. Set the "Value" as appropriate for your business
8. Set "Count" to "One" since each submission should count as one conversion
9. Click "Create and Continue"

### Step 2: Update the Website Configuration

1. In the `public/index.html` file, replace the placeholder values:
   - Replace `G-MEASUREMENT_ID` with your Google Analytics Measurement ID
   - Replace `AW-CONVERSION_ID` with your Google Ads Conversion ID

2. In the `src/common/utils/useForm.tsx` file, replace the placeholder values:
   - Replace `AW-CONVERSION_ID/CONVERSION_LABEL` with your specific conversion tracking code from Google Ads

## Testing Conversion Tracking

To test if the conversion tracking is working:

1. Open your website
2. Fill out and submit the contact form
3. Verify that you are redirected to the `/thank-you-for-submission` page
4. Check your Google Ads account after 24-48 hours to see if the conversion was recorded

## Troubleshooting

If conversions are not being tracked:

1. Ensure the Google Analytics and Google Ads scripts are loading properly
2. Check the browser console for any JavaScript errors
3. Verify that the conversion IDs and labels are correct
4. Use Google Tag Assistant to debug the implementation

## Additional Resources

- [Google Ads Conversion Tracking Documentation](https://support.google.com/google-ads/answer/6095821)
- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
