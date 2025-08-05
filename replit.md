# DreamLens - AI Dream Interpretation Application

## Overview

DreamLens is a full-stack web application that provides AI-powered dream interpretation services. Users can input their dreams in Korean or English and receive personalized psychological interpretations along with warm, encouraging messages. The application features a modern, glass-morphism UI with dark theme support and social sharing capabilities.

The system is built as a monorepo with a React frontend, Express.js backend, and uses OpenAI's GPT-4o model for dream analysis. It supports both in-memory storage for development and PostgreSQL for production environments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Framework**: Radix UI components with shadcn/ui for consistent, accessible design system
- **Styling**: Tailwind CSS with custom CSS variables for theming and glass-morphism effects
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Internationalization**: Custom translation system supporting Korean and English languages

The frontend uses a component-based architecture with context providers for theme management and language switching. The design system follows a night/dream theme with purple gradients and warm gold accents.

### Backend Architecture
- **Framework**: Express.js with TypeScript for type safety
- **API Design**: RESTful API with structured error handling and request logging middleware
- **Development Setup**: Vite integration for hot module replacement in development mode
- **Build Process**: ESBuild for production bundling with external package handling

The backend follows a modular structure with separate route handlers, storage abstractions, and service layers for external integrations.

### Data Storage Solutions
- **Development**: In-memory storage using Map-based implementation for rapid prototyping
- **Production**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Database Provider**: Neon Database (serverless PostgreSQL) for cloud deployment

The storage layer uses an interface-based design allowing easy switching between storage implementations. The database schema includes dream interpretations with metadata support for future extensibility.

### Authentication and Authorization
Currently, the application operates without user authentication, storing interpretations anonymously. The architecture supports future implementation of user accounts and private dream collections.

### External Dependencies
- **AI Service**: OpenAI GPT-4o for dream interpretation with structured JSON responses
- **UI Components**: Comprehensive Radix UI component library for accessibility
- **Development Tools**: Replit-specific plugins for development environment integration
- **Database**: Neon Database serverless PostgreSQL for production data persistence
- **Build Tools**: Vite for frontend development, ESBuild for backend production builds

The application uses environment variables for API keys and database connections, supporting easy deployment across different environments. The AI service integration includes error handling and retry logic for reliable dream interpretation delivery.