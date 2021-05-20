# import pyodbc
# # Some other example server values are
# # server = 'localhost\sqlexpress' # for a named instance
# # server = 'myserver,port' # to specify an alternate port
# server = 'tcp:myserver.database.windows.net'
# database = 'mydb'
# username = 'myusername'
# password = 'mypassword'
# cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
# cursor = cnxn.cursor()

import sqlite3 as lite
con = lite.connect('test.db')
with con:
  cur = con.cursor()
  cur.execute("DROP TABLE IF EXISTS test_table")
  cur.execute("CREATE TABLE test_table(col1 TEXT, col2 TEXT)")
  cur.execute("INSERT INTO test_table VALUES('Hello', 'world!')")