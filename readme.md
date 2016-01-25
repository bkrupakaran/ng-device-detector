#ng-device-detector
##Angular module to detect OS / Browser / Device

### deviceDetector service
Holds the following properties:
* raw : object : contains the raw values... for internal use mostly.
* os : string : name of current OS
* browser : string : name of current browser
* device : string : name of current device
 

## Setup

Add to package.json:
```javascript
"dependencies": {
    ...
    "ng-device-detector": "git+ssh://git@github.com:bkrupakaran/ng-device-detector.git"
}
```


## Installation (with Influence Health pridict ui)

Use in app.js:
```javascript
ui.use(require('ng-device-detector'));
```


## Installation (without ui-core / typical)

Everything you need is already minified
node_modules/ng-device-detector/dist/ng-device-detector.min.js

As soon as you've got the file included in your page you just need to declare a dependency on the ng-device-detector module:
angular.module('myModule', ['deviceDetector']);

## Build
**Note:** if you make changes, you must run **gulp** to rebuild the combined files in the 'dist' directory. You may need to also update the package.json version number.

## Changelog

### 1.0.0

Created ng-device-detector repo