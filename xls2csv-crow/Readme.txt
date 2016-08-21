xls2csv  ver. 1.32
Author: Tomasz Wrona  [TOM CROW]
Email: crow@home.pl
www.crow.home.pl

-------------------------------------------------------------------

xls2csv.exe can be run with command line. 
The command line interface can be used from Batch files (files with *.BAT extension). 

Program can call with three parameters:

Required first: full path to xls
Optional second: to determine the character encoding [default value = utf-8]
Optional third: the number of columns in conversion, 
	starting counting from the first column [default all cells with data]

Example 1:   Data.xls file contains three sheets: sheet1, sheet2, sheet3

	"C:\small\xls2csv.exe" "C:\XLSfiles\data.xls"

	as a result of conversion have the files encoded in utf-8:

	C:\XLSfiles\data_sheet1.csv
	C:\XLSfiles\data_sheet2.csv
	C:\XLSfiles\data_sheet3.csv

Example 2: 

	"C:\small\xls2csv.exe" "C:\XLSfiles\data.xls" "cp1250"

	as a result of conversion have the files encoded in cp1250:

	C:\XLSfiles\data_sheet1.csv
	C:\XLSfiles\data_sheet2.csv
	C:\XLSfiles\data_sheet3.csv

Example 3: 

	"C:\small\xls2csv.exe" "C:\XLSfiles\data.xls" "utf-8" 5

	as a result of conversion have the files encoded in utf-8 csv files have only the first 5 columns

	C:\XLSfiles\data_sheet1.csv
	C:\XLSfiles\data_sheet2.csv
	C:\XLSfiles\data_sheet3.csv

If the third parameter, then the number of columns will always be consistent with the value of the parameter, even when the sheet is less. 
This allows for loading CSV to other programs such as the OPENQUERY in MSSQL Server
