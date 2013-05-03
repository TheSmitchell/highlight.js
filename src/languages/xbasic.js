/*
Language: xbasic
Requires: sql.js, javascript.js
Author: Sarah Mitchell <email address omitted>
*/

function(hljs) {
  return {
    case_insensitive: true,
    keywords: {
      keyword:
        'a c v n l p a5 as browse byref byval case class constant continue control controlpanel dde declare declarestuct ' +
        'define delete dictionary dim each else email end error exit field file filefind for form function ' +
        'goto if import include index label let letter macro next ole on option package parent parentform ' +
        'query record redim registry report resume return select set sockets sql statusbar stop table then ' +
        'this toolbar topparent trace type undeclare webpage while with yield',
      built_in:
        'alltext alltrim asc at atc chr contains left len lower ltrim occurs quote rtrim stritran strtran ' +
	'str substr upper val word wordat wordatc add_bus_days addmonths addyears age cdow cmonth ctod cyear ' +
	'date date_value day month now time totime year between case ccvalid eval iif eof line_count ceiling ' +
	'floor int current_filter_expn current_order_expn average count maximum minimum reccount recno ' +
	'run_count run_total total pagecount pageno isalpha isdate isnumber ' + 
	'.and. .or. .not. .xor. request response server session',
      literal:
        '.t. .f.'
    },
    illegal: '',
    contains: [
      {
        className: 'comment',
        begin: '\'', end: '$'
      },
      {
        className: 'string',
        begin: '"', end: '"',
	illegal: '\n'
      },
      {
        className: 'string',
        begin: '<<%[a-zA-Z]+%', end: '^%[a-zA-Z]+%'
      },
      hljs.C_NUMBER_MODE
    ]
  };
}
