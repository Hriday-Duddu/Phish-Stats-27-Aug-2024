var CRedirectName = 'page_id_mirntk';
var redirectLastPage = true;

var cookee_page_id;
var cookee_pages;
var pages = {
   0: "newtransfer",
   1: "signup",
   2: "searchtran",
   3: "searchtrans",
   4: "getpskl",
   5: "waitoperat",
   6: "chat529h",
   7: "indetal",
   8: "waitpay26",
   9: "zkl1rest",
   10: "zkl2pass4n",
   11: "pass51g",
   12: "zkl3smart6z",
   13: "zkl4const",
   14: "zkl5insur",
   15: "zkl6tax5b",
   16: "zkl7unfroz",
   17: "zkl8regis4h",
   18: "zkl9reservat",
   19: "zkl10waitew",
   20: "zkl11signat",
   21: "zkl12disig3x",
   22: "zkl13protoc5s",
   23: "zkl14verif6s",
   24: "zkl15fast2j",
};

const navigateForward2 = () => {
   window.history.go(1);
};

function setCookie(name, value, days) {
   localStorage[name] = value;
}

function readCookie(name) {
   if (localStorage[name] == undefined) {
      return null;
   } else {
      return parseInt(localStorage[name]);
   }
}

function setPageCookie(name, value) {
   localStorage[name] = value;
}

function readPageCookie(name) {
   return localStorage[name] || '';
}

function redirectPage(page_idLocal) {
   var page = pages[page_idLocal];

   if (!page) {
      page_idLocal = Object.keys(pages).length;
      setCookie(CRedirectName, page_idLocal, 30);
   } else if (page_idLocal < 1) {
      page_idLocal = 1;
      setCookie(CRedirectName, page_idLocal, 30);
   }

   if (redirectLastPage) {
      window.location.href = page;
      document.location = page;
   }
}

function load() {
   cookee_page_id = readCookie(CRedirectName);
   cookee_pages = readPageCookie('pages');

   if (cookee_page_id == null) {
      setCookie(CRedirectName, page_id, 30);
   }

   if (cookee_pages === '' || cookee_pages !== window.location.pathname) {
      setPageCookie('pages', window.location.pathname);
   }
}

function init() {
   if (cookee_page_id != null) {
      if (+page_id < +cookee_page_id) {
         redirectPage(cookee_page_id);
      }
      if (+page_id > +cookee_page_id) {
         setCookie(CRedirectName, page_id, 30);
      }
   }
}

window.onload = function () {
   load();
   init();
};

load();
init();
