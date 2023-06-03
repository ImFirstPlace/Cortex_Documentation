# Server Recieve API

**How to fetch the API**
```lua:no-line-numbers
local API = LocationToElevatorModel.Cortex_API
```

**How to check for a protocol event**
```lua:no-line-numbers
API.Event:Connect(function(protocol, params)
    -- If checks go in here
end)
```

## On Elevator Call
```lua:no-line-numbers
if protocol == 'onElevatorCall' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.floor | `destination` |

## On Call Enter
```lua:no-line-numbers
if protocol == 'onCallEnter' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params | `floor` |

## On Call Remove
```lua:no-line-numbers
if protocol == 'onCallRemove' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params | `floor` |

## On Door Open
```lua:no-line-numbers
if protocol == 'onDoorOpen' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.side | `sideIndex` |

## On Door Reopen
```lua:no-line-numbers
if protocol == 'onDoorReopen' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.side | `sideIndex` |

## On Door Close
```lua:no-line-numbers
if protocol == 'onDoorClose' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.side | `sideIndex` |

## On Depart Start
```lua:no-line-numbers
if protocol == 'onDepartStart' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.directionString | **U** / **D** |
| params.directionValue | **1** / **-1** |

## On Depart Pre Start Cancel
```lua:no-line-numbers
if protocol == 'onDepartPreStartCancel' then
    -- Code here
end
```

## On Elevator Move Begin
```lua:no-line-numbers
if protocol == 'onElevatorMoveBegin' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.directionString | **U** / **D** |
| params.directionValue | **1** / **-1** |

## On Elevator Stop
```lua:no-line-numbers
if protocol == 'onElevatorStop' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.floor | `arriveFloor` |

## On Elevator Arrive
```lua:no-line-numbers
if protocol == 'onElevatorArrive' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.floor | `floor` |
| params.direction | `queueDirection` **U** / **N** / **D** |
| params.parking | `boolean` |

## On Leveling State Change
```lua:no-line-numbers
if protocol == 'onLevelingStageChange' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.brakingMode | `brakingMode` |
| params.stage | `levelingStage` |

## On Relevel Start
```lua:no-line-numbers
if protocol == 'onRelevelStart' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.direction | `direction` |

## On Safety Brake
```lua:no-line-numbers
if protocol == 'onSafetyBrake' then
    -- Code here
end
```

## On Elevator Lantern API
```lua:no-line-numbers
if protocol == 'onElevatorLanternApi' then
    -- Code here
end
```

**Returns**
| Parameter | Value |
| --------- | ----- |
| params.event | `lanternEvent` |
| params.state | **active** / **neutral** |
| params.floor | `floor` |
| params.direction | `queueDirection` |
| params.type | **Interior** / **Exterior** |
| params.eventData | `lanternEventData` |

::: tip
`params.event` will return **Lantern_Inactive** when inactive.
:::