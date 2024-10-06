// First function
export function First_Function(name, currentAge, birthYear) {
    console.log(`Hello! ${name}. Your Current Age is ${currentAge}`);
    console.log(`You were born in ${birthYear}.\n`);
}

// Second function
export function Second_Function(meters) {
    const conversionFactor = 3.28084;
    const feet = meters * conversionFactor;

    return feet; 
}


// Third function
export function Third_Function(n) {
    let facto = 1;

    for (let i = 1; i <= n; ++i) {
        facto = facto * i;
    }

    return `Factorial of ${n} is: ${facto}\n`;
}

// Fourth function
export function Fourth_Function(monthlyInvestment, yearlyRate, noOfYears) {
    for (let i = 1; i <= noOfYears; ++i) {
        let futureValue = 0;
        let monthlyInterestRate = yearlyRate / 12 / 100;
        let totalMonths = i * 12;

        for (let j = 1; j <= totalMonths; ++j) {
            futureValue += monthlyInvestment;
            futureValue *= (1 + monthlyInterestRate);
        }

        console.log(`Future value after year ${i}: $${futureValue.toFixed(2)}`);
    }
}
