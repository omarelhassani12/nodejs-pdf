module.exports = {
    formate: 'A3',
    orientation: 'portrait',
    border: '8mm',
    header:{
        height: '15mm',
        contents: '<h4 style="color: red; font-size:20; font-weight:800; text-align:center;">CUSTOMER </h4>'
    },
    footer:{
        height: '20mm',
        contents: {
            first: 'Cover page',
            2: 'Second page',
            default: '<span style="color:#444;>{{page}}</span>/<span>{{pages}}</span>',
            last: 'last page',
        }
    }
}