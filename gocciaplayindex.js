/**
 * GocciaplayClipboard - Simple Clipboard Utility
 * Author: Gocciaplay
 * License: Custom
 */

const GocciaplayClipboard = {
    /**
     * Copies the provided text to the user's clipboard.
     * @param {string} text - The text to copy.
     * @returns {Promise<boolean>} - Resolves to true if successful, false otherwise.
     */
    copy(text) {
        if (typeof text !== 'string' || text.trim() === '') {
            console.warn('[GocciaplayClipboard] Invalid or empty text provided.');
            return Promise.resolve(false);
        }

        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('[GocciaplayClipboard] Text copied successfully.');
                    return true;
                })
                .catch(err => {
                    console.error('[GocciaplayClipboard] Copy failed:', err);
                    return false;
                });
        } else {
            console.error('[GocciaplayClipboard] Clipboard API not supported in this environment.');
            return Promise.resolve(false);
        }
    }
};

// Example usage:
// GocciaplayClipboard.copy('Hello from Gocciaplay').then(success => {
//     if (success) {
//         console.log('Text copied to clipboard.');
//     } else {
//         console.log('Copy failed.');
//     }
// });

module.exports = GocciaplayClipboard;
