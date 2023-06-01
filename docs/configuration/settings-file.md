# Settings File
Insert a `ModuleScript` into the elevator model and name it `Settings` and insert the code below in the script:
```lua
return {
    -- All Categories go inside this table
}
```


## Doors Category
```lua
['Doors'] = {
    -- All settings related to doors gets put inside this table.
},
```

### Door Open & Close Speed <Badge type="warning" text="Required" vertical="top" />
```lua:no-line-numbers
['Door_Open_Speed'] = 1.68, -- Doors take 1.68 seconds to open fully.
['Door_Close_Speed'] = 2.48, -- Doors take 2.48 seconds to close fully.
```

### Door Nudge Speed <Badge type="tip" text="Optional" vertical="top" />
```lua:no-line-numbers
['Nudge_Speed'] = 3, --The time in seconds the doors will take to close (only on nudge mode)
```
**Defaults to `Door_Close_Speed` if setting isn't present.**

### Door & Nudge Timer <Badge type="warning" text="Required" vertical="top" />
```lua:no-line-numbers
['Door_Timer'] = 4,
['Nudge_Timer'] = 50,
```

### Door Open & Close Delay Pattern <Badge type="tip" text="Optional" vertical="top" />
```lua:no-line-numbers
['Door_Open_Delay_Pattern'] = {'Outer', 'Inner'}, -- Recommended only to use for freight doors
['Door_Close_Delay_Pattern'] = {'Inner', 'Outer'},
```


::: warning PAGE UNDER CONSTRUCTION
This page is under construction.
:::