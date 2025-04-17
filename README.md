# HuskyTracks

HuskyTracks is a comprehensive lost and found management system for Northeastern University, allowing students to report lost items and track them through a user-friendly interface with interactive maps.

## Features

### Interactive Map System
- **Leaflet Map Integration**: Built on Leaflet.js for interactive, responsive campus mapping
- **Category-Based Icons**: Custom icons for different item categories (Electronics, Books, Clothing, etc.)
- **Status Indicators**: Color-coded markers showing item status (Pending, Matched, Returned, Transferred)
- **Automatic Geocoding**: Places items on map based on reported locations or predefined campus landmarks
- **Interactive Markers**: Click to view full item details in a popup and highlight selected items
- **Visual Selection**: Selected items are highlighted with red border for easy identification
- **Auto-Zoom**: Automatically zooms to selected items for better visibility
- **Fallback Locations**: Strategically places items near campus landmarks when exact coordinates are unavailable

### Student Dashboard
- **Item Management**: View, filter, and sort lost items by category, status, and date
- **Category Filtering**: Filter items by categories (Electronics, Clothing, Books, etc.)
- **Status Tabs**: Quick tabs for All Items, Active (Matched), and Resolved items
- **Item Selection**: Select items to highlight them on the map
- **Item Reports**: Detailed form for reporting lost items with location picker

### Backend System
- **MongoDB Integration**: Flexible document-based storage for lost item data
- **Express API**: RESTful API for CRUD operations on lost items
- **Coordinate Validation**: Ensures proper geographic coordinates
- **Image Upload**: Support for item images with automatic storage
- **Status Tracking**: Tracks item status throughout the recovery process

### UI/UX Improvements
- **Responsive Design**: Works on mobile and desktop devices
- **Material-UI Components**: Modern, accessible interface elements
- **Interactive Elements**: Hover and selection effects for better user experience
- **Category Icons**: Visual identification of item types on both map and cards
- **Campus Safety Tips**: Helpful tips for preventing loss of items

## Technical Enhancements

### Map Marker Optimization
- **Custom Icon System**: Dynamically maps item categories to specialized icons
- **Smart Icon Selection**: Fallback logic to select appropriate icons based on item categories or keywords in title
- **Configurable Icon Size**: 95% fill ratio for optimal visibility
- **Status Rings**: Color-coded rings around markers indicate item status
- **Popup Information**: Detailed item information displayed in marker popups
- **Marker Clustering**: Prevents overlapping markers in densely populated areas
- **CSS Injection**: Ensures Leaflet styles are applied correctly regardless of import status

### Performance Optimizations
- **Efficient Rendering**: Uses React.memo and useCallback for optimal performance
- **Dynamic Loading**: Loads map tiles on demand for faster initial loading
- **State Management**: Careful state management to prevent unnecessary renders
- **Debounced Search**: Efficient searching without performance impact
- **Map Recalculation**: Forces map recalculation when container becomes visible

## Technology Stack

### Frontend
- React.js
- Material-UI
- Leaflet.js with React-Leaflet
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Multer for file uploads
- Custom geocoding system

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB

### Installation

1. Clone the repository

2. Install dependencies for both client and server

Client dependencies
    cd huskytracks-client
    npm install
Server dependencies
    cd ../huskytracks-server
    npm install

3. Set up environment variables
- Create `.env` file in server directory with MongoDB connection string
- Create `.env` file in client directory if needed

4. Start development servers

# Start server (from huskytracks-server directory)
npm run dev

# Start client (from huskytracks-client directory)
npm run dev

5. Access the application at `http://localhost:5173`

## Future Enhancements
- Real-time notifications when items are matched
- Mobile app version
- Integration with university ID system
- Admin dashboard for analytics
- AI-assisted matching system