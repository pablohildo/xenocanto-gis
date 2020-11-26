const fetch = require('node-fetch');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: `./gisCoordinates-${process.argv[2]}.csv`,
    header: [
        {id: 'species', title: 'Species'},
        {id: 'latitude', title: 'Lat'},
        {id: 'longitude', title: 'Long'}
    ]
})

const getWanted = (json) => {
    if (process.argv[3]){
        return json.recordings.filter((item) => !item.type.includes(process.argv[3]) && item.lat !== null && item.lng !== null)
    } else {
        return json.recordings.filter((item) => item.lat !== null && item.lng !== null)
    }
}

fetch(`https://www.xeno-canto.org/api/2/recordings?query=${process.argv[2]}`)
.then((res) => res.json())
.then((json) => {
    const dataset = getWanted(json).map((item) => {
        return {
            species: process.argv[2],
            latitude: item.lat,
            longitude: item.lng,
        }
    })

    csvWriter.writeRecords(dataset)
    .then(() => console.log("File successfuly created"))
    .catch((err) => console.log("File couldn't be written. Reason: " + err))
})
.catch((err) => {
    console.log(err)
});
