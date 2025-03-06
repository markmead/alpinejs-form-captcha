# Alpine JS Form Captcha Plugin

> [!IMPORTANT] Plugin is no longer supported.

![](https://img.shields.io/bundlephobia/min/alpinejs-form-captcha)
![](https://img.shields.io/npm/v/alpinejs-form-captcha)
![](https://img.shields.io/npm/dt/alpinejs-form-captcha)
![](https://img.shields.io/github/license/markmead/alpinejs-form-captcha)

This plugin adds a simple image-based captcha system to forms using Alpine.js.
It helps protect your forms from automated submissions by adding a verification
step that _should_ require human interaction.

## Example

```html
<form x-data>
  <input type="text" placeholder="Name" />

  <div
    x-form-captcha
    x-form-captcha-img="https://images.unsplash.com/photo-1598894000396-bc30e0996899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
  ></div>

  <button type="submit"> Submit </button>
</form>
```

### Bot Prevention

There is logic in place to stop one click answers, meaning there shouldn't be a
time where the answer is one click away.

### Styling

In the `x-form-captcha-img` is where you can pass the URL for the image you want
displayed.

The HTML that is generated hsa the following classes:

- `fvWrapper`
- `fvImg`
- `fvActions`
- `fvPrev`
- `fvNext`

### Modifiers

You can pass a rotation degrees with `x-form-captcha.30` where `30` is the
degrees you want.

## Install

### CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-form-captcha@latest/dist/captcha.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-form-captcha

yarn add -D alpinejs-form-captcha
```

Then you can register the plugin.

```js
import Alpine from 'alpinejs'
import captcha from 'alpinejs-form-captcha'

Alpine.plugin(captcha)

window.Alpine = Alpine

Alpine.start()
```
