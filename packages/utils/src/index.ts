export const toMoney = (amount: number, currency = "MAD") => new Intl.NumberFormat("fr-MA", { style: "currency", currency }).format(amount);
