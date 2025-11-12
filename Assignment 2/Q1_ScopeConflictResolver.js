let bonus = 5000;

function calculateSalary() {
    let salary = 40000;

    if (isPermanent) {
        let total = salary + bonus;
        console.log("Total Salary (Permanent Employee):", total);
    } else {
        console.log("Total Salary (Temporary Employee):", salary);
    }
}

calculateSalary();
console.log("Global Bonus remains:", bonus);
