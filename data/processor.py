# processes data from dataset and inserts into MongoDB

import csv
import os


def insert_into_mongo_db(json):
    pass


with open(os.path.join(os.path.dirname(__file__),
                       'userssharedsdfpublicelementarysecondaryunivsrvy200910.csv')) as data_file:
    reader = csv.reader(data_file.readlines(), delimiter=',')

headers = next(reader)

for row in reader:
    if row[headers.index('LEVEL09')] != '3':
        continue

    insert_into_mongo_db({
        k: v for (k, v) in zip(
            headers,
            row
        )
    })
