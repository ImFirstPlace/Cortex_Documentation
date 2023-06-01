# Server API

**How to fetch the API**
```lua:no-line-numbers
local API = LocationToElevatorModel.Cortex_API
```

## Independent Service
```lua:no-line-numbers
API:Fire('Independent_Service', enabled)
```

**Parameters**
| Name | Type | Required |
| ---- | ---- | -------- |
| enabled | `boolean` | ✔ |

## Fire Recall
```lua:no-line-numbers
API:Fire('Fire_Service_Phase_1', enabled, recallFloor)
```
**Parameters**
| Name | Type | Required |
| ---- | ---- | -------- |
| enabled | `boolean` | ✔ |
| recallFloor | `number` | ✔ |

## Fire Service Phase 2
```lua:no-line-numbers
API:Fire('Fire_Service_Phase_2', enabled)
```

**Parameters**
| Name | Type | Required |
| ---- | ---- | -------- |
| enabled | `boolean` | ✔ |

## Stop
```lua:no-line-numbers
API:Fire('Stop', enabled)
```

**Parameters**
| Name | Type | Required |
| ---- | ---- | -------- |
| enabled | `boolean` | ✔ |

## Add Call
```lua
API:Fire('Add_Call', floor)
```

**Parameters**
| Name | Type | Required |
| ---- | ---- | -------- |
| floor | `number` | ✔ |

## Add Hall Call
```lua
API:Fire('Add_Hall_Call', floor)
```

**Parameters**
| Name | Type | Required |
| ---- | ---- | -------- |
| floor | `number` | ✔ |

## Add Directional Hall Call
```lua
API:Fire('Add_Directional_Hall_Call', {floor, direction})
```

**Parameters**
| Name | Type | Required | Values |
| ---- | ---- | -------- | ------ |
| floor | `number` | ✔ |
| direction | `string` | ✔ | `U`, `D` |

## Door Open
```lua
API:Fire('Door_Open', tableWithDoorSides)
```

**Parameters**
| Name | Type | Required | Default | Example |
| ---- | ---- | -------- | ------- | ------- |
| tableWithDoorSides | `table` | ✘ | All Doors | `{'Front', 'Rear'}` parameter will open the front and rear doors. |

## Door Close
```lua
API:Fire('Door_Close', tableWithDoorSides)
```

**Parameters**
| Name | Type | Required | Default | Example |
| ---- | ---- | -------- | ------- | ------- |
| tableWithDoorSides | `table` | ✘ | All Doors | `{'Front', 'Rear'}` parameter will close the front and rear doors. |

## Door Nudge
```lua
API:Fire('Door_Nudge', tableWithDoorSides)
```

**Parameters**
| Name | Type | Required | Default | Example |
| ---- | ---- | -------- | ------- | ------- |
| tableWithDoorSides | `table` | ✘ | All Doors | `{'Front', 'Rear'}` parameter will nudge the front and rear doors. |

## Lock Floors
```lua
API:Fire('Lock_Floors', tableWithFloors)
```

**Parameters**
| Name | Type | Required | Example |
| ---- | ---- | -------- | ------- |
| tableWithFloors | `table` | ✔ | `{1, 2}` parameter will lock the 1st and 2nd floor. |

## Unlock Floors
```lua
API:Fire('Unlock_Floors', tableWithFloors)
```

**Parameters**
| Name | Type | Required | Example |
| ---- | ---- | -------- | ------- |
| tableWithFloors | `table` | ✔ | `{1, 2}` parameter will unlock the 1st and 2nd floor. |

## Lock Hall Floors
```lua
API:Fire('Lock_Hall_Floors', tableWithFloors)
```

**Parameters**
| Name | Type | Required | Example |
| ---- | ---- | -------- | ------- |
| tableWithFloors | `table` | ✔ | `{1, 2}` parameter will lock the 1st and 2nd floor call buttons. |

## Unlock Hall Floors
```lua
API:Fire('Unlock_Hall_Floors', tableWithFloors)
```

**Parameters**
| Name | Type | Required | Example |
| ---- | ---- | -------- | ------- |
| tableWithFloors | `table` | ✔ | `{1, 2}` parameter will unlock the 1st and 2nd floor call buttons. |

## Inspection Service
```lua:no-line-numbers
API:Fire('Inspection_Service', enabled)
```

**Parameters**
| Name | Type | Required |
| ---- | ---- | -------- |
| enabled | `boolean` | ✔ |

## Inspection Service Common
```lua:no-line-numbers
API:Fire('Inspection_Service_Common', enabled)
```

**Parameters**
| Name | Type | Required |
| ---- | ---- | -------- |
| enabled | `boolean` | ✔ |

## Inspection Service Move
```lua:no-line-numbers
API:Fire('Inspection_Service_Move', {direction, speed})
```

**Parameters**
| Name | Type | Required | Values |
| ---- | ---- | -------- | ------ |
| direction | `string` | ✔ | `U`, `D` |
| speed | `number` | ✔ |

::: tip
Use the [`Inspection Service Stop`](#inspection-service-stop) API to stop the elevator from moving.
:::

## Inspection Service Stop
```lua:no-line-numbers
API:Fire('Inspection_Service_Stop', enabled)
```

**Parameters**
| Name | Type | Required |
| ---- | ---- | -------- |
| enabled | `boolean` | ✔ |

## Inspection Service Lock
```lua:no-line-numbers
API:Fire('Inspection_Service_Lock', enabled)
```

**Parameters**
| Name | Type | Required |
| ---- | ---- | -------- |
| enabled | `boolean` | ✔ |