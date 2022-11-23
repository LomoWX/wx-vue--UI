模仿element-ui 

## Install
```shell
npm install wx-element-ui -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import wxElement from 'wx-element-ui'

Vue.use(wxElement)
// or
import {
  Select,
  Button
  // ...
} from 'wx-element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
