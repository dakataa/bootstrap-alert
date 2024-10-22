# Bootstrap Alert
This library is Bootstrap Framework extension that helps you to create beautiful Alert and Confirm popups, based on Bootstrap Modals.

### How to install

#### Using npm:
npm install @dakataa/bootstrap-alert

#### Using yarn:
yarn add @dakataa/bootstrap-alert


### How to use it
#### 1. Import the library
```js
import Alert, {Icon} from "@dakataa/bootstrap-alert";
```

### 2. Create Alert Instance and show it

```js
const config = {
	title: 'Well done!',
	icon: Icon.success
};

const instance = new Alert(config);
instance.show().then((result) => {
	console.log('successed', result);
}).catch((result) => {
	console.log('cancelled or denied', result)
});
```

### Configuration

| Key             | Required | Type                         | Default         | Description                                                             | 
|-----------------|----------|------------------------------|-----------------|-------------------------------------------------------------------------|
| title           | Yes      | string                       | No              | Text or HTML                                                            |
| text            | No       | string                       | null            | Text or HTML                                                            |
| icon            | No       | Icon Enum, Promise or string | null            | Animated Lottie Icon                                                    |
| size            | No       | Size Enum or string          | Size.small (sm) | Popup size                                                              |
| actions         | No       | Object ([key]: Action)       | null            | Action Buttons                                                          |
| allowClose      | No       | Boolean                      | false           | Preventing the Popup from closing except if there is no actions defined |
| timeout         | No       | Integer                      | null            | Automatically closing after number of milliseconds                      | 
| timeoutProgress | No       | Boolean                      | false           | Display Timeout Progress bar                                            |

### Methods

| Method                      | Return                                  | Description                          |
|-----------------------------|-----------------------------------------|--------------------------------------|
| show                        | Promise<Result>                         | Display popup based on configuration |
| hide                        | void                                    | Hide popup                           |
| getHTMLElement              | HTMLElement or undefined                | Returns Modal HTML Element           |
| getBootstrapModalInstance   | Bootstrap Modal instance or undefined   |                                      |

### Icon Enum
Icon Enum is an object contains import Promises of default Lottie Animations.

| Key     | Description       |
|---------|-------------------|
| success | Success animation |
| denied  | Denied Animation  |
| warning | Warning Animation |
| success | Success Animation |

#### How to use it
```js
import {Icon} from "@dakataa/bootstrap-alert";

new Alert({title: 'Success', icon: Icon.success}).show();
```

#### How to use custom icon
```js

const customIconAnimation = import('path/to/lottie.json');

new Alert({title: 'Custom Icon Animation', icon: customAnimation}).show();
```
or

```js
new Alert({title: 'Custom Icon Animation', icon: 'public/path/to/lottie.json'}).show();
```


### Examples
TODO
