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

### Use Old Door Sensors <Badge type="tip" text="Optional" vertical="top" />
```lua:no-line-numbers
['Use_Old_Door_Sensors'] = false, -- Whether to use the old style 'bumper' door sensors or the new smarter region sensors
```
**Defaults to `false` if setting isn't present.**

### Reopen & Hold on Nudge Obstruction <Badge type="tip" text="Optional" vertical="top" />
```lua:no-line-numbers
['Reopen_When_Nudge_Obstruction'] = false, --Whether the door reopens when the doors are obstructed in nudge mode (the doors will reclose if reopened in nudge mode)
['Hold_On_Nudge_Obstruction'] = false, --Whether the doors stop on nudge obstruction
```
**Both defaults to `false` if setting isn't present.**

### Open & Reopen & Close Delay <Badge type="warning" text="Required" vertical="top" />
```lua:no-line-numbers
['Open_Delay'] = 0,
['Reopen_Delay'] = 0,
['Close_Delay'] = 0,
```
**Open/Close Delay defaults to `0`, Reopen Delay defaults to `.2` if setting isn't present.**

### Time Calculated Speed <Badge type="tip" text="Optional" vertical="top" />
```lua:no-line-numbers
['Enable_Time_Calculated_Speed'] = true, --When enabled, the doors will open/closed based on the time that has passed during its previous operation
```
**Defaults to `true` if setting isn't present.**



### Realistic Inner & Outer Doors Data <Badge type="tip" text="Optional" vertical="top" />
```lua:no-line-numbers
['Realistic_Doors_Data'] = { -- Inner Doors
	['Enable_Open'] = true,
	['Enable_Close'] = true,
	['Open_Time'] = .36,
	['Close_Time'] = .75,
	['Open_Easing_Style'] = 'In_Sine',
	['Close_Easing_Style'] = 'Linear',
	['Open_Ratio'] = 1.015, --How much the door gaps when transitioning to the animation. The larger the value, the larger the gap gets
	['Close_Ratio'] = 1.02, --How much the door gaps when transitioning to the animation. The larger the value, the larger the gap gets
	['Open_Delay'] = { --Amount of seconds the door pauses for after the door opens by the interlock ratio
		['Enable']=true,
		['Duration']=.3,
	},
	['Close_Delay'] = { --Amount of seconds the door pauses for before the door proceeds to finish closing
		['Enable']=true,
		['Duration']=.1,
	},
},
```

```lua:no-line-numbers
['Realistic_Outer_Doors_Data'] = { -- Outer Doors
	['Enable_Open'] = true,
	['Enable_Close'] = false,
	['Open_Time'] = .36,
	['Close_Time'] = .42,
	['Open_Easing_Style'] = 'In_Sine',
	['Close_Easing_Style'] = 'Linear',
	['Open_Ratio'] = 1, --How much the door gaps when transitioning to the animation. The larger the value, the larger the gap gets
	['Close_Ratio'] = 1.025, --How much the door gaps when transitioning to the animation. The larger the value, the larger the gap gets
	['Open_Delay'] = { --Amount of seconds the door pauses for after the door opens by the interlock ratio
		['Enable']=true,
		['Duration']=.3,
	},
	['Close_Delay'] = { --Amount of seconds the door pauses for before the door proceeds to finish closing
		['Enable']=false,
		['Duration']=.5,
	},
},
```

::: warning PAGE UNDER CONSTRUCTION
This page is under construction.
:::