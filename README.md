# EZVEP - Vehicle Entry Permit Application Service

## Development

To run the web application locally:

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Deployment

To deploy the application:

```bash
# Build the production-ready application
npm run build

# The build folder can be deployed to any static hosting service
# For example, to test locally:
npm install -g serve
serve -s build
```

## Environment Variables

This application uses Firebase. Create a `.env` file in the root directory with the following variables:

```
REACT_APP_API_KEY=your_firebase_api_key
REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_PROJECT_ID=your_firebase_project_id
REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_ID=your_firebase_app_id
REACT_APP_MEASUREMENT_ID=your_firebase_measurement_id