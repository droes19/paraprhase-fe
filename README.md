# Paraphrase Frontend (paraphrase-fe)

The React frontend for the Paraphrase application, a text paraphrasing tool.

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

## Usage

1. Type or paste text into the editor
2. Select a portion of text you want to paraphrase
3. The "Paraphrase Selected Text" button will enable
4. Click the button to send the text to the backend for processing
5. The selected text will be replaced with the paraphrased version

## Configuration

By default, the frontend is configured to communicate with the backend at `http://localhost:8080`. If you need to change this:

1. Open `src/services/api.ts`
2. Update the `API_BASE_URL` constant to point to your backend

## Development Progress

### Completed
- ✅ Basic project structure and configuration
- ✅ Text editor component with text selection capabilities
- ✅ Button UI that enables when text is selected
- ✅ Integration with backend API for paraphrasing
- ✅ Mechanism to replace selected text with paraphrased content

### In Progress
- 🔄 Responsive design for mobile devices
- 🔄 Improved visual feedback during paraphrasing
- 🔄 Unit tests for components

### Planned
- 📝 Loading state animations
- 📝 Error handling improvements
- 📝 Text formatting options
- 📝 Dark mode support
- 📝 History of paraphrased texts

## License

This project is licensed under the MIT License - see the LICENSE file for details.