import time
import random

stateTree = open('stateTree.js', 'w')

current = int(time.time())

old_time = time.mktime(time.strptime('2011-12-10', "%Y-%m-%d"))
old_time2 = time.mktime(time.strptime('2011-12-11', "%Y-%m-%d"))

dateList = ['2018-09-29', '2018-09-30', '2018-10-01', '2018-10-05']
unitList = ['abc123', 'def456', 'ghi789']
unitTest = ['abc123']
dateTest = ['2018-09-29']
timeList = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM']

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
  
  for unit in units:
    stateTree.write('  "' + unit + '": {\n')

    for date in dates:
      if (random.randint(0,1)):
        stateTree.write('    "' + date + '": {\n')

        for i in range(24):
          if (random.randint(0,1)):
            if (len(str(i)) < 2):
              stateTree.write('      "0' + str(i) + ':00": {\n')
            else:
              stateTree.write('      "' + str(i) + ':00": {\n')
            dateTime = time.mktime(time.strptime(date + '-' +str(i), "%Y-%m-%d-%H"))
            curTime = dateTime
            stateTree.write('        gps: {\n')

            while curTime < (dateTime + 3600):
              lat, lng = generateGPS()
              stateTree.write('          ' + str(curTime) + ': { lat:')
              stateTree.write(str(lat) + ', lng:' + str(lng) + ' },\n')
              curTime = curTime + 200
  
            stateTree.write('        },\n')
            curTime = dateTime
            stateTree.write('        heartbeats: {\n')
            while curTime < (dateTime+3600):
              stateTree.write('          ' + str(curTime) + ': {\n')
              stateTree.write('            genTime:' + str(curTime) + ',\n')
              stateTree.write('            recTime:')
              stateTree.write(str(curTime + abs(round(random.gauss(0, 4))) + 1))
              stateTree.write(',\n            interfaces:{\n')
              stateTree.write('              "Verizon":{type:"3G", rssi:')
              stateTree.write(str(round(random.gauss(-85, 10))))
              stateTree.write(', active: true, name:"Verizon"},\n')
              stateTree.write('              "Mobile Hotspot":{type:"Wifi", rssi:')
              stateTree.write(str(round(random.gauss(-90, 10))))
              stateTree.write(', active: false, name:"Mobile Hotspot"},\n')
              stateTree.write('              "AT&T":{type:"4G", rssi:')
              stateTree.write(str(round(random.gauss(-95, 10))))
              stateTree.write(', active: false, name:"AT&T"},\n')
              stateTree.write('            },\n')
              stateTree.write('          },\n')
              curTime = curTime + abs(round(random.gauss(600, 200)))

            stateTree.write('        },\n')
            stateTree.write('      },\n')
        stateTree.write('    },\n') 
    stateTree.write('  },\n')  
  stateTree.write('};\n')
  stateTree.write('\nexport default stateTree')

generateData(unitList, dateList)
#generateData(unitTest, dateTest)
stateTree.close()

#print(sum(randBoolList(unitList)))
