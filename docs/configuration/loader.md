# Loader Script
To bring your desired elevator to life using Cortex, insert a `Script` into the elevator model, and name it `Loader`.<br>
Copy & paste the code below into your script.

```lua:no-line-numbers
require(8533575827)(script, script.Parent.Settings, 'Core', {['BUILD']='STABLE'})
```

::: tip
The official Cortex source code is hosted & regularly updated [here](https://www.roblox.com/library/8533575827/), using the ID `8533575827`.<br>
There are **three** branches available: `STABLE`, `DEVELOPMENT`, and `ALPHA`. Replace `STABLE` in your loader code with any of these build names.
:::

::: tip NOTE
The Cortex source code is free to modify & redistribute, using the Open Source license.
We appreciate credit for our hard work into writing the code for our systems. It is not mandated, but we would greately appreciate it.
:::