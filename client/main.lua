-- TASKS

RegisterNetEvent('nex-tasks:client:showTask', function(title, task, type)
    SendNUIMessage({
        message = "showTask",
        title = title,
        task = task,
        type = type
    })
end)

RegisterNetEvent('nex-tasks:client:hideTask', function()
    SendNUIMessage({
        message = "hideTask"
    })
end)

-- Usage example tasks:

-- Displays normal task
RegisterCommand('nex:showNormalTask', function()
    TriggerEvent('nex-tasks:client:showTask', 'GIG: FREEDOM OF THE PRESS', 'Collect your reward.')
end, false)

-- Displays important task
RegisterCommand('nex:showImportantTask', function()
    TriggerEvent('nex-tasks:client:showTask', 'GIG: FREEDOM OF THE PRESS', 'Collect your reward.', 'important')
end, false)

-- Hide currently shown task
RegisterCommand('nex:hideTask', function()
    TriggerEvent('nex-tasks:client:hideTask')
end, false)


-- INTERACTION


RegisterNetEvent('nex-tasks:client:showInteraction', function(key, text)
    SendNUIMessage({
        message = "showInteraction",
        key = key or 'E',
        text = text or 'PRESS TO OPEN SHOP',
    })
end)

RegisterNetEvent('nex-tasks:client:hideInteraction', function()
    SendNUIMessage({
        message = "hideInteraction"
    })
end)

-- Usage example interaction:

-- Displays normal task
RegisterCommand('nex:showInteraction', function()
    TriggerEvent('nex-tasks:client:showInteraction', 'E', 'PRESS TO OPEN SHOP')
end, false)

-- Hide currently shown task
RegisterCommand('nex:hideInteraction', function()
    TriggerEvent('nex-tasks:client:hideInteraction')
end, false)
