function checkType(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        return true;
    }

    return false;
}

function suma(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

function multiplicacion(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    return n1 / n2;
}

function potencia(n1, n2) {
    return n1 ** n2;
}

function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}

module.exports = {
    suma,
    multiplicacion,
    division,
    potencia,
    resta,
    checkType
};