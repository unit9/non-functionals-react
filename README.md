# Non Functionals React

## Installation

`npm i non-functionals-react --save`

## Available Components:

* Not Found
* Rotate Device
* Unsupported
* WebGL Not Enabled
* Window Too Small
* Build Version

## Usage:

Simply import the components you need: 

`import { NotFound, RotateDevice } from 'non-functionals-react';`

and add them to your render method:

```javascript
<NotFound
  title="OOPS!"
  subtitle="Sorry, something has gone wrong."
  description="We can't find what you're looking for."
  cta="Back to Home"
  zIndex={10000}
  onContinue={() => console.log('continue')}
/>
```

## Component Props:

##### Not Found

| prop               | type     | required |
| ------------------ | ------   | -------- |
| icon               | string   | no       |
| title              | string   | yes      |
| subtitle           | string   | yes      |
| description        | string   | yes      |
| cta                | string   | yes      |
| ctaBackgroundColor | string   | no       |
| ctaFontColor       | string   | no       |
| fontColor          | string   | no       |
| backgroundColor    | string   | no       |
| backgroundImage    | string   | no       |
| zIndex             | number   | no       |
| onContinue         | function | yes      |

##### Rotate Device

| prop               | type     | required |
| ------------------ | ------   | -------- |
| mobileOrientation  | string   | yes      |
| mobileIcon         | string   | no       |
| mobileTitle        | string   | yes      |
| tabletOrientation  | string   | yes      |
| tabletIcon         | string   | no       |
| tabletTitle        | string   | yes      |
| fontColor          | string   | no       |
| backgroundColor    | string   | no       |
| backgroundImage    | string   | no       |
| zIndex             | number   | no       |

##### Unsupported

| prop                   | type     | required |
| ---------------------- | ------   | -------- |
| supported              | object   | yes      |
| icon                   | string   | no       |
| unsupportedIcons       | array    | yes      |
| unsupportedIconsMobile | array    | yes      |
| title                  | string   | yes      |
| mobileTitle            | string   | yes      |
| description            | string   | yes      |
| mobileDescription      | string   | yes      |
| socialInstructions     | string   | yes      |
| cta                    | string   | yes      |
| ctaBackgroundColor     | number   | no       |
| ctaFontColor           | string   | no       |
| fontColor              | string   | no       |
| backgroundColor        | string   | no       |
| backgroundImage        | string   | no       |
| zIndex                 | number   | no       |

###### Note:

The `supported` prop must follow this pattern:

```javascript
{
  desktop: [
    { browser: 'chrome', minVersion: 2 },
    { browser: 'safari', minVersion: 9 },
    { browser: 'firefox', minVersion: 56 },
    { browser: 'ie', minVersion: 11 },
    { browser: 'edge', minVersion: 14 },
  ],
  tablet: [
    { os: 'ios', browser: 'mobile safari' },
    { os: 'android', browser: 'chrome' },
  ],
  mobile: [
    { os: 'ios', browser: 'mobile 1safari' },
    { os: 'android', browser: 'chrome' },
  ],
}
```

Please adjust the following properties to fit your specific project:
* Desktop: `browser`, `minVersion`
* Tablet: `os`, `browser`
* Mobile: `os`, `browser`

##### WebGL Not Enabled

| prop               | type     | required |
| ------------------ | ------   | -------- |
| icon               | string   | no       |
| title              | string   | yes      |
| description        | string   | yes      |
| fontColor          | string   | no       |
| backgroundColor    | string   | no       |
| backgroundImage    | string   | no       |
| zIndex             | number   | no       |

##### Window Too Small

| prop               | type     | required |
| ------------------ | ------   | -------- |
| minWidth           | number   | yes      |
| minHeight          | number   | yes      |
| icon               | string   | no       |
| title              | string   | yes      |
| description        | string   | yes      |
| fontColor          | string   | no       |
| backgroundColor    | string   | no       |
| backgroundImage    | string   | no       |
| zIndex             | number   | no       |

##### Build Version

| prop    | type   | required |
| ------- | ------ | -------- |
| version | number | yes      |
| live    | number | yes      |

###### Note:

The `version` prop should follow this format:

```javascript
v {build number} built on {new Date().toGMTString()}
```

## Running locally:
Simply run `npm i` followed by `npm start`