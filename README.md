Instructions:

Counter component: 
	UI elements:
		Minus button 
		Count State
		Plus button
	Properties:
		Initial count (integer) (default == 0)
		Incrementor (integer)  (default == 1)
	
Reset Component: 
	UI Elements:
		Message about current state exceeded
		Reset button
	Properties: 
		Upper bound (integer)
		Lower bound (integer)
		
Parent Component: 
	Properties:
		Upper bound (integer)
		Lower bound (integer)
		Initial count (integer)
		Incrementor (integer) 
		
    Instance 1:
        Upper: 5
        Lower: -5
        Default Initial count
        Default Incrementor
    Instance 2: 
        Upper: 25
        Lower: -25
        Initial Count: 10
        Incrementor: 5
