export const SAMPLE_BARCHART_DATA:any[] = [
    {data:[65,45,33,45,86,97,43], label:'Q3 Sales'},
    {data:[56,33,41,40,75,96,35], label:'Q4 Sales'}
]
export const SAMPLE_BARCHART_LABELS:string[] = ["W1","W2","W3","W4","W5","W6","W7"]

export const SAMPLE_PIE_CHART = {
    data:[350,150,430],
    labels:["A Firması", "B Firması", "C Firması"],
}

export const SAMPLE_SCOOTER_STATUS = {
    data:[350, 250, 20],
    labels:["Aktif", "Pasif", "Hizmet Dışı"],
}

export const MONTHLY_RENTS= {
    dataset:[
        {data:[152, 163, 174, 181, 175, 178, 186, 191, 197, 193, 198, 203, 200, 206, 208, 205, 204, 208, 211, 216, 213, 217, 213, 219, 222, 227, 230, 234, 231, 236], label: 'Kiralama Sayısı'},
    {data:[1520, 1630, 1740, 1810, 1750, 1780, 1860, 1910, 1970, 1930, 1980, 2030, 2000, 2060, 2080, 2050, 2040, 2080, 2110, 2160, 2130, 2170, 2130, 2190, 2220, 2270, 2300, 2340, 2310, 2360], label: 'Kiralama Tutarı'}
],
labels:['2/11', '3/11', '4/11', '5/11', '6/11', '7/11', '8/11', '9/11', '10/11', '11/11', '12/11', '13/11', '14/11', '15/11', '16/11', '17/11', '18/11', '19/11', '20/11', '21/11', '22/11', '23/11', '24/11', '25/11', '26/11', '27/11', '28/11', '29/11', '30/11', '1/12' ],
colors:[
    {
        backgroundColor: 'rgba(6,65,160,0.1)',
        borderColor: 'rgba(0,200,150,0.5)',
        pointBackgroundColor: '#000',
        pointBorderColor: '#000',
        pointHoverBackgroundColor: '#555',
        pointHoverBorderColor: '#555'
    },
    {
        backgroundColor: 'rgba(255,100,150,0.1)',
        borderColor: 'rgba(230,165,100,0.5)',
        pointBackgroundColor: '#000',
        pointBorderColor: '#000',
        pointHoverBackgroundColor: '#555',
        pointHoverBorderColor: '#555'
    }
]
}

export const MONTHLY_RENTS_DURATION= {
    dataset:[
        {data:[5320, 5550, 5210, 5368, 5482, 5687, 5235, 5489, 5278, 5852, 5465, 5735, 5169, 5846, 5264, 5426, 5321, 5432, 5246, 5555, 5510, 5015, 5378, 5456, 5245, 5111, 5122, 5234, 5431, 5385], label: 'Kiralama Süresi'},
],
labels:['2/11', '3/11', '4/11', '5/11', '6/11', '7/11', '8/11', '9/11', '10/11', '11/11', '12/11', '13/11', '14/11', '15/11', '16/11', '17/11', '18/11', '19/11', '20/11', '21/11', '22/11', '23/11', '24/11', '25/11', '26/11', '27/11', '28/11', '29/11', '30/11', '1/12' ],
colors:[
    {
        backgroundColor: 'rgba(6,65,160,0.1)',
        borderColor: 'rgba(0,200,150,0.5)',
        pointBackgroundColor: '#000',
        pointBorderColor: '#000',
        pointHoverBackgroundColor: '#555',
        pointHoverBorderColor: '#555'
    }
]
}

export const ACTIVE_PASSIVE_CUSTOMERS = {
    data:[126,482],
    labels:["Active","Passive"]
}

export const SERVERS = [
    {id: 1, name: 'dev-web', isOnline: true},
    {id: 2, name: 'dev-mail', isOnline: false},
    {id: 3, name: 'dev-web', isOnline: true},
    {id: 4, name: 'dev-mail', isOnline: true},

]
