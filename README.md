# World Explorer

A small, responsive React app that lets you explore countries around the world — search, filter, sort, and open a detail page (flag, population, capital, currency, map link, and a Wikipedia shortcut). Built with **React + Vite**, client-side routing, and a clean UI.

---

## 🚀 Features
- Fetches country data from the **REST Countries API**.
- Country list with:
  - Search by name (case-insensitive).
  - Filter by region (All, Africa, Americas, Asia, Europe, Oceania).
  - Sort A → Z and Z → A.
- Country card shows flag, name, population, region and capital.
- Country detail page (`/country/:name`) shows:
  - Official name, capital(s), region, subregion, population, area, currencies.
  - Flag image and an embedded Google Map (via `latlng`).
  - Quick “Learn More on Wikipedia” link.
- Static **About** section rendering “interesting facts” from a local JSON (`data/countryData.json`).
- Loader animation while fetching data (styled-components).
- Responsive layout using Tailwind CSS.
- Client-side routing using `createBrowserRouter` + `RouterProvider` with nested routes.

---

## 🛠️ Tech Stack
- **React** (v19)
- **Vite** (for fast build and dev server)
- **React Router (v7)** — `createBrowserRouter` + `RouterProvider`
- **Tailwind CSS** for layout & styling
- **styled-components** (used for the loader)
- **react-icons** (UI icons)
- **REST Countries API** (`https://restcountries.com`)

---

## ⚙️ Installation & Setup

1. Clone the repo:
git clone https://github.com/SaiCharan963/world-explorer-we.git
cd world-explorer-we

2. Install dependencies:
npm install

3. Run the dev server:
npm run dev

---

## 📌 Usage

**Routes**

- / — Home (Intro profile + About + Contact previews)

- /about — Interesting Facts (data from data/countryData.json)

- /country — Country Explorer (list, search, filter, sort)

- /country/:name — Country Detail Page (map + Wikipedia link)

- /contact — Contact Page

- Invalid routes → Error Page

**How to Use the Country Explorer**

- Go to /country.

- Type a country name in the search box.

- Filter by region using the dropdown.

- Sort countries A → Z or Z → A.

- Click Read More for detailed info, map, and Wikipedia link.

---

## 📂 Folder Structure

/src  
 ┣ 📁 **components** — Navbar.jsx, Loader.jsx, Card.jsx, CountryDetails.jsx, SearchFilter.jsx, Profile.jsx, Footer.jsx  
 ┣ 📁 **pages** — Home.jsx, About.jsx, Country.jsx, Contact.jsx, Errorpage.jsx  
 ┣ 📁 **data** — countryData.json  
 ┣ App.jsx  
 ┣ index.jsx  
package.json

---

## Future Improvements

1. Pagination or infinite scroll
2. Caching with localStorage or Service Worker
3. Add multi-language support
4. Dark/light theme toggle
5. Better error UI
6. Unit tests (Jest + React Testing Library)

---

## 📷 Screenshots
<img width="1897" height="903" alt="image" src="https://github.com/user-attachments/assets/29202714-df13-4dce-b9ce-fe03c7aa2c06" />
<img width="1897" height="904" alt="image" src="https://github.com/user-attachments/assets/f461227b-15ad-409b-af9b-29d885aab39e" />
<img width="1896" height="900" alt="image" src="https://github.com/user-attachments/assets/38c69364-0bc9-4ef6-b91d-329ffdd572e5" />
