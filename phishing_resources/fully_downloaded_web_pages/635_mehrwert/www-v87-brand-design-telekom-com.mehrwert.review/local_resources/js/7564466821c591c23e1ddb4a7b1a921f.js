/**
 * @fileOverview  Extension: tx_xtbusermanagement
 * @module      extensions/tx_xtbusermanagement
 * @exports    extensions/tx_xtbusermanagement
 * @requires    jQuery
 * @author      mehrwert <typo3@mehrwert.de>
 */

/*jshint unused:false*/

/**
 * txDtagBaseUnify, global
 *
 * @namespace
 * @public
 */

var txXtbUsermanagement = {};

/*global txXtbUsermanagement */

(function () {
  'use strict';


  /**
   * application action handling
   *
   * @namespace txXtbUsermanagement.applicationActions
   * @public
   */
  txXtbUsermanagement.applicationActions = {

    /**
     * The loading message
     *
     * @type string
     */
    loadingMessage: dtag.activityIndicator.button,

    /**
     * Adds search indicator to list
     *
     * @param button The button to add the loading indicator
     */
    addLoadingIndicator: function (button) {
      button.html(txXtbUsermanagement.applicationActions.loadingMessage);
    },

    addAjaxPageTypeParam: function (params) {
      if (typeof params === 'undefined') {
        params = {
          type: 78
        };
      } else {
        params.push({
          name: 'type',
          value: 78
        });
      }
      return params;
    },

    transformFlashMessageJsonToNotification: function ($dialog) {
      $dialog.find('#flashmessage_json').each(function () {
        var json = $.parseJSON($(this).text());
        txXtbUsermanagement.notification.add(json);
      });
    },

    handleFormInModal: function ($dialog) {
      dtag.emit('tx_xtb_form_init');

      // having a form inside the dialog, we assume that this form should be
      // sent & reloaded in the modal form.
      $dialog.find('form').each(function () {
        var $form = $(this);

        $form.on('submit', function (event) {
          event.preventDefault();

          var params = txXtbUsermanagement.applicationActions.addAjaxPageTypeParam($form.serializeArray()),
            size = $form.find(':submit').data('modalSize'),
            url = $form.attr('action'),
            config = {};

          if (size) {
            config.size = size;
          }

          $form.fadeTo(150, 0.2);

          $.ajax({
            type: 'POST',
            url: url,
            data: params,
            dataType: 'html',
            cache: false,
            async: true,
            success: function (response) {
              try {
                var json = $.parseJSON(response);

                $.fn.xtbModal().close();
                txXtbUsermanagement.notification.add(json);
              } catch (e) {
                $form.fadeTo(150, 1);
                dtag.emit('tx_xtb_modal_open', {
                  config: config,
                  content: response,
                  success: function (dialog) {
                    var $dialog = $(dialog);
                    txXtbUsermanagement.applicationActions.transformFlashMessageJsonToNotification($dialog);
                    txXtbUsermanagement.applicationActions.handleFormInModal($dialog);
                  }
                });
              }
            }
          });
        });
      });
    },

    openAjaxDialog: function (url, params, size) {
      // Open mail domain form in modal dialog
      dtag.emit('tx_xtb_modal_open', {
        config: {
          size: size
        },
        deferred: $.ajax({
          type: 'POST',
          url: url,
          data: txXtbUsermanagement.applicationActions.addAjaxPageTypeParam(params),
          dataType: 'html',
          cache: false,
          async: true
        }),
        success: function (dialog) {
          txXtbUsermanagement.applicationActions.handleFormInModal($(dialog));
        }
      });
    },

    getAjaxJsonResponse: function (url, params) {
      $.ajax({
        url: url,
        data: params,
        dataType: 'json',
        cache: false,
        success: function (data) {
          txXtbUsermanagement.notification.add(data);
        },
        error: function (data) {
          txXtbUsermanagement.notification.add({'error': {'message': data.status + ': ' + data.statusText}});
        }
      });
    },

    /**
     * Extract additional params from *some* field
     * Passes value from #element (form field) against
     * data-require-value-from="#element"
     */
    extractAdditionalRequestParams: function ($button) {
      var params = [];

      if ($button.data('requireValueFrom')) {
        params = txXtbUsermanagement.applicationActions.extractValueFromDateField($button);
      }

      return params;
    },

    /**
     * Evaluate value from connected date field
     */
    extractValueFromDateField: function ($button) {
      return [{
        'name': 'tx_xtbusermanagement_listuser[endtime]',
        'value': $($button.data('requireValueFrom')).val()
      }];
    },

    /**
     * Execute an application related action
     *
     * @param $button The clicked button
     */
    dispatchAjaxAction: function ($button) {
      var params = txXtbUsermanagement.applicationActions.extractAdditionalRequestParams($button),
        url = $button.attr('href');

      if (siteLanguageId !== undefined) {
        params.push({
            'name': 'L',
            'value': siteLanguageId
        });
      }

      if ($button.data('openInModal') === true) {
        txXtbUsermanagement.applicationActions.openAjaxDialog(url, params, $button.data('modalSize'));
      } else {
        txXtbUsermanagement.applicationActions.getAjaxJsonResponse(url, params);
      }
    },

    /**
     * Initialize the application action buttons after a list / detail reload
     *
     */
    initializeAppButtons: function () {
      $('body').on('click', '[data-ajax]', function (event) {
        event.preventDefault();
        txXtbUsermanagement.applicationActions.dispatchAjaxAction($(this));
      });
    },

    /**
     * Find the chosen task action, reset the search word and
     * click the related option to start the search
     *
     * @param $anchor The task anchor element with the action data
     */
    triggerSelectbox: function ($anchor) {
      var action = $anchor.data('triggerValue'),
        $targetElement = $($anchor.data('triggerTarget'));
      if ($targetElement.length > 0) {
        $targetElement.val(action).trigger('change');
      }
    },

    /**
     * Initialize the "task links" above search form
     */
    initializeSelectboxTriggers: function () {

      $('body').on('click', '[data-trigger-value]', function (event) {
        event.preventDefault();
        txXtbUsermanagement.applicationActions.triggerSelectbox($(this));
      });

    },

    /**
     * Main initialization function
     */
    initialize: function () {
      txXtbUsermanagement.applicationActions.initializeAppButtons();
      txXtbUsermanagement.applicationActions.initializeSelectboxTriggers();
    }

  };

})(txXtbUsermanagement);

/**
 * @fileOverview  Extension: tx_xtbusermanagement
 * @module      extensions/tx_xtbusermanagement
 * @exports    extensions/tx_xtbusermanagement
 * @requires    jQuery
 * @author      mehrwert <typo3@mehrwert.de>
 */

/*global txXtbUsermanagement */

/**
 * Handle visibility of elements depending on form field/values
 * Actually used for line manager in user edir mode
 * @see typo3conf/ext/xtb_usermanagement/Resources/Private/Partials/FrontendUser/FormFields.html:114
 *
 * @namespace
 * @public
 */
txXtbUsermanagement.fieldConditions = {

  /**
   *
   * @namespace txXtbUsermanagement.fieldConditions
   * @public
   */
  handleForeignDependencies: function () {
    'use strict';

    $('[data-conditional-field-name]').each(function (index, target) {
      var $target, conditionalFieldName, $conditionalField, conditionalValue, conditionalAction, validateCondition;

      $target = $(target);
      conditionalFieldName = $target.data('conditionalFieldName');
      $conditionalField = $('[name="' + conditionalFieldName + '"]');
      conditionalValue = $target.data('conditionalValue');
      conditionalAction = $target.data('conditionalAction');
      validateCondition = function () {
        var fieldValue = $conditionalField.val();
        if (typeof conditionalValue === 'number') {
          fieldValue = Number(fieldValue);
        }
        if (typeof conditionalValue === 'string') {
          fieldValue = String(fieldValue);
        }
        if (fieldValue === conditionalValue) {
          switch (conditionalAction) {
            case 'hide':
              // use visibility properties here, as selectboxes might be rendered
              // faulty in width & clearing when "display:none" is applied initially
              $target.css('visibility', 'hidden');
              break;
            case 'show':
              $target.css('visibility', 'visible');
              break;
          }
        } else {
          switch (conditionalAction) {
            case 'hide':
              $target.css('visibility', 'hidden');
              break;
            case 'show':
              $target.css('visibility', 'hidden');
              break;
          }
        }
      };

      validateCondition();
      $conditionalField.on('change', function () {
        validateCondition();
      });

    });

  },

  /**
   *
   * @namespace txXtbUsermanagement.fieldConditions
   * @public
   */
  handleConditionalValues: function () {
    'use strict';

    $('[data-conditional-target-field-name]').each(function (index, source) {

      var $source, $target, targetFieldName, updatetargetValue;

      $source = $(source);
      targetFieldName = $source.data('conditionalTargetFieldName');
      $target = $('[name="' + targetFieldName + '"]');

      updatetargetValue = function () {
        var targetValue = $source.find('option[value="' + $source.val() + '"]').data('conditionalTargetValue');
        if (typeof targetValue !== 'undefined') {
          $target.val(targetValue);
        }
      };

      updatetargetValue();
      $source.on('change', function () {
        updatetargetValue();
      });

    });

  },

  initialize: function () {
    'use strict';

    txXtbUsermanagement.fieldConditions.handleForeignDependencies();
    txXtbUsermanagement.fieldConditions.handleConditionalValues();

  }

};

/**
 * @fileOverview    Extension: tx_xtbusermanagement
 * @module            extensions/tx_xtbusermanagement
 * @exports        extensions/tx_xtbusermanagement
 * @requires        jQuery
 * @author            mehrwert <typo3@mehrwert.de>
 */

/*global txXtbUsermanagement */

/**
 * application action handling
 *
 * @namespace
 * @public
 */
txXtbUsermanagement.notification = {

  /**
   * The context object
   *
   * @namespace txXtbUsermanagement.notification
   * @public
   * @type object
   */
  context: {},

  /**
   * The notification element
   *
   * @namespace txXtbUsermanagement.notification
   * @public
   * @type object
   */
  element: {},

  /**
   * The error class
   *
   * @namespace txXtbUsermanagement.notification
   * @public
   * @type string
   */
  errorClass: 'notification notification-negative',

  /**
   * The success class
   *
   * @namespace txXtbUsermanagement.notification
   * @public
   * @type string
   */
  successClass: 'notification notification-positive',

  /**
   *
   * @namespace txXtbUsermanagement.notification
   * @public
   */
  clearNotification: function () {
    'use strict';
    txXtbUsermanagement.notification.element.removeClass('notification-fixed-visible');
    // txXtbUsermanagement.notification.element.find('.notification').removeClass();
    txXtbUsermanagement.notification.element.find('.notification-heading').html('');
  },

  add: function (response) {
    'use strict';

    var $notification = $('<div class="notification notification-dismissible fade in"> ' +
      '	<button data-dismiss="notification" class="close" type="button">' +
      '			<span aria-hidden="true">x</span>' +
      '			<span class="sr-only">Schließen</span>' +
      '			</button>' +
      '<div class="notification-content"> ' +
      '	<div class="notification-heading"></div>' +
      '	</div>' +
      '</div>').prependTo(txXtbUsermanagement.notification.element);

    if (response.error) {
      if (response.error.message !== '') {
        $notification.addClass(this.errorClass)
          .find('.notification-heading').html(response.error.message);
      }
    }
    if (response.success) {
      if (response.success.message !== '') {
        $notification.addClass(this.successClass)
          .find('.notification-heading').html(response.success.message);

        // dirty! having a succes message, we assume thtat something
        // in records list must have been changed.
        // simply trigger search to match changed record set.
        txXtbUsermanagement.search.triggerSearch(true);
      }
    }

    setTimeout(function () {
      $notification.notification('close');
    }, 5000);

    txXtbUsermanagement.notification.element.addClass('notification-fixed-visible');
  },

  /**
   * Set the notification element
   *
   * @namespace txXtbUsermanagement.notification
   * @public
   * @param $element
   */
  setNotificationElement: function ($element) {
    'use strict';

    txXtbUsermanagement.notification.element = $element;
  },

  /**
   * Main initialization function
   *
   * @namespace txXtbUsermanagement.applicationActions
   * @public
   */
  initialize: function () {
    'use strict';

    $('<div class="notification-fixed">' +
      '</div>').appendTo('body');

    txXtbUsermanagement.notification.setNotificationElement($('.notification-fixed'));
  }
};


/*global txXtbUsermanagement */

(function () {
  'use strict';

  /**
   * search handling
   *
   * @namespace
   * @public
   */
  txXtbUsermanagement.search = {

    /**
     * The context
     *
     * @namespace txXtbUsermanagement.search
     * @public
     * @type object
     */
    context: {},

    /**
     * The search form
     *
     * @namespace txXtbUsermanagement.search
     * @public
     * @type object
     */
    searchForm: {},

    /**
     * The search field
     *
     * @namespace txXtbUsermanagement.search
     * @public
     * @type object
     */
    searchField: {},

    /**
     * The result list
     *
     * @namespace txXtbUsermanagement.search
     * @public
     * @type object
     */
    resultList: {},

    /**
     * Set the context
     *
     * @namespace txXtbUsermanagement.search
     * @public
     * @param object
     */
    setContext: function (object) {
      txXtbUsermanagement.search.context = object || $('.tx-xtbusermanagement');
    },

    /**
     * Set search field
     *
     * @namespace txXtbUsermanagement.search
     * @public
     * @param object
     */
    setSearchForm: function (object) {
      txXtbUsermanagement.search.searchForm = object || $('#tx_xtbusermanagement_search', txXtbUsermanagement.search.context);
    },

    /**
     * Set search field
     *
     * @namespace txXtbUsermanagement.search
     * @public
     * @param object
     */
    setSearchField: function (object) {
      txXtbUsermanagement.search.searchField = object || $('input', txXtbUsermanagement.search.searchForm);
    },

    /**
     * Set result list
     *
     * @namespace txXtbUsermanagement.search
     * @public
     * @param object
     */
    setResultList: function (object) {
      txXtbUsermanagement.search.resultList = object || $('#tx_xtbusermanagement_results', txXtbUsermanagement.search.context);
    },

    /**
     * Move link to alternative results
     *
     * @namespace txXtbUsermanagement.search
     * @public
     */
    moveLinkToAlternativeResults: function () {
      $('#link_alternative_results').appendTo('.layout-table-header:eq(0)');
    },

    /**
     * The amount of milliseconds
     * for the keyup timeout
     *
     * @namespace txXtbUsermanagement.search
     * @public
     * @type object
     */
    typeTimeOut: 350,

    /**
     * Bind the keyUp event on search input field
     *
     * @namespace txXtbUsermanagement.search
     * @public
     */
    bindKeyUpOnSearchInput: function () {
      var typeTimeOut,
        input,
        block = false,
        charCode,
        charStr,
        value;

      txXtbUsermanagement.search.searchField
        .attr('autocomplete', 'off')
        .on('keydown', function (e) {
          charCode = e.which || e.keyCode;

          switch (charCode) {

            case 17:
            case 18:
            case 224:
              block = true;
              break;

            default:
              break;
          }
        })
        .on('keyup', function (e) {

          if (typeTimeOut !== undefined) {
            clearTimeout(typeTimeOut);
          }
          input = this;

          charCode = e.which || e.keyCode;
          charStr = String.fromCharCode(charCode);

          if (/[a-z0-9äüöÄÜÖß ]/i.test(charStr) || charCode === 8 || charCode === 46) {

            /**
             * Keyup timeout function
             * Waits for x ms to trigger search
             *
             * @type {Number}
             */
            typeTimeOut = setTimeout(function () {
              typeTimeOut = undefined;
              value = $(input).val();
              if (block === false) {
                txXtbUsermanagement.search.triggerSearch();
              }

            }, txXtbUsermanagement.search.typeTimeOut);
          }

          switch (charCode) {
            case 17:
            case 18:
            case 224:
              block = false;
              break;

            default:
              break;
          }
        });


      $('#tx_xtbusermanagement_search').find('select, input').on('change', function (event) {
        event.preventDefault();

        txXtbUsermanagement.search.triggerSearch();
      });

    },

    getCurrentPaginationParams: function () {
      return {
        'name': 'tx_xtbusermanagement_listuser[@widget_0][currentPage]',
        'value': $.trim($('#tx_xtbusermanagement_results').find('strong.pager').first().text())
      };
    },

    /**
     * Search
     *
     * @namespace txXtbUsermanagement.search
     * @public
     */
    triggerSearch: function (keepPaginationState) {
      txXtbUsermanagement.search.addLoadingIndicator();

      var params = txXtbUsermanagement.search.searchForm.serializeArray(),
        typeParam = {'name': 'type', 'value': '78'};

      if (keepPaginationState === true) {
        params.push(txXtbUsermanagement.search.getCurrentPaginationParams() || null);
      }

      params.push(typeParam);

      $.ajax({
        url: txXtbUsermanagement.search.searchForm.attr('action'),
        data: params,
        dataType: 'html',
        cache: false,
        success: function (data) {
          var resultList = $(data).find('#tx_xtbusermanagement_results');

          txXtbUsermanagement.search.removeLoadingIndicator();
          txXtbUsermanagement.search.resultList.replaceWith(resultList);
          txXtbUsermanagement.search.setResultList();
          txXtbUsermanagement.search.moveLinkToAlternativeResults();
          // txXtbUsermanagement.applicationActions.initializeAppButtons();
        }
      });
    },

    /**
     * Adds search indicator to list
     *
     * @namespace txXtbUsermanagement.search
     * @public
     */
    addLoadingIndicator: function () {
      $('#tx_xtbusermanagement_results').fadeTo(150, 0.2)
        .before(dtag.activityIndicator.block);
    },

    /**
     * Adds search indicator to list
     *
     * @namespace txXtbUsermanagement.search
     * @public
     */
    removeLoadingIndicator: function () {
      $('.cu-loading-indicator').remove();
    },

    /**
     *
     * @namespace txXtbUsermanagement.search
     * @public
     */
    initialize: function () {
      var params;

      txXtbUsermanagement.search.setContext();
      txXtbUsermanagement.search.setResultList();
      txXtbUsermanagement.search.setSearchForm();
      txXtbUsermanagement.search.setSearchField();
      txXtbUsermanagement.search.bindKeyUpOnSearchInput();

      $(txXtbUsermanagement.search.context).on('click', '.page-browse a', function (event) {
        event.preventDefault();

        txXtbUsermanagement.search.addLoadingIndicator();

        $.ajax({
          url: $(this).attr('href'),
          dataType: 'html',
          cache: false,
          data: params,
          success: function (data) {
            txXtbUsermanagement.search.removeLoadingIndicator();
            txXtbUsermanagement.search.resultList.replaceWith($(data).find('#tx_xtbusermanagement_results'));
            txXtbUsermanagement.search.setResultList();
          }
        });
      });

      $(txXtbUsermanagement.search.context).on('click', '.controls-ordering a', function (event) {
        event.preventDefault();

        var $button = $(this);

        $('input[name="tx_xtbusermanagement_listuser[sortKey]"]').remove();
        $('input[name="tx_xtbusermanagement_listuser[sortOrder]"]').remove();

        // add hidden input field w/ values from button
        $('<input />').attr('type', 'hidden')
          .attr('name', 'tx_xtbusermanagement_listuser[sortKey]')
          .attr('value', $button.attr('data-sort-key'))
          .appendTo(txXtbUsermanagement.search.searchForm);

        // add hidden input field w/ values from button
        $('<input />').attr('type', 'hidden')
          .attr('name', 'tx_xtbusermanagement_listuser[sortOrder]')
          .attr('value', $button.attr('data-sort-order'))
          .appendTo(txXtbUsermanagement.search.searchForm);

        txXtbUsermanagement.search.triggerSearch();

      });
    }

  };

}());


/**
 * @fileOverview  Extension: tx_xtbusermanagement
 * @module      extensions/tx_xtbusermanagement
 * @exports    extensions/tx_xtbusermanagement
 * @requires    jQuery
 * @author      mehrwert <typo3@mehrwert.de>
 */

/*global txXtbUsermanagement */

/**
 * sub unit handling
 *
 * @namespace
 * @public
 */
txXtbUsermanagement.subUnit = {

  /**
   *
   * @namespace txXtbUsermanagement.subUnit
   * @public
   */
  initialize: function () {
    'use strict';

    var $unitSelect = $('[name="tx_xtbusermanagement_listuser[frontendUser][unit]"]');
    if ($unitSelect.length > 0) {

      var $subUnitWrapper = $('#subunit_ajax_wrapper');

      var updateSubUnit = function (unitItemValue, unitTextValue) {

        $subUnitWrapper.html(dtag.activityIndicator.button);

        var subUnitAjaxUri = $subUnitWrapper.attr('data-get-sub-unit-uri');
        var postParams = {
          'type': 78,
          'tx_xtbusermanagement_listuser[unit]': $unitSelect.val(),
          'tx_xtbusermanagement_listuser[unitItem]': unitItemValue,
          'tx_xtbusermanagement_listuser[unitText]': unitTextValue
        };

        $.ajax(subUnitAjaxUri, {
          type: 'POST',
          async: true,
          cache: false,
          data: postParams,
          complete: function (data) {
            var $response = $(data.responseText);
            $subUnitWrapper.html($response.find('div#tx-xtbusermanagement-subunit-container').html());
            dtag.emit('tx_xtb_form_init', {
              context: $subUnitWrapper
            });
          }
        });

      };

      $unitSelect.on('change', function (event) {
        event.preventDefault();
        var unitItemValue = $subUnitWrapper.attr('data-unitItem');
        var unitTextValue = $subUnitWrapper.attr('data-unitText');
        if ($unitSelect.val() === $subUnitWrapper.attr('data-thirdpartyunit')) {
          $('.tx-xtbusermanagement-contact').show();
        } else {
          $('.tx-xtbusermanagement-contact').hide();
        }
        updateSubUnit(unitItemValue, unitTextValue);
      });
      if ($unitSelect.val() > 0) {
        var unitItemValue = $subUnitWrapper.attr('data-unitItem');
        var unitTextValue = $subUnitWrapper.attr('data-unitText');
        if ($unitSelect.val() === $subUnitWrapper.attr('data-thirdpartyunit')) {
          $('.tx-xtbusermanagement-contact').show();
        } else {
          $('.tx-xtbusermanagement-contact').hide();
        }
        updateSubUnit(unitItemValue, unitTextValue);
      }

    }

  }

};

/**
 * @fileOverview  Extension: tx_xtbusermanagement
 * @module      extensions/tx_xtbusermanagement
 * @exports    extensions/tx_xtbusermanagement
 * @requires    jQuery
 * @author      mehrwert <typo3@mehrwert.de>
 */

/*global txXtbUsermanagement */
/*global JSON */

/**
 * Logout / keep session alive timing methods
 *
 * @namespace
 * @public
 */
txXtbUsermanagement.timer = {

  /**
   * Cached context wrapper
   *
   * @namespace txXtbUsermanagement.timer
   * @public
   */
  context: $('.tx-xtbusermanagement'),

  /**
   * The time url
   *
   * @namespace txXtbUsermanagement.timer
   * @public
   */
  url: $('.tx-xtbusermanagement').data('timerUrl'),

  /**
   * Seconds until logout
   *
   * @namespace txXtbUsermanagement.timer
   * @public
   * @type {int}
   */
  secondsUntilLogout: -1,

  /**
   * Timer interval durtion
   *
   * @namespace txXtbUsermanagement.timer
   * @public
   * @type {int}
   */
  intervalDuration: 60000,

  /**
   * Time & countdown interval
   *
   * @namespace txXtbUsermanagement.timer
   * @public
   */
  timerInterval: undefined,
  countdownInterval: undefined,

  /**
   * Apply interval function for polling login state
   *
   * @namespace txXtbUsermanagement.timer
   * @public
   * @param intervalDuration
   */
  applyInterval: function (intervalDuration) {
    'use strict';

    clearInterval(txXtbUsermanagement.timer.timerInterval);
    txXtbUsermanagement.timer.timerInterval = setInterval(function () {
      txXtbUsermanagement.timer.pollLoginState();
    }, intervalDuration);
  },

  /**
   * Method to poll logon state
   *
   * @namespace txXtbUsermanagement.timer
   * @public
   */
  pollLoginState: function () {
    'use strict';

    $.ajax(txXtbUsermanagement.timer.url, {
      type: 'POST',
      dataType: 'json',
      async: true,
      cache: false,
      complete: function (data) {

        var responseArray = JSON.parse(data.responseText);
        // @MS: workaround, showing the login screen secondsUntilLogout = 0 -> redirect to logout
        if (typeof responseArray.secondsUntilLogout !== 'undefined' && $('#password').length === 0) {
          txXtbUsermanagement.timer.secondsUntilLogout = responseArray.secondsUntilLogout;
        }

        if (txXtbUsermanagement.timer.secondsUntilLogout > 0 && txXtbUsermanagement.timer.secondsUntilLogout < 180) {
          clearInterval(txXtbUsermanagement.timer.countdownInterval);
          txXtbUsermanagement.timer.applyInterval(5000);

          $('#tx_xtbusermanagement_logout_warning').remove();
          var notification = '<div id="tx_xtbusermanagement_logout_warning" class="notification notification-negative icon-cancel" tabindex="0">' +
            '<span aria-hidden="true" class="icon"></span>' +
            '<div class="notification-content">' +
            '	<strong>' + txXtbUsermanagement.timer.context.data('logoutWarningHeadline') + '</strong>' +
            '	<p>' + txXtbUsermanagement.timer.context.data('logoutWarningtBodyPre') + ' <em id="seconds_to_logout">' +
            txXtbUsermanagement.timer.secondsUntilLogout + '</em> ' +
            txXtbUsermanagement.timer.context.data('logoutWarningtBodySuf') + '</p>' +
            '	<p><a id="tx_xtbusermanagement_keep_session_link" href="' + txXtbUsermanagement.timer.context.data('keepSessionAliveUrl') + '">' + txXtbUsermanagement.timer.context.data('logoutWarningTextAnchor') + '</a></p>' +
            '</div>' +
            '</div>';

          txXtbUsermanagement.timer.context.prepend(notification);

          txXtbUsermanagement.timer.countdownInterval = setInterval(function () {
            txXtbUsermanagement.timer.secondsUntilLogout--;
            $('#seconds_to_logout').text(txXtbUsermanagement.timer.secondsUntilLogout);
          }, 1000);

        } else if (txXtbUsermanagement.timer.secondsUntilLogout === 0) {
          location.href = txXtbUsermanagement.timer.context.data('logoutUrl');

        } else {
          clearInterval(txXtbUsermanagement.timer.countdownInterval);
          txXtbUsermanagement.timer.applyInterval(txXtbUsermanagement.timer.intervalDuration);
          $('#tx_xtbusermanagement_logout_warning').remove();

        }

      }
    });

  },

  /**
   * Initialize function
   *
   * @namespace txXtbUsermanagement.timer
   * @public
   */
  initialize: function () {
    'use strict';

    /**
     * Bind keep session alive link
     */
    $('body').on('click', '#tx_xtbusermanagement_keep_session_link', function (event) {
      event.preventDefault();
      $.ajax(txXtbUsermanagement.timer.context.data('keepSessionAliveUrl'), {
        type: 'POST',
        dataType: 'json',
        async: true,
        cache: false,
        complete: function (data) {
          var responseArray = JSON.parse(data.responseText);
          if (responseArray.success) {
            $('#tx_xtbusermanagement_keep_alive_success').remove();
            $('#tx_xtbusermanagement_logout_warning').remove();

            var notification = '<div id="tx_xtbusermanagement_keep_alive_success" class="notification notification-positive icon-confirm" tabindex="0">' +
              '<span aria-hidden="true" class="icon"></span>' +
              '<div class="notification-content">' +
              '	<strong>' + txXtbUsermanagement.timer.context.data('logoutSuccessHeadline') + '</strong>' +
              '	<p>' + txXtbUsermanagement.timer.context.data('logoutSuccessBody') + '</p>' +
              '</div>' +
              '</div>';

            txXtbUsermanagement.timer.context.prepend(notification);

            setTimeout(function () {
              $('#tx_xtbusermanagement_keep_alive_success').remove();
            }, 5000);

          }
        }
      });
    });

    txXtbUsermanagement.timer.pollLoginState();
    txXtbUsermanagement.timer.applyInterval(txXtbUsermanagement.timer.intervalDuration);
  }

};

/**
 * @fileOverview  Extension: tx_xtbusermanagement
 * @module      extensions/tx_xtbusermanagement
 * @exports    extensions/tx_xtbusermanagement
 * @requires    jQuery
 * @author      mehrwert <typo3@mehrwert.de>
 */

/*global txXtbUsermanagement */

dtag.on('ready', function () {
  'use strict';

  if ($('.tx-xtbusermanagement').length > 0) {

    // dirty quick win: move close-button to header & replace button for accessing user management
    var $userManagementButtonInHeader = $('#button_access_user_management');
    $('#button_logout').addClass('navbar-btn').addClass('navbar-right')
      .insertAfter($userManagementButtonInHeader).css({'font-size': '18px', 'margin-top': '4px'});
    $userManagementButtonInHeader.remove();

    txXtbUsermanagement.applicationActions.initialize();
    txXtbUsermanagement.subUnit.initialize();
    txXtbUsermanagement.fieldConditions.initialize();
    txXtbUsermanagement.search.initialize();
    txXtbUsermanagement.timer.initialize();
    txXtbUsermanagement.notification.initialize();
  }
});



