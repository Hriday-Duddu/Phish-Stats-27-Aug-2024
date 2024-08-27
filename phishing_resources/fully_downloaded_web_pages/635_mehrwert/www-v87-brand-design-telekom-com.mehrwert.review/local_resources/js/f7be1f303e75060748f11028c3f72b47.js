/*global siteLanguageId */

dtag.on('ready tx_xtbassetpool_search_done tx_xtbassetpool_detail_open', function (event) {
  'use strict';

  var exports = {

    /**
     * Current event
     */
    event: event,

    /**
     * The list item
     *
     * {object}
     */
    context: {},

    /**
     * The list item
     *
     * {object}
     */
    setContext: function (object) {
      exports.context = object || $('.tx-dtagloginregister');
    },

    ajaxUri: '',

    /**
     * The list item
     *
     * {string}
     */
    setAjaxUri: function (uri) {
      exports.ajaxUri = uri || '/?eID=tx_bdlogin';
    },

    ajaxToolsUri: '',

    /**
     * The list item
     *
     * {string}
     */
    setAjaxToolsUri: function (uri) {
      exports.ajaxToolsUri = uri || '/?eID=tx_bdlogin_tools';
    },

    ajaxSessionHelperUri: '',

    /**
     * {string}
     */
    setAjaxSessionHelperUri: function(uri) {
      exports.ajaxSessionHelperUri = uri || '/?eID=tx_bdlogin_sessionHelper';
    },

    /**
     * {string}
     */
    ajaxHomeUri: '/?id=284',

    session: {

      /**
       * Storage for frontend users session timestamp
       */
      timestamp: 0,

      /**
       * Storage for global session lifetime period
       */
      lifetime: 0,

      timer: false,

      /**
       * The modal dialog displaying the session notice
       */
      dialog: null,

      getTimeoutConfiguration: function (callback) {
        $.ajax(exports.ajaxSessionHelperUri, {
          type: 'POST',
          data: {
            'L': siteLanguageId || 0
          },
          complete: function (response) {
            var sessionConfiguration = response.responseText.split('|');

            exports.session.timestamp = parseInt(sessionConfiguration[0], 10);
            exports.session.lifetime = parseInt(sessionConfiguration[1], 10);
            exports.session.exectime = parseInt(sessionConfiguration[2], 10);

            callback.call(this);
          }
        });
      },

      /**
       * Call url to get configuration settings for frontend session and the current users session time.
       * Add timeout to log out user and display the login form when the session has expired.
       */
      setTimer: function () {
        var callback = function () {
          if (exports.session.timestamp > 0) {
            if ((exports.session.timestamp + exports.session.lifetime <= exports.session.exectime) === true) {
              exports.openModalWithLoginForm();
            } else {
              var timerLength = (exports.session.lifetime * 1000);
              if ((exports.session.exectime - exports.session.timestamp < exports.session.lifetime) === true) {
                timerLength = (exports.session.lifetime - (exports.session.exectime - exports.session.timestamp)) * 1000;
              }
              exports.session.timer = setTimeout(function () {
                exports.session.getTimeoutConfiguration(callback);
              }, timerLength);
            }
          } else {
            exports.openModalWithLoginForm();
          }
        };

        exports.session.getTimeoutConfiguration(callback);
        exports.session.handleSessionLifetime();
      },

      /**
       * Extend user session lifetime
       */
      handleSessionLifetime: function() {
        $.ajax(exports.ajaxToolsUri, {
          type: 'POST',
          data: {
            'action': 'handleSessionLifetime',
            'L': siteLanguageId || 0
          },
          complete: function (response) {
            // nothing to do ...
          }
        });
      },

      /**
       * Check whether multiple sessions are active for the current user.
       *
       * If multiple sessions were detected, a modal window is displayed offering to
       * either kill duplicate sessions or logout the user.
       */
      test: function () {
        $.ajax(exports.ajaxToolsUri, {
          type: 'POST',
          data: {
            'action': 'userHasMultipleSessions',
            'L': siteLanguageId || 0
          },
          complete: function (response) {
            var sessionConfiguration = response.responseText.split('|'),
                userIsLoggedIn = parseInt(sessionConfiguration[0], 10),
                userHasMultipleSessions = sessionConfiguration[1];

            if (exports.event.type === 'ready' && userIsLoggedIn === 1 && userHasMultipleSessions === 'true') {
              exports.session.form.open();
            }
          }
        });
      },

      /**
       * Session form related methods
       */
      form: {
        /**
         * Call url to get content for session form.
         * Create panel and apply form to it.
         *
         * @since 1.5.0
         */
        open: function () {
          exports.session.timer = false;
          var configuration = {
            close: false
          };
          dtag.emit('tx_xtb_modal_open', {
            config: configuration,
            bootstrapConfig: {
              keyboard: false
            },
            deferred: $.ajax(exports.ajaxUri, {
              type: 'POST',
              async: true,
              cache: false,
              data: {
                'extensionName': 'BdLogin',
                'pluginName': 'Login',
                'controllerName': 'Login',
                'actionName': 'deleteDuplicateFeSessions',
                'L': siteLanguageId || 0
              }
            }),
            success: function ($dialog) {
              exports.session.dialog = $dialog;

              $('.tx-dtagloginregister', $dialog).find('form').on('submit', function (event) {
                event.preventDefault();
                exports.session.form.submit($(this));
              });
            }
          });
        },

        submit: function() {
          dtag.emit('tx_xtb_modal_open', {
            deferred: $.ajax(exports.ajaxUri, {
              type: 'POST',
              async: true,
              cache: false,
              data: {
                'extensionName': 'BdLogin',
                'pluginName': 'Login',
                'controllerName': 'Login',
                'actionName': 'deleteDuplicateFeSessions',
                'submit': 'true',
                'L': siteLanguageId
              }
            }),
            success: function() {
              exports.session.setTimer();

              /**
               * Close the session notice after form submission (login)
               *
               * Due to requirement in XTB-2866 no success message is displayed after logging in via
               * session dialog, instead the modal is simply dismissed here.
               */
              if (typeof exports.session.dialog !== 'undefined' && exports.session.dialog !== null) {
                exports.session.dialog.modal('hide');
                exports.session.dialog = null;
              }
            }
          });
        }
      }
    },

    /**
     * Open modal with login form
     */
    openModalWithLoginForm: function (uri, isRequestedByUser) {
      exports.session.timer = false;

      var postParams = {
        'type': 78
      };
      if (!isRequestedByUser) {
        $.extend(postParams, {
          'tx_bdlogin_login[sessionTimeOut]': true
        });
      }

      var addLoadingState = function($form) {
        $form.fadeTo(150, 0.3)
          .before(dtag.activityIndicator.block);
      };

      var removeLoadingState = function($form) {
        $('.cu-loading-indicator').remove();
        $form.fadeTo(150, 1);
      };

      var bindAjaxAction = function($form) {
        $form.on('submit', function (event) {
          event.preventDefault();
          addLoadingState($form);
          var postParams = $form.serializeArray();
          $.extend(postParams, [{name: 'type', value: 78}]);
          var $ajaxContainer = $form.closest('[data-ajax-container]');

          $.ajax(
            $form.attr('action'),
            {
              type: 'POST',
              async: true,
              cache: false,
              data: postParams,
              success: function(response) {
                $ajaxContainer.html(response);
                const redirectUrl = window.location.pathname
                if (redirectUrl) {
                  window.location = redirectUrl;
                } else {
                  bindAjaxAction($ajaxContainer.find('form'));
                  removeLoadingState($form);
                }
              }
            }
          );

        });
      };

      var data = {
        bootstrapConfig: {
          keyboard: false
        },
        deferred: $.ajax(uri || exports.ajaxHomeUri, {
          type: 'POST',
          data: postParams
        }),
        success: function ($dialog) {
          bindAjaxAction($dialog.find('form'));
        }
      };

      dtag.emit('tx_xtb_modal_open', data);
    },

    /**
     * Init function
     */
    init: function () {
      exports.setContext();
      exports.setAjaxUri();
      exports.setAjaxToolsUri();
      exports.setAjaxSessionHelperUri();

      if ($('body.not-logged-in').length === 0) {
        exports.session.setTimer(); // init session timer
        exports.session.test();     // check multi sessions
      }

      $('[data-modal-open="login"]').on('click', function (event) {
        event.preventDefault();
        exports.openModalWithLoginForm($(this).attr('href'), true);
      });
    }
  };

  (function () {
    exports.init();
  }());
});

dtag.on('dtag_account', function () {
  'use strict';

  var exports = {

    forms: {

      submit: function ($form) {
        var postParams = $form.serializeArray();

        // Add, possibly missing, "submit" parameter
        postParams.push({
          name: 'tx_bdlogin_settings[submit]',
          value: 'submit'
        });

        $.ajax($form.prop('action'), {
          type: 'POST',
          async: true,
          cache: false,
          data: postParams,
          complete: function (response) {
            var $item = $form.closest('.collapse').find('.accordion-body');

            $item.html(response.responseText);

            if ($item.find('a[data-is-redirect-button="true"]').length > 0) {
              window.location = $item.find('[data-is-redirect-button="true"]').prop('href');
            }

            if ($item.find('[data-account-is-deleted="true"]').length > 0) {
              window.location = '/';
            }

            $item.find('.featurette').remove();

            dtag.emit('tx_xtb_form_init', {
              context: $item.find('form')
            });

            $item.find('form').on('submit', function (event) {
              event.preventDefault();
              exports.forms.submit($(this));
            });
          }
        });
      }

    },

    init: function () {
      // Get accordion / collapse content by AJAX
      $('#tx_dtagloginregister_account').find('.collapse').each(function () {
        var content = $(this);

        content.one('show.tc.collapse', function (event) {
          // Do not open before content has been loaded
          event.preventDefault();

          $.ajax(content.find('.btn').attr('href'), {
            type: 'GET',
            complete: function (response) {
              content.find('.accordion-body').html(response.responseText);
              content.find('.featurette').remove();

              dtag.emit('tx_xtb_form_init', {
                context: content.find('form')
              });

              // Open element
              content.collapse('show');

              content.find('form').on('submit', function (event) {
                event.preventDefault();
                exports.forms.submit($(this));
              });
            }
          });
        });
      });
    }

  };

  (function () {
    exports.init();
  }());
});

dtag.on('ready', function () {
  'use strict';

  (function ($) {
    // Opens user account dialog
    $('#tx_dtagloginregister_acount_button').on('click', function (event) {
      event.preventDefault();

      dtag.emit('tx_xtb_modal_open', {
        deferred: $.ajax($(this).attr('href'), {
            type: 'POST',
            data: {
              'type': 78
            }
          }
        ),
        state: {},
        success: function () {
          dtag.emit('dtag_account');
        }
      });
    });

    // Init account settings JS
    if ($('#tx_dtagloginregister_account .collapse').length > 0) {
      dtag.emit('dtag_account');
    }
  }($));

});

