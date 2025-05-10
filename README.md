# Paraphrase Frontend (paraphrase-fe)

The React frontend for the Paraphrase application, a text paraphrasing tool.

**Live Demo:** [https://paraprhase-fe.vercel.app/](https://paraprhase-fe.vercel.app/)

## Features

- Clean text editor interface for typing or pasting text
- Text selection functionality
- Button that enables when text is selected
- Instant replacement of selected text with paraphrased version
- Integration with Paraphrase backend API

## Technology Stack

- React 18
- TypeScript
- CSS3

## Project Structure

```
frontend/
├── public/         # Static files
└── src/            # Source code
    ├── components/ # React components
    ├── services/   # API services
    └── styles/     # CSS styles
```

## Getting Started

### Prerequisites

- Node.js (v14+) and npm

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd paraphrase-fe
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing

Run the test suite:
```
npm test
```

Run tests with coverage report:
```
npm test -- --coverage
```

## Usage

1. Type or paste text into the editor
2. Select a portion of text you want to paraphrase
3. The "Paraphrase Selected Text" button will enable
4. Click the button to send the text to the backend for processing
5. The selected text will be replaced with the paraphrased version

## Configuration

By default, the frontend is configured to communicate with the backend at `http://localhost:8080`. You can configure the API base URL using environment variables:

### Using Environment Variables

1. Create a `.env` file in the project root (you can copy from `.env.example`):
   ```
   cp .env.example .env
   ```

2. Edit the `.env` file to set your backend API URL:
   ```
   REACT_APP_API_BASE_URL=https://your-api-server.com
   ```

3. Restart the development server for changes to take effect.

For production deployments, set the environment variables in your hosting platform (Vercel, Netlify, etc.).

## Deployment

The frontend is currently deployed on Vercel at [https://paraprhase-fe.vercel.app/](https://paraprhase-fe.vercel.app/).

### Deploying to Vercel

1. Fork or clone this repository
2. Connect your GitHub repository to Vercel
3. Configure the following settings:
   - Framework preset: Create React App
   - Build command: `npm run build`
   - Output directory: `build`
4. Add environment variables if needed (for custom API endpoints)
5. Deploy!

## Development Progress

### Completed
- ✅ Basic project structure and configuration
- ✅ Text editor component with text selection capabilities
- ✅ Button UI that enables when text is selected
- ✅ Integration with backend API for paraphrasing
- ✅ Mechanism to replace selected text with paraphrased content
- ✅ Deployment to Vercel
- ✅ Responsive design for mobile devices
- ✅ Unit tests for components and services

### In Progress
- 🔄 Improved visual feedback during paraphrasing

### Planned
- 📝 Loading state animations
- 📝 Error handling improvements
- 📝 Text formatting options
- 📝 Dark mode support
- 📝 History of paraphrased texts

## License

This project is licensed under the MIT License - see the LICENSE file for details.