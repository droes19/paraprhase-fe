import React, { useState, useRef } from 'react';
import '../styles/TextEditor.css';
import { paraphraseText } from '../services/api';

const TextEditor: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [selection, setSelection] = useState<{ start: number; end: number } | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const editorRef = useRef<HTMLDivElement>(null);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        setSelection(null);
    };

    const handleTextSelection = () => {
        // Get the textarea element directly
        const textareaElement = document.querySelector('textarea');
        if (!textareaElement) return;
        
        // Check if there's a selection in the textarea
        const start = textareaElement.selectionStart;
        const end = textareaElement.selectionEnd;
        
        // If we have a valid selection range
        if (start !== end) {
            console.log("Selection detected:", start, end);
            setSelection({ start, end });
        } else {
            console.log("No selection");
            setSelection(null);
        }
    };

    const handleParaphrase = async () => {
        if (!selection) return;

        try {
            setIsLoading(true);
            const selectedText = text.substring(selection.start, selection.end);
            const paraphrased = await paraphraseText(selectedText);

            // Replace the selected text with paraphrased text
            const newText =
                text.substring(0, selection.start) +
                paraphrased +
                text.substring(selection.end);

            setText(newText);
            setSelection(null);
        } catch (error) {
            console.error('Error paraphrasing text:', error);
            alert('Failed to paraphrase text. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="text-editor-container" ref={editorRef}>
            <textarea
                className="text-editor"
                value={text}
                onChange={handleTextChange}
                onMouseUp={handleTextSelection}
                onKeyUp={handleTextSelection}
                onSelect={handleTextSelection} 
                placeholder="Type or paste your text here..."
            />

            <div className="editor-actions">
                <button 
                    className="paraphrase-button"
                    onClick={handleParaphrase}
                    disabled={!selection || isLoading}
                >
                    {isLoading ? 'Paraphrasing...' : 'Paraphrase Selected Text'}
                </button>
                {selection ? (
                    <span className="selection-info">
                        Selected: "{text.substring(selection.start, selection.end).slice(0, 30)}
                        {text.substring(selection.start, selection.end).length > 30 ? '...' : ''}"
                    </span>
                ) : (
                    <span className="selection-hint">Select text to paraphrase</span>
                )}
            </div>
        </div>
    );
};

export default TextEditor;
