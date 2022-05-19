# UIKIT
dtnghia47@gmail.com

Welcome everyone ^^

this repo supoort create template uikit basic.

https://drive.)google.)com/drive/folders/1dp4rbhNi7Lin8HBpDCqznSb0EoGYUjaT?usp=sharing
#### How to start this repo
```
npm install


npm run build
npm run deploy
```

### How to use
```

```

#### For example Button document

**Props**| **Type** | **Required**
--|--
onClick | Function |  | optional
size | oneOf `sm` `md` `lg` | sm | optional
Icon | String `className your icon` | | optional
--|--

#### Example Component for use
```
import React from "react";
import { Button } from 'dtnghia47-uikit';

function App() {
  return (
    <div className="App">
      <Button width={100}>demo</Button>
    </div>
  );
}

export default App;
```

#### Current version
- simple template
- we can import this package in another repo

#### Plan for next update
- minimize package
- auto render version
- build generate component
- add default prop (init color for system)
- apply deep css and style something
- build view UI, we can see our uikit in this repo

#### Capture

![First Version](https://github.com/dtnghia47/uikit/blob/main/assets/npmjs.png?raw=true)