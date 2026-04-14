# Secure Password Generator

A beautiful, feature-rich web-based password generator with customizable options and real-time strength evaluation.

## Features

- ✅ **Customizable Length**: Generate passwords from 4 to 64 characters
- ✅ **Character Type Options**: Include/exclude uppercase, lowercase, numbers, and symbols
- ✅ **Ambiguous Character Filter**: Option to exclude confusing characters (0, O, l, 1, i)
- ✅ **One-Click Copy**: Copy generated passwords to clipboard with visual feedback
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ✅ **No External Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required
- ✅ **Privacy First**: All password generation happens locally in your browser - no data is sent to any server

## How to Use

1. Open `index.html` in any modern web browser
2. Adjust the password length using the slider (default: 12 characters)
3. Toggle character type options as needed:
   - Uppercase Letters (A-Z)
   - Lowercase Letters (a-z)
   - Numbers (0-9)
   - Symbols (!@#$%^&*)
   - Exclude Ambiguous Characters
4. Click "Generate" to create a new password
5. Click "Copy" to copy the password to your clipboard

## Technical Details

### Architecture

This password generator is built with:
- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with gradients, flexbox, and animations
- **JavaScript (ES6+)**: Object-oriented implementation with class-based architecture

### Algorithm

The password generation algorithm:
1. Constructs a character pool based on user preferences
2. Removes ambiguous characters if the option is enabled
3. Randomly selects characters from the pool to create the password

## Browser Compatibility

Works on all modern browsers:
- Chrome (v70+)
- Firefox (v68+)
- Safari (v12+)
- Edge (v79+)

## Development

To contribute to this project:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Test locally by opening `index.html`
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature-name`)
7. Open a pull request

## License

This project is licensed under the MIT License.
