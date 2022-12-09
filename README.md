# Alpine JS Form Captcha

Prevent your forms getting unwanted submissions through the use of an image
puzzle ✅

### [Try it out on CodePen](https://codepen.io/markmead/full/abYpZbj)

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

It's very easy to install Alpine JS plugins! 🙌

### CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-form-captcha@latest/dist/captcha.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
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

### Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-form-captcha)
![](https://img.shields.io/npm/v/alpinejs-form-captcha)
![](https://img.shields.io/npm/dt/alpinejs-form-captcha)
![](https://img.shields.io/github/license/markmead/alpinejs-form-captcha)
