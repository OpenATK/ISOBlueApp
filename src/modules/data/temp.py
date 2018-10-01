import uuid
import random
from datetime import datetime

def define_unit_names(i):
  units = []
  for x in range(i):
    units.append(uuid.uuid4())
  return units

def define_reports():
  timestamps = []
  for month in range(12):
    if(random.randint(0,1)):
      day_index = [31, 28, 31 , 30, 31, 30, 31, 31, 30, 31, 30, 31]
      for day in range(day_index[month]):
        if(random.randint(0,1)):
          for hour in range(24):
            if(random.randint(0,1)):
              for minute in range(60):
                if(random.randint(0,1)):
                  for second in range(60):
                    if(random.randint(0,1)):
                      timestamps.append(datetime(2018, (month+1), (day+1), hour, minute, second, 0))
  return timestamps
        
def signal_strength():
  return random.randint(0,100)


def generate_data(i):
  units = define_unit_names(i)
  unit_times = []
  for x in range(i):
    unit_times.append(define_reports())
   




#print(signal_strength())

#print(datetime(2018, 2, 28, 12, 30, 30, 0))

#units = define_units(5)

