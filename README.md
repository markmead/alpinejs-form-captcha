# Alpine JS Form Validator

✅ Alpine JS plugin that prevents your form getting unwanted submissions through the use of an image puzzle

## Example 👀

```html
<form x-data>
  <input type="text" palceholder="name" />

  <div
    x-form-validator
    x-form-validator-img="..."
  ></div>

  <button type="submit"> Submit </button>
</form>
```

### Styling

In the `x-form-validator-img` is where you can pass the URL for the image you want displayed.

The HTML that is generated hsa the following classes:

- `_fvWrapper`
- `_fvImg`
- `_fvActions`
- `_fvPrev`
- `_fvNext`

### Modifiers

You can pass a rotation degrees with `x-form-validator.30` where `30` is the degrees you want.


## Install 🌟

It's very easy to install Alpine JS plugins! 🙌

### CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-form-validator@latest/dist/validator.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-form-validator

yarn add -D alpinejs-form-validator
```

Then you can register the plugin.

```js
import Alpine from "alpinejs";
import validator from "alpinejs-form-validator";

Alpine.plugin(validator);

window.Alpine = Alpine;

Alpine.start();
```

### Stats 📊

![](https://img.shields.io/bundlephobia/min/alpinejs-form-validator)
![](https://img.shields.io/npm/v/alpinejs-form-validator)
![](https://img.shields.io/npm/dt/alpinejs-form-validator)
![](https://img.shields.io/github/license/markmead/alpinejs-form-validator)
