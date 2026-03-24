# nexus-ui-components

🧩 Production-ready React components for NEXUS platform combining Bootstrap concepts and Flat UI aesthetics.

## Components

- ✅ **ProductCard**: Marketplace product listings
- ✅ **Modal**: Animated dialog boxes
- ✅ **Forms**: Input, TextArea, Select with validation
- ✅ **Button**: Multiple variants (primary, secondary, success, danger, ghost)
- ✅ **Alert**: Notification boxes
- ✅ **Badge**: Status indicators
- ✅ **Tabs**: Navigation tabs
- ✅ **Card**: Content containers

## Installation

```bash
npm install nexus-ui-components
# or
yarn add nexus-ui-components
```

## Usage

```javascript
import { ProductCard, Button, Modal, Input } from 'nexus-ui-components';

<ProductCard 
  title="AI Music Generator"
  price={9.99}
  category="Music"
  isAiGenerated={true}
/>

<Button variant="primary">Click Me</Button>

<Input 
  label="Email" 
  type="email" 
  placeholder="you@example.com"
/>
```

## License

MIT © Mattlk13
