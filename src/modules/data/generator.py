import time
import random

stateTree = open('stateTree.js', 'w')

current = int(time.time())

old_time = time.mktime(time.strptime('2011-12-10', "%Y-%m-%d"))
old_time2 = time.mktime(time.strptime('2011-12-11', "%Y-%m-%d"))

dateList = ['2018-09-29', '2018-09-30', '2018-10-01']
unitList = ['abc123', 'def456', 'ghi789']
unitTest = ['abc123']
dateTest = ['2018-09-29']

def convertDate(dateList):
  timeList = []
  for date in dateList:
    timeList.append(time.mktime(time.strptime(date, "%Y-%m-%d")))
  return timeList

def generateGPS():
  lat = 40.428641 + random.uniform(-1, 1)/100
  lng = -86.913783 + random.uniform(-1, 1)/100
  return lat, lng

def randBoolList(unitList):
  boolList=[]
  for i in range(len(unitList)):
    boolList.append(random.randint(0,1))
  return boolList


def generateData(units, dates):
  stateTree.write('const stateTree = {\n')

  for date in dates:
    randList = randBoolList(units)
    if (sum(randList) > 0):
      stateTree.write('  "' + date + '": {\n')

    for i in range(len(units)):
      if(randList[i]):
        stateTree.write('    ' + units[i] + ': {\n')
        dateTime = time.mktime(time.strptime(date, "%Y-%m-%d"))
        curTime = dateTime + 28000
        stateTree.write('      gps: {\n')

        while curTime < (dateTime+61200):
          lat, lng = generateGPS()
          stateTree.write('        ')
          stateTree.write(str(curTime))
          stateTree.write(': [')
          stateTree.write(str(lat))
          stateTree.write(', ')
          stateTree.write(str(lng))
          stateTree.write('],\n')
          curTime = curTime + 600

        stateTree.write('      },\n')
        curTime = dateTime + 28000
        stateTree.write('      heartbeats: {\n')
        while curTime < (dateTime+61200):
          stateTree.write('        ')
          stateTree.write(str(curTime))
          stateTree.write(': {\n')
          stateTree.write('          genTime:')
          stateTree.write(str(curTime))
          stateTree.write(',\n')
          stateTree.write('          recTime:')
          stateTree.write(str(curTime + abs(round(random.gauss(0, 4))) + 1))
          stateTree.write(',\n')
          stateTree.write('          interfaces:{\n')
          stateTree.write('            "Verizon":{type:"3G", rssi:')
          stateTree.write(str(round(random.gauss(-85, 10))))
          stateTree.write(', active: true},\n')
          stateTree.write('            "Mobile HotSpot":{type:"Wifi", rssi:')
          stateTree.write(str(round(random.gauss(-90, 10))))
          stateTree.write(', active: false},\n')
          stateTree.write('            "AT&T":{type:"4G", rssi:')
          stateTree.write(str(round(random.gauss(-95, 10))))
          stateTree.write(', active: false},\n')
          stateTree.write('          },\n')
          stateTree.write('        },\n')
          curTime = curTime + abs(round(random.gauss(600, 200)))

        stateTree.write('      },\n')
        stateTree.write('    },\n') 
     
    if (sum(randList) > 0):
      stateTree.write('  },\n')

  stateTree.write('}\n')
  stateTree.write('\nexport default stateTree')

generateData(unitList, dateList)
stateTree.close()

#print(sum(randBoolList(unitList)))
