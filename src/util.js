// import React from 'react';

const FormatCurrency = (num) =>{
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}

export default FormatCurrency;