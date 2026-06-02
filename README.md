# Employee-Auth
# Engineer Attendance Dashboard...

## 📌 Overview
The **Engineer Attendance Dashboard** is a web-based application for engineers to **check-in/check-out** at job sites with **GPS location validation** and **photo verification**.  
It uses **Google Maps API** for site location selection and **localStorage** for offline-capable attendance tracking.  
Admin users get extended controls for monitoring, reporting, and exporting attendance data.

---

## 🚀 Features

### 1️⃣ Dashboard
- 📍 **Google Maps Integration** with place search (India-restricted).
- 📏 **Proximity Check** — only allows marking attendance within **400 meters** of the site.
- 📸 **Photo Capture Verification** — uses device camera to take entry/exit photos.
- 🗂 **Attendance Cards** — expandable for details, includes entry/exit time and photos.
- 📅 **Filtering Options** — All, Yesterday, Last 7 Days, Last 30 Days, or Custom Range.

### 2️⃣ Statistics
- 📊 Displays attendance counts:
  - Today
  - Last 7 Days
  - Last 30 Days
  - Total Records
- Updates dynamically when new entries are added.

### 3️⃣ Profile Management
- ✏️ Update username, full name, and contact details.
- 📧 Email shown but locked for editing (linked to login ID).
- Profile data is stored in `localStorage`.

### 4️⃣ Admin Panel *(Restricted Access)*
- 🔒 Visible only to the **designated admin email**.
- 👥 View all users and their attendance history.
- 📄 Detailed records:
  - Place & ZIP
  - Entry/Exit time
  - Duration
  - Status
- 📤 **Export to Excel** (via SheetJS).
- 🛠 View and manage reported user issues.

### 5️⃣ Help & Issues
- 📝 Users can report issues through a form.
- 📂 Saved locally, visible to admins in the panel.

---

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, Bootstrap 5  
- **JavaScript:** ES6+, jQuery, GSAP animations  
- **APIs:** Google Maps JavaScript API (with Places Library)  
- **Camera:** HTML5 Media API (supports flipping between front/rear cameras)  
- **Data:** `localStorage` for offline-ready persistence  
- **Export:** SheetJS (`xlsx`) for Excel file download  

---

## 🎨 UI/UX Highlights
- 🌙 Dark mode with custom CSS variables for easy theme tweaks.
- 📱 Fully responsive & mobile-first design.
- ✨ Smooth animations and custom scrollbars.
- 🖱 Hover effects for better interaction feedback.

---

## 📖 How It Works

1. **Login:**  
   This app assumes login via Google OAuth (email and name stored in `sessionStorage`).

2. **Mark Attendance:**  
   - Search & select a site on the map.  
   - Be within **400m** of the site.  
   - Click **Mark Entry** → capture photo.  
   - Click **Mark Exit** → capture exit photo.  

3. **View Records:**  
   - Find your attendance in **cards format**.  
   - Filter by timeframe.  
   - Expand to see images and timestamps.  

4. **Profile:**  
   - Update personal details anytime.  

5. **Report Issues:**  
   - Submit from the **Help** section.  

6. **Admin (if authorized):**  
   - View all user data.  
   - Export an Excel report.  
   - See all reported issues.  

---

## 🔐 Access Control
- Admin features locked to one **hardcoded email** (`allowedAdminEmail` in code).
- All data stored locally in user’s browser (`localStorage`).

---

## ⚡ Quick Start

1. Clone or download this repository.
2. Open the `index.html` file in a modern browser **OR** host on a static server.
3. Make sure you have internet access for:
   - Google Maps API
   - Bootstrap, jQuery, GSAP, SheetJS
4. Allow **camera** and **location** permissions when prompted.
5. Log in and start marking attendance.

---

## 📂 Data Storage
- **Attendance:** `attendance_jobs__<userEmail>` in `localStorage`
- **Profile:** `prof__<userEmail>` in `localStorage`
- **Issues:** `issues__` in `localStorage`

---

## 📝 License
This project is free to use for educational and internal organizational purposes.  
Modify as needed for your team.

---

💡 *This tool is ideal for field engineering teams needing lightweight attendance tracking with GPS + photo verification, without heavy server infrastructure.*
