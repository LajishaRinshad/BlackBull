module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Temporarily disable alt-text rule until all images are fixed
    'jsx-a11y/alt-text': 'warn',
    // Enforce security best practices
    'react/jsx-no-target-blank': 'error',
    // Add more rules as needed
    'no-console': 'warn',
    'no-unused-vars': 'warn'
  }
}; 