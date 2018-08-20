const getTotalExpenses = (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else {
        return expenses
            .map((expenses) => expenses.amount)
            .reduce((sum, value) => {
                return sum + value
            }, 0)
    }
}

export default getTotalExpenses;