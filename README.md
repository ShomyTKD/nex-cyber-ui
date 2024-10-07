# Short description

Set of small UI elements inspired by Cyberpunk 2077.

## Tasks

Two types of tasks, "normal" and "important".

### Usage

Normal Task
```lua
TriggerEvent('nex-tasks:client:showTask', 'GIG: FREEDOM OF THE PRESS', 'Collect your reward.')
```

Important Task
```lua
TriggerEvent('nex-tasks:client:showTask', 'GIG: FREEDOM OF THE PRESS', 'Collect your reward.', 'important')
```

Hide Task
```lua
TriggerEvent('nex-tasks:client:hideTask')
```

### Preview

![normal-task](https://i.imgur.com/UEOoF3H.jpeg)
![important-task](https://i.imgur.com/TsxrMkZ.jpeg)



## Interaction

Simple interaction UI with a key.

### Usage

Show Interaction
```lua
TriggerEvent('nex-tasks:client:showInteraction', 'E', 'PRESS TO OPEN SHOP')
```

Hide Interaction
```lua
TriggerEvent('nex-tasks:client:hideInteraction')
```

### Preview

![interaction](https://i.imgur.com/s1gR78m.jpeg)
