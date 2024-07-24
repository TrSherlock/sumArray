const dizi = [
    {
        "GmKod": "150.20T627",
        "Borclu": 15898.75,
        "Alacakli": 0
    },
    {
        "GmKod": "191.20",
        "Borclu": 1589.875,
        "Alacakli": 0
    },
    {
        "GmKod": "191.20T627",
        "Borclu": 1589.87,
        "Alacakli": 0
    },
    {
        "GmKod": "360.KDV2.62720",
        "Borclu": 0,
        "Alacakli": 1589.87
    },
    {
        "GmKod": "150.20T627",
        "Borclu": 8295,
        "Alacakli": 0
    },
    {
        "GmKod": "191.20",
        "Borclu": 829.5,
        "Alacakli": 0
    },
    {
        "GmKod": "191.20T627",
        "Borclu": 829.5,
        "Alacakli": 0
    },
    {
        "GmKod": "360.KDV2.62720",
        "Borclu": 0,
        "Alacakli": 829.5
    },
    {
        "GmKod": "150.20T627",
        "Borclu": 1998,
        "Alacakli": 0
    },
    {
        "GmKod": "191.20",
        "Borclu": 199.8,
        "Alacakli": 0
    },
    {
        "GmKod": "191.20T627",
        "Borclu": 199.8,
        "Alacakli": 0
    },
    {
        "GmKod": "360.KDV2.62720",
        "Borclu": 0,
        "Alacakli": 199.8
    },
    {
        "GmKod": "150.20T627",
        "Borclu": 576,
        "Alacakli": 0
    },
    {
        "GmKod": "191.20",
        "Borclu": 57.6,
        "Alacakli": 0
    },
    {
        "GmKod": "191.20T627",
        "Borclu": 57.6,
        "Alacakli": 0
    },
    {
        "GmKod": "360.KDV2.62720",
        "Borclu": 0,
        "Alacakli": 57.6
    },
    {
        "GmKod": "150.20",
        "Borclu": 500,
        "Alacakli": 0
    },
    {
        "GmKod": "191.20",
        "Borclu": 100,
        "Alacakli": 0
    }
];
const where = 'GmKod';
const sum = ['Borclu', 'Alacakli'];

const diziTotal = dizi.reduce((a,b)=>{
    const findObj = a.find(r=>r.GmKod==b.GmKod); // eğer boje bulunmuşsa
    if(!findObj){
        // console.log(b.GmKod);
        a.push(b);
        return a;
    } else {
        sum.forEach((key)=>{
            findObj[key] += b[key]
        })
        return a;
    }
}, [])
