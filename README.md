# Xenocanto GIS Coordinates

<p align="center">
  <span>English</span> |
  <a href="https://github.com/pablohildo/xenocanto-gis/tree/master/lang/portuguese#xenocanto-gis-coordinates">Português</a> |
</p>

Extract data from any bird on [Xenocanto](https://www.xeno-canto.org) and generate a GIS (e.g.: DivaGIS) prepared coordinates file, using a simple command.

## Usage

If you're using Windows, you can use the latest release downloaded from the [Releases](https://github.com/nexe/nexe/releases/) page, as given:
```
xenocanto-gis.exe 'SPECIES NAME' 'EXCLUDED TYPE'

xenocanto-gis.exe 'formicivora iheringi' 'call' // Get formicivora iheringi, but exclude all `call` types
xenocanto-gis.exe 'formicivora iheringi' 'song' // Get formicivora iheringi, but exclude all `song` types
xenocanto-gis.exe 'formicivora iheringi' // Get formicivora iheringi, don't exclude any type
```
Every exclusion is done through word inclusion. That means if you exclude call, **sounds containing both call and song will be excluded**.

**The file will be named as** `gisCoordinates-SPECIES NAME.csv`.

On any other platform (e.g.: Linux/Mac) or if you're using the source code, the same may be done through `node`.

1. Download [Node.js](https://nodejs.org/en/download/)
2. Run one of the above commands, substituting the software name for `node index.js`, as seen:

```
node index.js 'SPECIES NAME' 'EXCLUDED TYPE'

node index.js 'formicivora iheringi' 'call' // Get formicivora iheringi, but exclude all `call` types
node index.js 'formicivora iheringi' 'song' // Get formicivora iheringi, but exclude all `song` types
node index.js 'formicivora iheringi' // Get formicivora iheringi, don't exclude any type
```

## License

Xenocanto GIS is free and unencumbered public domain software. For more information, see http://unlicense.org/ or the accompanying UNLICENSE file.
