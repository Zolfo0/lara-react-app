# Laravel + React + TypeScript + Tailwind CSS Project

A modern full-stack web application built with a Laravel backend, React frontend, and TypeScript for type safety. This project uses SQLite for easy development and VS Code extensions for database management. UI is built with Tailwind CSS for rapid, utility-first styling.

## 🚀 Features

- **Laravel 10+** - Modern PHP framework with robust features
- **React 18** - Component-based frontend library
- **TypeScript** - Type-safe JavaScript development
- **SQLite Database** - Lightweight database for development
- **Laravel Breeze** - Simple authentication scaffolding
- **Inertia.js** - SPA-like experience without API complexity
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **PHP 8.2+** with required extensions
- **Composer** - PHP dependency manager
- **Node.js 16+** and **npm** - JavaScript runtime and package manager
- **VS Code** - Code editor (recommended)

## 🛠️ Installation

### Step 1: Create Laravel Project

```bash
# Create new Laravel project
composer create-project laravel/laravel my-laravel-react-app

# Navigate to project directory
cd my-laravel-react-app
```

### Step 2: Install Laravel Breeze with React

```bash
# Install Breeze
composer require laravel/breeze --dev

# Install Breeze with React and TypeScript
php artisan breeze:install react --typescript

# Install npm dependencies
npm install
```

### Step 3: Configure Environment

Create or update your `.env` file:

```env
# Application
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:your_key_here
APP_DEBUG=true
APP_URL=http://localhost

# Database (SQLite)
DB_CONNECTION=sqlite
# Remove or comment out MySQL settings:
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=
```

### Step 4: Setup SQLite Database

```bash
# Create database directory if it doesn't exist
mkdir -p database

# Create empty SQLite database file
touch database/database.sqlite

# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate
```

### Step 5: Configure Vite

Update `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
```

### Step 6: Configure TypeScript

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["resources/js/*"],
      "ziggy-js": ["./vendor/tightenco/ziggy/dist/vue.m"]
    }
  },
  "include": [
    "resources/js/**/*.ts",
    "resources/js/**/*.tsx",
    "resources/js/**/*.d.ts"
  ]
}
```

### Step 7: Add Tailwind CSS

Update `resources/css/app.css`:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

## 🗄️ VS Code SQLite Extension Setup

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for "SQLite" by alexcvzz
4. Click "Install"

### Usage

- **Open Database:**
  - Press `Ctrl+Shift+P`
  - Type "SQLite: Open Database"
  - Select `database/database.sqlite`
- **View Tables:**
  - Click table names in SQLite Explorer
  - Data appears in new tab
- **Run Queries:**
  - Right-click database → "New Query"
  - Write SQL and press `Ctrl+Shift+Q`

## 🏃‍♂️ Running the Application

### Development Mode

```bash
# Terminal 1: Start Laravel server
php artisan serve

# Terminal 2: Start Vite dev server (hot reload)
npm run dev
```

### Production Build

```bash
# Build assets for production
npm run build

# Start Laravel server
php artisan serve
```

Access your application at: `http://localhost:8000`

## 📁 Project Structure

```
my-laravel-react-app/
├── app/                    # Laravel application logic
├── database/
│   ├── database.sqlite     # SQLite database file
│   ├── migrations/         # Database migrations
│   └── seeders/           # Database seeders
├── resources/
│   ├── css/
│   │   └── app.css        # Main stylesheet (Tailwind only)
│   └── js/
│       ├── Components/     # Reusable React components
│       ├── Pages/         # Inertia.js pages
│       ├── types/         # TypeScript definitions
│       └── app.tsx        # Main React application
├── routes/
│   ├── web.php           # Web routes
│   └── api.php           # API routes
├── .env                  # Environment configuration
├── vite.config.js       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🧩 Sample Tailwind Component

Create `resources/js/Components/TailwindDemo.tsx`:

```tsx
import React from 'react';

const TailwindDemo: React.FC = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Tailwind Components Demo</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">Primary Button</button>
            <input type="date" className="border rounded px-3 py-2 ml-4" placeholder="Select a date" />
        </div>
    );
};

export default TailwindDemo;
```

## 🛠️ Common Commands

```bash
# Laravel Commands
php artisan migrate              # Run migrations
php artisan migrate:fresh        # Fresh migration
php artisan make:model ModelName # Create model
php artisan make:controller ControllerName # Create controller
php artisan route:list           # List all routes
php artisan tinker               # Laravel REPL

# Frontend Commands
npm run dev                      # Development server
npm run build                    # Production build
npm run preview                  # Preview production build

# Database Commands
php artisan db:seed              # Run seeders
php artisan make:seeder SeederName # Create seeder
php artisan make:migration migration_name # Create migration
```

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Error:**
   - Check if `database/database.sqlite` exists
   - Verify `DB_CONNECTION=sqlite` in `.env`
2. **TypeScript Errors:**
   - Run `npm install` to ensure all types are installed
   - Check `tsconfig.json` configuration
3. **Build Errors:**
   - Clear cache: `php artisan cache:clear`
   - Rebuild assets: `npm run build`

### Development Tips

- Use `php artisan tinker` to test database connections
- Check browser console for JavaScript errors
- Use VS Code SQLite extension to inspect database
- Enable Laravel debug mode in development (`APP_DEBUG=true`)

## 📚 Documentation

- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Inertia.js Documentation](https://inertiajs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Happy Coding! 🚀**