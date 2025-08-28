# BB Tyres - Full Stack Application

A modern web application for BB Tyres, featuring a React frontend and Node.js backend.

## 🚀 Features

- **Frontend**: React-based user interface with responsive design
- **Backend**: Express.js API with email functionality
- **Security**: Rate limiting, CORS protection, and input validation
- **Contact Form**: Email integration for customer inquiries

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Email service credentials (for contact form)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bbtyres
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend && npm install
   
   # Install frontend dependencies
   cd ../frontend && npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env file in backend directory
   cd backend
   cp .env.example .env
   # Edit .env with your email credentials
   ```

## 🚀 Running the Application

### Development Mode
```bash
# From root directory - runs both frontend and backend
npm run dev

# Or run separately:
# Backend only
cd backend && npm run dev

# Frontend only  
cd frontend && npm run start:dev
```

### Production Mode
```bash
# Build frontend
cd frontend && npm run build

# Start backend
cd backend && npm start
```

## 📁 Project Structure

```
bbtyres/
├── backend/           # Express.js API server
│   ├── index.js      # Main server file
│   └── package.json  # Backend dependencies
├── frontend/         # React application
│   ├── src/          # React source code
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
└── package.json      # Root project configuration
```

## 🔧 API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `POST /api/forma` - Contact form submission

## 🛡️ Security Features

- **Helmet.js**: Security headers
- **Rate Limiting**: API request throttling
- **CORS**: Cross-origin resource sharing protection
- **Input Validation**: Request data validation

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process using port 8080
   lsof -ti:8080 | xargs kill -9
   ```

2. **Build errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Email not sending**
   - Check `.env` file configuration
   - Verify email service credentials
   - Check network connectivity

## 📝 Development Guidelines

### Code Style
- Use ESLint for code quality
- Follow React best practices
- Add alt attributes to all images
- Use semantic HTML elements

### Security Best Practices
- Never commit sensitive data
- Use environment variables for secrets
- Validate all user inputs
- Implement proper error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

