# processes data from dataset and inserts into MongoDB

import csv
import re
import os

from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['StudentsReview']
schools = db['schools']

schools.drop()

def insert_into_mongo_db(json):
    schools.insert_one(json)


with open(os.path.join(os.path.dirname(__file__),
                       'userssharedsdfpublicelementarysecondaryunivsrvy200910.csv')) as data_file:
    reader = csv.reader(data_file.readlines(), delimiter=',')

headers = next(reader)

for row in filter(lambda school: school[headers.index('LEVEL09')] == '3', reader):
    school = {
        k: v for (k, v) in zip(
            headers,
            row
        )
    }

    school['SCHNAM09'] = re.sub(r'SCH$', 'SCHOOL', school['SCHNAM09'])

    if all(word not in school['SCHNAM09'] for word in ['CTR', 'SCHOOL', 'ACADEMY', 'CONSERVATORY']):
        school['SCHNAM09'] += ' SCHOOL'

    insert_into_mongo_db(school)
