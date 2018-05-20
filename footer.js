



function dateToMonthYear(dateMMDDYYhhmmss)
{
    s = dateMMDDYYhhmmss.split('/');
    month = s[0];
    t = s[2].split(' ');
    year = t[0];
    console.log(month);
    console.log(year);
//     months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = months[month-1];
    console.log(month);
    r = month + ' ' + year;
    console.log(r);
    return r;
}



document.write('Last update: ' + dateToMonthYear(document.lastModified))