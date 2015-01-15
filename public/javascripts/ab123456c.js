var data = [ {
  "name"        : "Mary Jane Smith",
  "companyName" : "Prudential",
  "nino"        : "ABC123456C",
  "pension"     : "true",
  "financials"  : [
    {"DatePaid":"01/01/15","Gross":"80.00","Deductions" : "","Net" : "80.00"},
    {"DatePaid":"03/12/14","Gross":"80.00","Deductions":"10.00", "Net":"70.00"},
    {"DatePaid":"02/11/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"05/10/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"01/09/14","Gross":"80.00","Deductions" : "","Net" : "80.00"},
    {"DatePaid":"03/08/14","Gross":"80.00","Deductions":"10.00", "Net":"70.00"},
    {"DatePaid":"02/07/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"01/06/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"02/05/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"03/04/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"01/03/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"02/02/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/12/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/11/13","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/10/13","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/09/13","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/08/13","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/07/13","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/06/13","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/05/13","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/04/13","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/03/13","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/02/13","Gross":"70.00","Deductions":"", "Net":"70.00"},
  ]
},{
  "name"        : "Mary Jane Smith",
  "companyName" : "ASDA",
  "nino"        : "ABC123456C",
  "financials"  : [
      {"DatePaid":"01/09/14","Gross":"500.00","Deductions" : "100.00","Net" : "400.00"},
      {"DatePaid":"03/08/14","Gross":"500.00","Deductions":"100.00", "Net":"400.00"}
    ]
  }
]

exports.getTableData = function() {
  return data;
}
