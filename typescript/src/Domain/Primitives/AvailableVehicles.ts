export const AvailableVehicles = {
    Toyota: {
        Corolla: { brand: "Toyota", model: "Corolla", fuelConsumption:5, tankCapacity:30 },
        Camry: { brand: "Toyota", model: "Camry", fuelConsumption:7, tankCapacity:40 },
    },
    Ford: {
        Mustang: { brand: "Ford", model: "Mustang", fuelConsumption:8, tankCapacity:50 },
    },
    Tesla: {
        ModelS: { brand: "Tesla", model: "Model S", energyConsumption: 17.5, batteryCapacity:100 },
        ModelX: { brand: "Tesla", model: "Model X", energyConsumption: 20.8, batteryCapacity:100 },
    }
} as const;
