 # Laravel + React + TypeScript + Syncfusion Project

A modern full-stack web application built with Laravel backend, React frontend, TypeScript for type safety, and Syncfusion UI components. This project uses SQLite database for easy development and VS Code extensions for database management.

## 🚀 Features

- **Laravel 10+** - Modern PHP framework with robust features
- **React 18** - Component-based frontend library
- **TypeScript** - Type-safe JavaScript development
- **Syncfusion Components** - Professional UI component library
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

### Step 3: Install Syncfusion Components

```bash
# Install Syncfusion React components
npm install @syncfusion/ej2-react-grids @syncfusion/ej2-react-charts @syncfusion/ej2-react-calendars @syncfusion/ej2-react-buttons @syncfusion/ej2-react-inputs

# Install additional Syncfusion dependencies
npm install @syncfusion/ej2-base @syncfusion/ej2-data

# Install Syncfusion theme
npm install @syncfusion/ej2-material-theme
```

### Step 4: Configure Environment

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

# Syncfusion License Key (Get from syncfusion.com)
VITE_SYNCFUSION_LICENSE_KEY=your_license_key_here
```

### Step 5: Setup SQLite Database

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

### Step 6: Configure Vite

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

### Step 7: Configure TypeScript

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

### Step 8: Initialize Syncfusion License

Update `resources/js/app.tsx`:

```tsx
import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { registerLicense } from '@syncfusion/ej2-base';

// Register Syncfusion license
registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY || '');

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
```

### Step 9: Add Syncfusion Styles

Update `resources/css/app.css`:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Import Syncfusion theme */
@import '@syncfusion/ej2-material-theme/styles/material.css';
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-calendars/styles/material.css';
@import '@syncfusion/ej2-dropdowns/styles/material.css';
@import '@syncfusion/ej2-inputs/styles/material.css';
@import '@syncfusion/ej2-navigations/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import '@syncfusion/ej2-splitbuttons/styles/material.css';
@import '@syncfusion/ej2-grids/styles/material.css';
@import '@syncfusion/ej2-charts/styles/material.css';
```

## 🗄️ VS Code SQLite Extension Setup

### Install Extension

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for "SQLite" by alexcvzz
4. Click "Install"

### Usage

1. **Open Database:**
   - Press `Ctrl+Shift+P`
   - Type "SQLite: Open Database"
   - Select `database/database.sqlite`

2. **View Tables:**
   - Click table names in SQLite Explorer
   - Data appears in new tab

3. **Run Queries:**
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
│   │   └── app.css        # Main stylesheet with Syncfusion imports
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

## 🧩 Sample Syncfusion Component

Create `resources/js/Components/SyncfusionDemo.tsx`:

```tsx
import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

const SyncfusionDemo: React.FC = () => {
    const data = [
        {
            OrderID: 10248,
            CustomerID: 'VINET',
            EmployeeID: 5,
            OrderDate: new Date(8364186e5),
            ShipName: 'Vins et alcools Chevalier'
        },
        // Add more data as needed
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Syncfusion Components Demo</h2>
            
            <div className="mb-6 flex gap-4 items-center">
                <ButtonComponent isPrimary={true}>Primary Button</ButtonComponent>
                <DatePickerComponent placeholder="Select a date" />
            </div>

            <div className="bg-white rounded-lg shadow">
                <GridComponent 
                    dataSource={data} 
                    allowPaging={true} 
                    pageSettings={{ pageSize: 5 }}
                    allowSelection={true}
                >
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign="Right"/>
                        <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
                    </ColumnsDirective>
                    <Inject services={[Page, Selection]} />
                </GridComponent>
            </div>
        </div>
    );
};

export default SyncfusionDemo;
```

## 🔑 Getting Syncfusion License

1. Visit [syncfusion.com](https://www.syncfusion.com/)
2. Sign up for a free community license
3. Copy your license key
4. Add to `.env` file:
   ```
   VITE_SYNCFUSION_LICENSE_KEY=your_actual_license_key_here
   ```

## 🛠️ Common Commands

```bash
# Laravel Commands
php artisan migrate              # Run migrations
php artisan migrate:fresh        # Fresh migration
php artisan make:model ModelName # Create model
php artisan make:controller ControllerName # Create controller
php artisan route:list          # List all routes
php artisan tinker              # Laravel REPL

# Frontend Commands
npm run dev                     # Development server
npm run build                   # Production build
npm run preview                 # Preview production build

# Database Commands
php artisan db:seed             # Run seeders
php artisan make:seeder SeederName # Create seeder
php artisan make:migration migration_name # Create migration
```

## 🔧 Troubleshooting

### Common Issues

1. **Syncfusion License Error:**
   - Ensure you have a valid license key in `.env`
   - Register for free community license at syncfusion.com

2. **Database Connection Error:**
   - Check if `database/database.sqlite` exists
   - Verify `DB_CONNECTION=sqlite` in `.env`

3. **TypeScript Errors:**
   - Run `npm install` to ensure all types are installed
   - Check `tsconfig.json` configuration

4. **Build Errors:**
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
- [Syncfusion React Documentation](https://ej2.syncfusion.com/react/documentation/)
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