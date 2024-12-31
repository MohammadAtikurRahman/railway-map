
# Railway Map

`railway-map` is a React library for visualizing train routes and stations country-wise. It uses OpenRailway or Overpass APIs to fetch and display railway data, allowing customization of station icons and train routes.

## Features
- Display train routes and stations for a specified country.
- Customize station icons.
- Fetch data dynamically from OpenRailway or Overpass API.

---

## Installation

Install the package using npm:

```bash
npm install railway-map
```

---

## Usage

### Basic Example

```jsx
import React from 'react';
import RailwayMap from 'railway-map';

function App() {
    return (
        <div>
            <RailwayMap
                country="Germany"
                stationIcon="https://example.com/station-icon.png"
            />
        </div>
    );
}

export default App;
```

---

## Props

| Prop Name      | Type     | Required | Description                                                                 |
|----------------|----------|----------|-----------------------------------------------------------------------------|
| `country`      | `string` | Yes      | The name of the country to display railway routes and stations.            |
| `stationIcon`  | `string` | No       | URL of a custom icon for stations. Defaults to a red circle.               |
| `apiKey`       | `string` | No       | API key for Overpass or OpenRailway, if required.                          |

---

## Example: Set Custom Station Icon

```jsx
<RailwayMap
    country="France"
    stationIcon="https://example.com/custom-station-icon.png"
/>
```

---

## Development

### Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/railway-map.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the package:
   ```bash
   npm run build
   ```

4. Test the package locally in a sample React app.

---

## API Data Sources
This package uses Overpass API by default. Ensure that the country names match the dataset's format (e.g., `Germany`, `France`).

For more details on Overpass API, visit [Overpass API Documentation](https://wiki.openstreetmap.org/wiki/Overpass_API).

---

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/MohammadAtikurRahman/railway-map/issues).

---

## License

This project is licensed under the ISC License.

---

## Author

Created by [Mohammad Atikur Rahman](https://github.com/MohammadAtikurRahman).
