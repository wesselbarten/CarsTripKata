# Backlog

1. **New EV Properties**:
   - `batteryCapacity`: Maximum energy storage (kWh)
   - `energyConsumption`: Energy usage rate (kWh/100km)
   - `currentCharge`: Currently available energy (kWh) => always start from 0

2. **New Methods**:
   - `charge(kWh: number): void` - Add energy to battery
   - `currentCharge(): number` - Show current charge level of the battery

3. **Modified Behavior**:
   - `travel()` should use electric energy calculations
   - `data()` should show charge level instead of fuel

# Approach
- Rename Car to PetrolCar
- Extract separate IPetrolCarEntity interface from ICarEntity
- Introduce IElectricCarEntity interface that extends ICarEntity
- Combine fuelConsumption and tankCapacity into a separate class TBD
    - Extract base interface from this class
    - Introduce class for `batteryCapacity` and `energyConsumption`.