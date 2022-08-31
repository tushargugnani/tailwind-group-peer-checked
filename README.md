# tailwind-group-peer-checked
A tailwindcss utility class that allows styling a group of parent-child elements when radio / checkbox checked-unchecked, instead of just sibling element

# Installation

```
npm install -D @tushargugnani/tailwind-group-peer-checked
```

Then add the plugin to your `tailwind.config.js` file:

```
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tushargugnani/tailwind-group-peer-checked'),
    // ...
  ],
}
```

# Usage

```
<div>
    <input type="checkbox" class="peer"/>
    <div class="group">
         <div class="group-peer-checked:bg-blue-800">Checked</div>
         <div class="hidden group-peer-checked:block">Test</div>
     </div>
</div>
```

https://play.tailwindcss.com/DPuOY8scDY
