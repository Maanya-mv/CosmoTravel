# Nebula Nexus – Satellite Tracking & Space Telemetry Dashboard

Nebula Nexus is a web-based space dashboard that visualizes real-time satellite telemetry, ISS tracking, asteroid tracking, system statistics, and space weather conditions.
This project was built using React/Next.js (mostly frontend-focused) and integrates external APIs to fetch live astronomical and satellite data.

This project secured a **Top 25 Rank out of 450 teams** at **Nebula Nexus Hackathon – Manipal University (July 2025)** where I participated as a solo developer.

---

## Features

* Real-time **International Space Station (ISS) location tracking**
* **Asteroid tracker** using NASA NEO API
* **Mars weather & telemetry** visualization (where API support is available)
* Satellite telemetry dashboard UI
* Live system status components
* Reusable and modular component structure
* Clean UI, space-themed background animation

---

## Tech Stack Used

| Category           | Technology                                         |
| ------------------ | -------------------------------------------------- |
| Frontend Framework | React / Next.js                                    |
| APIs Used          | NASA NEO API, Open Notify ISS API, Space Data APIs |
| Styling            | CSS, custom stylesheets                            |
| Build Tools        | Node.js, npm/yarn                                  |

---

## Folder Structure (main components)

```
src/
│── components/
│   ├── AsteroidTracker.js
│   ├── Dashboard.js
│   ├── ISSLocation.js
│   ├── MarsWeather.js
│   ├── SatelliteTelemetry.js
│   ├── SystemStatus.js
│   ├── LoginPage.js
│   ├── About.js
│   ├── StarfieldBackground.js
│   └── styles/
│
│── pages/
│── public/
│── README.md
```

---

## Setup Instructions

### 1. Clone Repository

```
git clone https://github.com/<your-username>/nebula-nexus.git
```

### 2. Install Dependencies

```
npm install
```

### 3. Start the Project

```
npm run dev
```

### 4. View in Browser

```
http://localhost:3000/
```

---

## How It Works

1. The frontend sends API requests to NASA OpenNEX / ISS tracking endpoints.
2. Responses are parsed and displayed on different dashboard components.
3. Telemetry, weather, satellite position, and asteroid details update dynamically.

---

## Future Enhancements

* Add backend support (Node.js + database)
* Add alerts/notifications for near-Earth object risk level
* Improve 3D visualization of satellite orbits using Three.js
* Deploy on Vercel / Netlify

---

## Achievements

* Ranked **Top 25 out of 450 teams**
* Solo development submission
* Built within 24 hours during the hackathon

---

## License

This project is open-source under the **MIT License**.

---

