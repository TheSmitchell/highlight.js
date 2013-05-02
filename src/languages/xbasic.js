/*
Language: xbasic
Author: Sarah Mitchell <sarahthepark@gmail.com>

*/

function(hljs) {
  return {
    case_insensitive: true,
    keywords: {
      keyword:
        'A5 AS BROWSE BYREF BYVAL CASE CLASS CONSTANT CONTINUE CONTROL CONTROLPANEL DDE DECLARE DECLARESTUCT' +
        'DEFINE DELETE DICTIONARY DIM EACH ELSE EMAIL END ERROR EXIT FIELD FILE FILEFIND FOR FORM FUNCTION' +
        'GOTO IF IMPORT INCLUDE INDEX LABEL LET LETTER MACRO NEXT OLE ON OPTION PACKAGE PARENT PARENTFORM' +
        'QUERY RECORD REDIM REGISTRY REPORT RESUME RETURN SELECT SET SOCKETS SQL STATUSBAR STOP TABLE THEN' +
        'THIS TOOLBAR TOPPARENT TRACE TYPE UNDECLARE WEBPAGE WHILE WITH YIELD',
      built_in:
        '.AND. .OR. .NOT. .XOR. REQUEST RESPONSE SERVER SESSION',
      literal:
        '.T. .F.'
    },
    illegal: '',
    contains: [
      {
        className: 'comment',
        begin: '\'', end: '$'
      },
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
}
