// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var $$Map    = require("bs-platform/lib/js/map.js");
var Nact     = require("reason-nact/src/nact.js");
var Curry    = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

function compare(param, param$1) {
  return Caml_obj.caml_int_compare(param[0], param$1[0]);
}

var ContactIdCompare = /* module */[/* compare */compare];

var ContactIdMap = $$Map.Make(ContactIdCompare);

function createContact(param, sender, contact) {
  var seqNumber = param[/* seqNumber */1];
  var contactId = /* ContactId */[seqNumber];
  Nact.Operators[/* <-< */0](sender, /* tuple */[
        contactId,
        /* Success */[contact]
      ]);
  var nextContacts = Curry._3(ContactIdMap[/* add */3], contactId, contact, param[/* contacts */0]);
  return /* record */[
          /* contacts */nextContacts,
          /* seqNumber */seqNumber + 1 | 0
        ];
}

function removeContact(param, sender, contactId) {
  var contacts = param[/* contacts */0];
  var nextContacts = Curry._2(ContactIdMap[/* remove */5], contactId, contacts);
  var msg;
  if (contacts === nextContacts) {
    var contact = Curry._2(ContactIdMap[/* find */21], contactId, contacts);
    msg = /* tuple */[
      contactId,
      /* Success */[contact]
    ];
  } else {
    msg = /* tuple */[
      contactId,
      /* NotFound */0
    ];
  }
  Nact.Operators[/* <-< */0](sender, msg);
  return /* record */[
          /* contacts */nextContacts,
          /* seqNumber */param[/* seqNumber */1]
        ];
}

function updateContact(param, sender, contactId, contact) {
  var contacts = param[/* contacts */0];
  var nextContacts = Curry._3(ContactIdMap[/* add */3], contactId, contact, Curry._2(ContactIdMap[/* remove */5], contactId, contacts));
  var msg = nextContacts === contacts ? /* tuple */[
      contactId,
      /* Success */[contact]
    ] : /* tuple */[
      contactId,
      /* NotFound */0
    ];
  Nact.Operators[/* <-< */0](sender, msg);
  return /* record */[
          /* contacts */contacts,
          /* seqNumber */param[/* seqNumber */1]
        ];
}

exports.ContactIdCompare = ContactIdCompare;
exports.ContactIdMap     = ContactIdMap;
exports.createContact    = createContact;
exports.removeContact    = removeContact;
exports.updateContact    = updateContact;
/* ContactIdMap Not a pure module */
