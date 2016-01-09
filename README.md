# Elastic Tile Game
This game lets players test their knowledge of Elasticsearch, Logstash, Kibana,
Elastic's ecosystem and commercial products.

## To play

Visit http://ycombinator.github.io/elastic-tile-game/

## To host

## To add/change data (answers and questions)

0. Clone this repo to your local machine, say to a folder named `elastic-tile-game`

1. Get a copy of the decrypted data file from @ycombinator.

2. Make the desired additions/changes to this data file.

3. Encrypt the file.

    cd elastic-tile-game/js
    node encrypt-data.js <PASSPHRASE> # Ask @ycombinator about the passphrase

4. Commit encrypted data file, `data.encrypted.json`.

    git add data.encrypted.json
    git commit -m '<COMMIT MESSAGE>'
