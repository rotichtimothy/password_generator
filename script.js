// Password Generator Application

class PasswordGenerator {
    constructor() {
        this.passwordOutput = document.getElementById('password-output');
        this.copyBtn = document.getElementById('copy-btn');
        this.generateBtn = document.getElementById('generate-btn');
        this.lengthSlider = document.getElementById('length');
        this.lengthValue = document.getElementById('length-value');
        this.includeUppercase = document.getElementById('include-uppercase');
        this.includeLowercase = document.getElementById('include-lowercase');
        this.includeNumbers = document.getElementById('include-numbers');
        this.includeSymbols = document.getElementById('include-symbols');
        this.excludeAmbiguous = document.getElementById('exclude-ambiguous');
        this.strengthBar = document.getElementById('strength-bar');
        this.strengthText = document.getElementById('strength-text');
        
        this.uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        this.numberChars = '0123456789';
        this.symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        this.ambiguousChars = '0O1lI';
        
        this.init();
    }
    
    init() {
        // Event listeners
        this.lengthSlider.addEventListener('input', () => {
            this.lengthValue.textContent = this.lengthSlider.value;
            this.updateStrength();
        });
        
        this.generateBtn.addEventListener('click', () => {
            this.generatePassword();
        });
        
        this.copyBtn.addEventListener('click', () => {
            this.copyToClipboard();
        });
        
        // Listen for changes in any checkbox
        [this.includeUppercase, this.includeLowercase, this.includeNumbers, this.includeSymbols, this.excludeAmbiguous].forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateStrength();
            });
        });
        
        // Generate initial password
        this.generatePassword();
    }
    
    generatePassword() {
        let password = '';
        let charset = '';
        
        // Build character set based on user preferences
        if (this.includeUppercase.checked) charset += this.uppercaseChars;
        if (this.includeLowercase.checked) charset += this.lowercaseChars;
        if (this.includeNumbers.checked) charset += this.numberChars;
        if (this.includeSymbols.checked) charset += this.symbolChars;
        
        // Remove ambiguous characters if selected
        if (this.excludeAmbiguous.checked) {
            for (const char of this.ambiguousChars) {
                charset = charset.replace(new RegExp('\\' + char, 'g'), '');
            }
        }
        
        // Validate that at least one character set is selected
        if (charset.length === 0) {
            alert('Please select at least one character type.');
            return;
        }
        
        // Generate password
        const length = parseInt(this.lengthSlider.value);
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        
        // Display password
        this.passwordOutput.value = password;
        this.passwordOutput.classList.add('pulse');
        setTimeout(() => {
            this.passwordOutput.classList.remove('pulse');
        }, 500);
        
        // Update strength meter
        this.updateStrength();
    }
    
    updateStrength() {
        let strength = 0;
        let strengthText = 'Weak';
        let strengthClass = 'strength-weak';
        
        // Calculate strength based on criteria
        const length = parseInt(this.lengthSlider.value);
        const hasUpper = this.includeUppercase.checked;
        const hasLower = this.includeLowercase.checked;
        const hasNumbers = this.includeNumbers.checked;
        const hasSymbols = this.includeSymbols.checked;
        
        // Add points for each criterion
        if (length >= 8) strength += 1;
        if (length >= 12) strength += 1;
        if (length >= 16) strength += 1;
        if (hasUpper) strength += 1;
        if (hasLower) strength += 1;
        if (hasNumbers) strength += 1;
        if (hasSymbols) strength += 1;
        
        // Determine strength level
        if (strength >= 7) {
            strengthText = 'Very Strong';
            strengthClass = 'strength-very-strong';
        } else if (strength >= 5) {
            strengthText = 'Strong';
            strengthClass = 'strength-strong';
        } else if (strength >= 3) {
            strengthText = 'Medium';
            strengthClass = 'strength-medium';
        } else {
            strengthText = 'Weak';
            strengthClass = 'strength-weak';
        }
        
        // Update UI
        const percentage = Math.min((strength / 7) * 100, 100);
        this.strengthBar.style.width = percentage + '%';
        // Clear any existing strength classes and add the new one
        this.strengthBar.className = 'bar ' + strengthClass;
        this.strengthText.textContent = strengthText;
    }
    
    copyToClipboard() {
        if (!this.passwordOutput.value) return;
        
        navigator.clipboard.writeText(this.passwordOutput.value)
            .then(() => {
                // Visual feedback
                this.copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    this.copyBtn.textContent = 'Copy';
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy password to clipboard. Please try again.');
            });
    }
}

// Initialize the password generator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PasswordGenerator();
});