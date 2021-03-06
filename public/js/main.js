// Import charts lib, installed via JSPM - see package.json
import * as charts from 'charts'

// Now use some fake data and create a pie chart and a strip plot
let landcover = [{
        'category': 'Woodland',
        'color': '#66c2a5',
        'value': 45
    },
    {
        'category': 'Farmland',
        'color': '#a6d854',
        'value': 25
    },
    {
        'category': 'Scrubland',
        'color': '#fc8d62',
        'value': 15
    },
    {
        'category': 'Water',
        'color': '#8da0cb',
        'value': 10
    },
    {
        'category': 'Houses',
        'color': '#e78ac3',
        'value': 5
    }
]

// Give fake data to graphs
let pieChart = new charts.PieChart('pie-chart')
pieChart.setData(landcover)

let parishes = [
    {'parish':'Aldermaston','value':927},
    {'parish':'Aldworth','value':308},
    {'parish':'Ashampstead','value':398},
    {'parish':'Basildon','value':1559},
    {'parish':'Beedon','value':393},
    {'parish':'Beenham','value':1175},
    {'parish':'Boxford','value':466},
    {'parish':'Bradfield','value':2172},
    {'parish':'Brightwalton','value':322},
    {'parish':'Brimpton','value':613},
    {'parish':'Bucklebury','value':2066},
    {'parish':'Burghfield','value':5894},
    {'parish':'Catmore','value':28},
    {'parish':'Chaddleworth','value':482},
    {'parish':'Chieveley','value':2710},
    {'parish':'Combe','value':38},
    {'parish':'Compton','value':1521},
    {'parish':'Enborne','value':492},
    {'parish':'Englefield','value':303},
    {'parish':'Farnborough','value':100},
    {'parish':'Fawley','value':172},
    {'parish':'Frilsham','value':321},
    {'parish':'Greenham','value':2712},
    {'parish':'Hermitage','value':1154},
    {'parish':'Holybrook','value':7162},
    {'parish':'Hungerford','value':5559},
    {'parish':'Inkpen','value':877},
    {'parish':'Kintbury','value':2593},
    {'parish':'Lambourn','value':4017},
    {'parish':'Leckhampstead','value':315},
    {'parish':'Midgham','value':282},
    {'parish':'Padworth','value':548},
    {'parish':'Pangbourne','value':2981},
    {'parish':'Peasemore','value':297},
    {'parish':'Speen','value':2634},
    {'parish':'Streatley','value':974},
    {'parish':'Sulham','value':80},
    {'parish':'Sulhamstead','value':1248},
    {'parish':'Theale','value':2771},
    {'parish':'Tidmarsh','value':391},
    {'parish':'Wasing','value':55},
    {'parish':'Welford','value':522},
    {'parish':'Winterbourne','value':206},
    {'parish':'Wokefield','value':325},
    {'parish':'Woolhampton','value':725},
    {'parish':'Yattendon','value':378},
    {'parish':'Bisham','value':1149},
    {'parish':'Bray','value':8425},
    {'parish':'Cookham','value':5519},
    {'parish':'Datchet','value':4646},
    {'parish':'Eton','value':4980},
    {'parish':'Horton','value':983},
    {'parish':'Hurley','value':1854},
    {'parish':'Shottesbrooke','value':154},
    {'parish':'Sunningdale','value':4875},
    {'parish':'Wraysbury','value':3641},
    {'parish':'Barkham','value':3511},
    {'parish':'Charvil','value':2990},
    {'parish':'Remenham','value':547},
    {'parish':'Ruscombe','value':1027},
    {'parish':'Shinfield','value':8136},
    {'parish':'Sonning','value':1445},
    {'parish':'Swallowfield','value':1961},
    {'parish':'Twyford','value':6216},
    {'parish':'Wargrave','value':3910},
    {'parish':'Winnersh','value':7939}
]

// Give fake data to graphs
let stripPlot = new charts.StripPlot('strip-plot')
stripPlot.setData(parishes, 'Wargrave')
