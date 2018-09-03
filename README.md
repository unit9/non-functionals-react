# Non Functionals React

A set of simple React components for non functional pages that are easy to implement within any React project. Just pass in the props needed to suit your project and even access the css classes for more advanced customisation.

## Installation:

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

## Components:

#### Not Found:

##### Props:

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

##### HTML structure:
```html
<div class="NotFound">
  <img class="NotFound-Icon" />
  <h1 class="NotFound-Title" />
  <h2 class="NotFound-Subtitle" />
  <p class="NotFound-Description" />
  <button class="NotFound-Cta" />
</div>
```
---

#### Rotate Device:

##### Props:

| prop               | type     | required |
| ------------------ | ------   | -------- |
| mobileOrientation  | string   | yes      |
| mobileIcon         | string   | no       |
| mobileTitle        | string   | yes      |
| tabletOrientation  | string   | yes      |
| tabletIcon         | string   | no       |
| tabletTitle        | string   | yes      |
| fontFamily         | string   | no       |
| fontColor          | string   | no       |
| backgroundColor    | string   | no       |
| backgroundImage    | string   | no       |
| zIndex             | number   | no       |

##### HTML structure:
```html
<div class="RotateDevice">
  <img class="RotateDevice-Icon" />
  <h1 class="RotateDevice-Title" />
</div>
```
---

#### Unsupported:

##### Props:

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

##### Note:

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
    { os: 'ios', browser: 'mobile safari' },
    { os: 'android', browser: 'chrome' },
  ],
}
```

The `unsupportedIcons` and `unsupportedIconsMobile` props must follow this pattern:

```javascript
  { image: 'url', label: 'Optional label' },
```

Please adjust **_ONLY_** the following properties to fit your specific project:
* Desktop: `browser`, `minVersion`
* Tablet: `os`, `browser`
* Mobile: `os`, `browser`

##### HTML structure:
```html
<div class="Unsupported">
  <img class="Unsupported-Icon" />
  <h1 class="Unsupported-Title" />
  <div class="Unsupported-UnsupportedIcons">
    <div>
      <img />
      <span>{Label}</span>
    </div>
  </div>
  <p class="Unsupported-Description" />
  <p class="Unsupported-SocialInstructions" />
  <button class="Unsupported-Cta" />
</div>
```
---

#### WebGL Not Enabled:

##### Props:

| prop               | type     | required |
| ------------------ | ------   | -------- |
| icon               | string   | no       |
| title              | string   | yes      |
| description        | string   | yes      |
| fontColor          | string   | no       |
| backgroundColor    | string   | no       |
| backgroundImage    | string   | no       |
| zIndex             | number   | no       |

##### HTML structure:
```html
<div class="WebGLNotEnabled">
  <img class="WebGLNotEnabled-Icon" />
  <h1 class="WebGLNotEnabled-Title" />
  <p class="WebGLNotEnabled-Description" />
</div>
```
---

#### Window Too Small:

##### Props:

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

##### HTML structure:
```html
<div class="WindowTooSmall">
  <img class="WindowTooSmall-Icon" />
  <h1 class="WindowTooSmall-Title" />
  <p class="WindowTooSmall-Description" />
</div>
```
---

#### Build Version:

| prop    | type   | required | description |
| ------- | ------ | -------- | ----------- |
| version | string | yes      |
| live    | bool   | yes      | if `true` then component will be hidden |

##### Note:

The `version` prop should follow this format:

```javascript
v {build number} built on {new Date().toGMTString()}
```
---

## Running locally:
Simply run `npm i` followed by `npm start`
