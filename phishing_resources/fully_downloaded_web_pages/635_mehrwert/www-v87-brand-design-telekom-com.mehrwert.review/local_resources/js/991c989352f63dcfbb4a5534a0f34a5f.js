dtag.on('ready', function () {

  // Script contains partially copied/clones code from
  // @see xtb_assetpool/Resources/Public/JavaScript/List.js
  // @todo consist with List.js

  var $assetCollections = $('.asset-collection');

  var exports = {

    /**
     * Populate asset collection via AJAX request
     */
    populateAssetCollections: function () {
      $assetCollections.each(function (index, collectionElement) {
        var $collectionElement = $(collectionElement);
        $.ajax({
          url: $collectionElement.data('solr-uri'),
          dataType: 'json',
          data: {q: 'identifier:' + $collectionElement.data('asset-collection')}
        }).done(function (response) {
          exports.searchXhrDone(response, $collectionElement);
        });
      });
    },

    /**
     * Actions after AJAX request is complete
     *
     * @param response
     * @param $collectionElement
     */
    searchXhrDone: function (response, $collectionElement) {
      var html = '';

      // Update HTML
      $.each(response.response.docs, function (index, item) {
        // Use string concatenation when no result highlighting is needed (performance)
        if (item['listTileItem_stringSN'] !== undefined) {
          html += item['listTileItem_stringSN'];
        }
      });
      if (html !== '') {
        $collectionElement.html(html);
      }

      exports.updateLayout($collectionElement);
    },

    /**
     * Update positioning/layout of asset collections
     *
     * @param $collectionElement
     */
    updateLayout: function ($collectionElement) {
      $collectionElement.parent().addClass('asset-collection-wrapper-populated');
      // Adjust action button layout
      $collectionElement.find('.action-buttons').each(function () {
        $(this).closest('.tx-xtbassetpool__item').addClass('has-actions');
      });
      $collectionElement.fadeTo(0.666, 1);
    },

    initialize: function () {
      if ($assetCollections.length > 0) {
        exports.populateAssetCollections();
      }
    }
  };

  exports.initialize();

  dtag.on('tx_xtbassetpool_detail_assetItem_afterClone', function (event) {
    $assetCollections = $('.asset-collection');
    exports.initialize();
  });

});

dtag.on('tx_xtbassetpool_detail_init', function (event, originalEvent) {
  var $assetWrapper = $('.asset-wrapper');

  // if detail page is already opened we have to address the wrapper
  // in the dialog layer
  if ($assetWrapper.length > 1 && $('#dialog .asset-wrapper').length === 1) {
    $assetWrapper = $('#dialog .asset-wrapper');
  }

  var $modalBody = $assetWrapper.children('.modal-body'),
    $modalContent = $modalBody.closest('.modal-content'),
    $assetCriteriaForm = $assetWrapper.find('#criteria_filter'),
    $assetCriteriaFilter = $assetWrapper.find('.criteria-filter-option'),
    $assetItems = $assetWrapper.find('.asset-item'),
    $assetItemDescriptionContainer = $assetWrapper.find('#asset_item_description_container'),
    $assetItemDownloadContainer = $assetWrapper.find('#asset_item_download_container');

  var exports = {

    eventNamespace: '.assetpool-detail',

    criteriaFormElements: null,

    hideClass: 'hidden',

    player: null,

    isModal: $('body').hasClass('modal-open'),

    getModalContent: function () {
      return $.fn.xtbModal().getContent();
    },

    activeCriteria: {},

    collectActiveCriteria: function () {
      exports.activeCriteria = {};

      $.each($assetCriteriaForm.serializeArray(), function (index, criteria) {
        if (criteria.value !== '' && criteria.value !== 0) {
          if (!exports.activeCriteria[criteria.name]) {
            exports.activeCriteria[criteria.name] = [];
          }

          exports.activeCriteria[criteria.name].push(criteria.value);
        }
      });
    },

    applyActiveCriteriaToAssetItems: function () {
      var filter = exports.getSelectorFromActiveCriteria();
      $assetItems.removeClass(exports.hideClass);

      if (filter !== '') {
        $assetItems.not($assetItems.filter(filter)).addClass(exports.hideClass);
      }

      exports.updateContainerElements();
    },

    /**
     * Creates jQuery selector string for asset items matching the criteria
     *
     * Combination of values of the same criteria is possible (OR operator).
     *
     * @returns {string}
     */
    getSelectorFromActiveCriteria: function () {
      var filter = [],
        criteriaValues,
        temp;

      $.each(exports.activeCriteria, function (criteriaKey, rawValues) {
        criteriaValues = [];

        $.each(rawValues, function (index, value) {
          criteriaValues.push(exports.getCriteriaSelector(criteriaKey, value));
        });

        if (filter.length) {
          // Simple value, just add to existing filter
          if (criteriaValues.length === 1) {
            $.each(filter, function (filterIndex) {
              filter[filterIndex] += criteriaValues[0];
            });
          } else {
            temp = filter.slice(0);
            filter = [];

            // Add new values to every existing filter
            $.each(criteriaValues, function (index, criteriaFilterValue) {
              $.each(temp, function (index, filterValue) {
                filter.push(filterValue + criteriaFilterValue);
              });
            });
          }
        } else {
          filter = criteriaValues;
        }
      });

      return filter.join(',');
    },

    getCriteriaSelector: function (key, value) {
      return '[data-criteria-' + key.convertCamelCaseToDashed() + '="' + value + '"]';
    },

    updateContainerElements: function () {
      $assetItemDownloadContainer.empty();
      $assetItemDescriptionContainer.empty();

      var $items = $assetItems.filter(':visible');

      $items.find('.description-wrapper').clone().appendTo($assetItemDescriptionContainer);
      $items.find('.download-wrapper').clone().appendTo($assetItemDownloadContainer);

      dtag.emit('tx_xtbassetpool_detail_assetItem_afterClone');
      $assetWrapper.on('click.assetpool-detail', '[data-assetpool-layer-trigger]', function (event) {
        // Test	for meta key (macos: cmd, win: ctrl) so we can open assets in new tabs!
        if (event.metaKey === true) {
          return;
        }

        event.preventDefault();
        dtag.emit('tx_xtbassetpool_detail_open', [$(this).attr('data-href'), event]);
      });

      // Fix overlapping content in modal column when viewport height decreases.
      // @see XTB-3223
      exports.applyScrollableStateIfNecessary();
      $(window).on('resize', function () {
        exports.applyScrollableStateIfNecessary();
      });
    },

    applyScrollableStateIfNecessary: function () {
      var $assetColRight = $modalContent.find('.asset-col-right'),
        assetColRightHeight = $modalContent.find('.asset-col-right').outerHeight(),
        assetItemTopHeight = $modalContent.find('.asset-item-top').outerHeight(),
        assetItemBottomHeight = $modalContent.find('.asset-item-bottom').outerHeight(),
        classScrollable = 'asset-col-scrollable';

      if (assetColRightHeight < (assetItemTopHeight + assetItemBottomHeight)) {
        $assetColRight.addClass(classScrollable);
      } else {
        $assetColRight.removeClass(classScrollable);
      }
    },

    disableNotAvailableCriteriaOptions: function () {
      var assetCriteriaFilter = $.extend({}, $assetCriteriaFilter),
        activeFilter = '',
        getName = function (element) {
          return element.attr("name") || element.parent().attr('name')
        },
        getParent = function (element) {
          return (element.hasClass(exports.hideClass) ? element.closest('button, .form-radio-set') : element);
        },
        disable = function (element, value) {
          var parent = getParent(element).toggleClass('disabled', value);

          // Disable form field so it's not considered in active criteria
          // This is needed for radio plugin options as disabled radios are clickable (plugin bug)
          element.prop('disabled', value);

          if (element.is('.form-radio')) {
            element.data('tc.radio')[value ? 'disable' : 'enable']();
          } else {
            parent.prop('disabled', value);
          }
        },
        select = function (element) {
          // This timeout is needed due to some strange bug in Components Radio Plugin
          // It seems this catches the click event triggered here and fires a submit event
          // instead. Adding some delay fixes this but causes flickering.
          setTimeout(function () {
            // @todo Radio plugin bug: this does not uncheck other radios
            element.trigger('click');
          }, 0);
        },
        getFilterFromSelected = function (element) {
          var input = element.find(':checked');

          return exports.getCriteriaSelector(getName(input), input.val());
        },
        checkCriteriaOptions = function (wrapper, activeFilter) {
          var filterElements = wrapper.find('option, :checkbox, :radio');

          filterElements.each(function () {
            var element = $(this),
              filter = activeFilter + exports.getCriteriaSelector(getName(element), element.val());

            // Disable or re-enable filter item
            disable(element, !$assetItems.filter(filter).length);
          });

          // If current item is selected but disabled, try to select another filter item
          filterElements.filter(':checked').each(function () {
            var parent = getParent($(this)),
              siblings;

            if (parent.is('.disabled')) {
              // Search and select available option
              // Excluding label elements is needed for radio UI options
              siblings = parent.siblings(':not(label)').not('.disabled');

              if (siblings.length) {
                select(siblings.first());
                return false;
              }
            }
          });
        };

      if (assetCriteriaFilter.length < 2) {
        return false;
      }

      // Loop through every filter value within a filter group
      activeFilter = getFilterFromSelected(assetCriteriaFilter.first());
      assetCriteriaFilter.not(assetCriteriaFilter.first()).each(function () {
        checkCriteriaOptions($(this), activeFilter);
        activeFilter += getFilterFromSelected($(this));
      });
    },

    filter: function () {
      exports.disableNotAvailableCriteriaOptions();
      exports.collectActiveCriteria();
      // This timeout is needed to prevent miscalculations when huge amounts of options are given in TerminalAnimation e.g)
      setTimeout(function () {
        exports.applyActiveCriteriaToAssetItems();
      }, 50);
    },

    initializeSlider: function (element) {
      // Delay is needed to ensure centered position
      setTimeout(function () {
        element.find('[data-ride="slider"]').each(function () {
          $(this).slider($(this).data());
        });
      }, 50);
    },

    initializeVideo: function ($element) {
      // Delay is needed to ensure centered position
      setTimeout(function () {
        $element.find('.video-js').each(function (index, video) {
          window.dtag.video.initialize(index, video);

          dtag.on('tx_xtb_modal_closed', function (event) {
            videojs($(video).attr('id')).dispose();
            // Remove event handler, otherwise the event is fired multiple times
            // on subsequent modal open/close cycles.
            $(this).off('tx_xtb_modal_closed');
          });
        });
      }, 50);
    },

    initializeCriteriaEvents: function () {
      $assetCriteriaForm.find('input[type="radio"]:checked').each(function (index, radio) {
        var $radio = $(radio);
        dtag.emit('tx_xtbassetpool_detail_criteria_active_on_load', $radio);
      });

      // Exclude generated form elements (Uniform form styling plugin)
      $assetCriteriaForm
        .on('change' + exports.eventNamespace, ':input:not(button)', function () {
          exports.filter();
        });

      $assetCriteriaForm.on('submit' + exports.eventNamespace, function (event) {
        event.preventDefault();
        window.location = $assetItemDownloadContainer.find('.btn.download').attr('href');
      });
    },

    initialize: function () {
      exports.getModalContent().parent().removeClass('modal-page-content');
      $('.link-guideline').remove();

      exports.filter();
      exports.initializeSlider($modalContent);
      exports.initializeVideo($modalContent);
      exports.initializeCriteriaEvents();

      window.dtag.svgInjector.inject();
    }
  };

  exports.initialize();
});

dtag.on('ready', function () {

  var $wrapper = $('.tx-xtbassetpool').first();

  var exports = {

    initDetailView: function () {
      dtag.emit('tx_xtbassetpool_detail_init');
    },

    initListView: function () {
      dtag.emit('tx_xtbassetpool_list_init');
    },

    initialize: function () {
      if ($wrapper.hasClass('detail')) {
        exports.initDetailView();
      } else {
        exports.initListView();
      }
    }
  };

  exports.initialize();

});

// Global event for opening an asset in modal dialog
dtag.on('tx_xtbassetpool_detail_open', function (event, url, originalEvent) {

  var data = {
    config: {
      size: 'fullscreen'
    },
    deferred: $.ajax({
      url: url,
      type: 'GET',
      async: true
    }),
    success: function (dialog) {
      dtag.emit('tx_xtb_form_init', {
        context: dialog
      });
      dtag.emit('tx_xtbassetpool_detail_init', originalEvent);
    }
  };

  // Add state events
  if (originalEvent.type !== 'popstate') {
    var historyUrl = url,
        trigger = $(originalEvent.target).closest('a[data-assetpool-layer-trigger]');

    if (trigger.length) {
      // Use href instead of AJAX url for history
      historyUrl = trigger.attr('href');
    }

    data.state = {
      url: historyUrl,
      data: {
        event: 'tx_xtbassetpool_detail_open',
        parameter: [historyUrl]
      }
    };
  }

  dtag.emit('tx_xtb_modal_open', data);
});

/**
 * Extend EcmaScript method
 *
 * @see http://stackoverflow.com/a/36285049
 */
String.prototype.convertCamelCaseToDashed = function () {
  return this.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

/*global console */
/*global dtag */
/*global Bloodhound */
/*global siteLanguageId */

dtag.on('ready', function () {
  "use strict";

  var $body = $('body');

  $body.on('click.assetpool-detail', '[data-assetpool-layer-trigger]', function (event) {
    // test	for meta key (macos: cmd, win: ctrl) so we can open assets in new tabs!
    if (event.metaKey === true) {
      return;
    }

    event.preventDefault();
    dtag.emit('tx_xtbassetpool_detail_open', [$(this).attr('data-href'), event]);

  });

});

dtag.on('tx_xtbassetpool_list_init', function () {
  "use strict";

  /**
   * c1, c2, c3 are variables used in Base64 object
   * @see http://stackoverflow.com/a/26514148
   */
  var c1, c2, c3, Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) {
      var t = "";
      var n, r, i, s, o, u, a;
      var f = 0;
      e = Base64._utf8_encode(e);
      while (f < e.length) {
        n = e.charCodeAt(f++);
        r = e.charCodeAt(f++);
        i = e.charCodeAt(f++);
        s = n >> 2;
        o = (n & 3) << 4 | r >> 4;
        u = (r & 15) << 2 | i >> 6;
        a = i & 63;
        if (isNaN(r)) {
          u = a = 64
        } else if (isNaN(i)) {
          a = 64
        }
        t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
      }
      return t
    }, decode: function (e) {
      var t = "";
      var n, r, i;
      var s, o, u, a;
      var f = 0;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (f < e.length) {
        s = this._keyStr.indexOf(e.charAt(f++));
        o = this._keyStr.indexOf(e.charAt(f++));
        u = this._keyStr.indexOf(e.charAt(f++));
        a = this._keyStr.indexOf(e.charAt(f++));
        n = s << 2 | o >> 4;
        r = (o & 15) << 4 | u >> 2;
        i = (u & 3) << 6 | a;
        t = t + String.fromCharCode(n);
        if (u != 64) {
          t = t + String.fromCharCode(r)
        }
        if (a != 64) {
          t = t + String.fromCharCode(i)
        }
      }
      t = Base64._utf8_decode(t);
      return t
    }, _utf8_encode: function (e) {
      e = e.replace(/\r\n/g, "\n");
      var t = "";
      for (var n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r)
        } else if (r > 127 && r < 2048) {
          t += String.fromCharCode(r >> 6 | 192);
          t += String.fromCharCode(r & 63 | 128)
        } else {
          t += String.fromCharCode(r >> 12 | 224);
          t += String.fromCharCode(r >> 6 & 63 | 128);
          t += String.fromCharCode(r & 63 | 128)
        }
      }
      return t
    }, _utf8_decode: function (e) {
      var t = "";
      var n = 0;
      var r = c1 = c2 = 0;
      while (n < e.length) {
        r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
          n++
        } else if (r > 191 && r < 224) {
          c2 = e.charCodeAt(n + 1);
          t += String.fromCharCode((r & 31) << 6 | c2 & 63);
          n += 2
        } else {
          c2 = e.charCodeAt(n + 1);
          c3 = e.charCodeAt(n + 2);
          t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          n += 3
        }
      }
      return t
    }
  };

  function reverse(string) {
    return string.split('').reverse().join('');
  }

  function obfuscate(string) {
    return reverse(Base64.encode(string));
  }

  function unobfuscate(string) {
    return Base64.decode(reverse(string));
  }

  function convertSearchQueryToArray(url) {
    var array = [];
    try {
      array = JSON.parse(
        unobfuscate(
          url.substring(url.indexOf('?') + 1)
        )
      );
    } catch (error) {
      var uri = decodeURIComponent(url.substring(url.indexOf('?') + 1));
      if (uri.indexOf('tx_xtbassetpool_search[q]=') !== -1) {
        var parts = uri.split('=');
        if (parts[0] === 'tx_xtbassetpool_search[q]') {
          array = {
            q: parts[1]
          };
          exports.initialHistoryState = true;
        }
      }

    }
    return array;
  }

  function convertArrayToSearchQuery(parameter) {
    return obfuscate(
      JSON.stringify(parameter)
    );
  }

  var $wrapper = $('.cu-search').first(),
    $itemWrapper = $wrapper.find('.cu-search__list-wrapper .cu-tile-wrapper').first(),
    $assetCriteriaForm = $wrapper.find('#criteria_filter'),
    $searchForm = $wrapper.find('#tx_xtbassetpool_search'),
    $searchField = $searchForm.find('input'),
    $searchBreadcrumb = $wrapper.find('.cu-search-summary__breadcrumb'),
    $searchBreadcrumbFilters = $wrapper.find('#cu-search-breadcrumb__filters'),
    $criteriaFilter = $wrapper.find('#criteria_filter'),
    $itemWrapperParent = $itemWrapper.parent(),
    $footer = $('.footer'),
    $staticContentPanel = $('.cu-post-login__static-content'),
    $searchResultPanel = $('.cu-post-login__search-results');


  var exports = {

    eventNamespace: 'assetpool-list',

    itemCssClass: 'tx-xtbassetpool__item',

    itemSelector: 'tr, .tx-xtbassetpool__item',

    searchUrl: $searchForm.data('searchUrl'),

    searchResetButton: null,

    searchNoResultElement: '<span>',

    searchErrorElement: '<span>',

    searchLoadingElement: window.dtag.activityIndicator.block,

    facets: [],

    xhr: null,

    itemsPerPage: 80,

    currentPage: 0,

    searchTimeout: null,

    latestSearchQuery: null,

    suggestSource: null,

    typeTimeOut: 350,

    // Initial request, with appending slash
    basePath: window.location.pathname.replace(/\/?$/, '/'),

    initialHistoryState: false,

    filter: function () {
      dtag.emit('tx_xtbassetpool_list_filter', exports);
      exports.search();
    },

    /**
     *
     * @param query Query string, use null for complete list (which is default)
     * @param page Current page, default is 0
     * @param callback Used for searches not directly initiated by the user
     */
    search: function (query, page, callback) {
      exports.currentPage = (page) ? page : 0;
      query = (query) ? query : exports.getSearchQuery();
      if ($wrapper.is('[data-fire-search-on-init]')) {
          query = query || '*';
      }
      var parameter = exports.getSearchParameter(query, exports.currentPage);

      if (parameter.q !== '') {
        exports.searchByParameter(parameter, callback);
        $searchResultPanel.css({'display': 'block'});
        setTimeout(function () {
          $wrapper.addClass('cu-search--search-performed');
        }, 5);
        setTimeout(function () {
          $staticContentPanel.css({
            'display': 'none',
            'position': 'absolute'
            });
        }, 500);
      } else {
        $staticContentPanel.css({
          'display': 'block',
          'position': 'relative'
        });
        setTimeout(function () {
          $wrapper.removeClass('cu-search--search-performed');
        }, 5);
        setTimeout(function () {
          $searchResultPanel.css({'display': 'none'});
          $(window).trigger('postLogin:fixLayout');
        }, 500);
      }
    },

    searchByParameter: function (parameter, callback) {

      var parameterQuery = $.param(parameter);

      // Same query, cancel search
      if (exports.latestSearchQuery === parameterQuery) {
        return;
      }

      // Stop currently running search request
      if (exports.xhr) {
        exports.xhr.abort();
      }

      exports.setLoadingStatus(true);

      if (exports.currentPage === 0) {
        // Reset result list for new search
        exports.hideLoadMoreButton();
        // $itemWrapper.empty();
      }

      // Save this query for later comparison
      exports.latestSearchQuery = parameterQuery;

      // Start actual AJAX call to Solr
      exports.xhr = $.ajax({
        url: exports.searchUrl,
        data: parameterQuery,
        dataType: 'json'
      });

      exports.xhr
        .done(function (data) {
          exports.searchXhrDone(data);
          // Add state if it's an initial search and if initiated by the user
          if (exports.currentPage === 0 && !callback) {
            exports.handleBrowserHistory(parameterQuery, parameter);
          }
          exports.trackSearch(parameter, data.response);
        })
        /**
         * @param {{errorMessage:string}} data
         */
        .error(function (data) {
          if (data.statusText === 'abort') {
            return;
          }

          if (window.console) {
            console.error('Solr AJAX call failed!', data.responseJSON);
          }
          exports.toggleInfoBox($(exports.searchErrorElement).text(data.responseJSON.message));
        })
        .always(function (data) {
          if (callback && $.isFunction(callback)) {
            callback(data.response);
          }
          dtag.emit('tx_xtbassetpool_search_done', exports);
        });
    },

    /**
     * @param {{response:object}, {facet_counts:object}, {message:string}} data
     */
    searchXhrDone: function (data) {
      exports.setLoadingStatus(false);
      exports.toggleInfoBox();
      exports.toggleSearchResetButton();

      if (exports.currentPage === 0) {
        $itemWrapper.empty();
      }

      if (data.response.numFound > 0) {
        exports.updateItemCount(data.response.numFound);
        exports.populateSearchResults(data);
        exports.numFound = data.response.numFound;
        exports.processFacets(data.facet_counts);
        exports.processLoadMoreButton();
      } else {
        exports.updateItemCount(0);
        exports.toggleInfoBox($(exports.searchNoResultElement).text(data.response.message));
      }

      exports.updateSearchTermSummary();
      exports.updateBounceToGlobal();
      exports.setLoadingStatus(false);
      $wrapper.removeClass('cu-search--is-initializing');
    },

    /**
     * Get search parameters, respection initial query
     *
     * @param query
     * @param page
     * @returns {*}
     */
    getSearchParameter: function (query, page) {
      var parameter = convertSearchQueryToArray(window.location.search);
      if (parameter.length !== 0 && exports.initialHistoryState === false && window.location.search) {
        if (typeof parameter.filter === 'undefined') {
          parameter.filter = {};
        }
        if ($searchField.val() === '' || $searchField.val() === '*') {
          $searchField.val(parameter.q);
        }
      } else {
        parameter = {
          q: query,
          limit: exports.itemsPerPage,
          offset: page * exports.itemsPerPage,
          L: siteLanguageId ? siteLanguageId : 0,
          filter: exports.getSerializedSearchFilters()
        };
      }
      return parameter;
    },

    getSerializedSearchFilters: function () {

      var formParameterArray = $assetCriteriaForm.serializeArray();
      var cleanedFormParameterArray = [];
      for (var k in formParameterArray) {
        if (formParameterArray[k].value !== '') {
          cleanedFormParameterArray[k] = formParameterArray[k];
        }
      }
      return cleanedFormParameterArray;
    },

    populateSearchResults: function (response) {
      var html = '';

      $.each(response.response.docs, function (index, item) {
        if (item['listTileItem_stringSN'] !== undefined) {
          html += item['listTileItem_stringSN'];
        }
      });
      if (html !== '') {
        $itemWrapper.append(html);
      }
      exports.updateLayout();
    },

    processFacets: function (facets) {
      exports.facets = facets;

      dtag.emit('tx_xtbassetpool_facettes_build', exports);
    },

    /**
     * @param parameter
     * @param {{numFound:int}} data
     */
    trackSearch: function (parameter, data) {
      if (parameter.q === '*') {
        return;
      }

      var piwikCategory = '';
      if (parameter.filter.length > 0) {
        for (var k in parameter.filter) {
          if (parameter.filter[k].value !== '') {
            if (piwikCategory !== '') {
              piwikCategory += ' + ';
            }
            piwikCategory += parameter.filter[k].value;
          }
        }
      }

      var options = {
        trackingKey: 'search',
        value: parameter.q,
        category: piwikCategory,
        data: data.numFound
      };

      dtag.emit('tx_xtb_metrics', options);
    },

    setLoadingStatus: function (isLoading) {
      if (isLoading === true) {
        $('body').addClass('body--search-is-loading');
      } else {
        $('body').removeClass('body--search-is-loading');
      }
    },

    toggleInfoBox: function (content) {
      var $infoBoxElement = $('.cu-search__search-info');
      if (!content) {
        // No content? -> hide the box!
        $infoBoxElement.hide();
      } else {
        $infoBoxElement
          .html($(content).text())
          .show();
        exports.updateLayout();
      }
    },

    getSearchQuery: function () {
      return $.trim($searchField.typeahead('val')) || $searchField.val();
    },

    updateItemCount: function (count) {
      if (typeof count === 'number') {
        if (count === 0) {
          $('#tx_xtbassetpool_load_more_wrapper').remove();
        }
        if (count === 1) {
          $searchBreadcrumb.find('.cu-search-breadcrumb__label--singular').show();
          $searchBreadcrumb.find('.cu-search-breadcrumb__label--plural').hide();
        } else {
          $searchBreadcrumb.find('.cu-search-breadcrumb__label--plural').show();
          $searchBreadcrumb.find('.cu-search-breadcrumb__label--singular').hide();
        }
        $searchBreadcrumb.find('#cu-search-summary__numfound').text(count);
        $searchBreadcrumb.css({'visibility': 'visible'});
        $searchBreadcrumbFilters.css({'visibility': 'visible'});
      } else {
        $searchBreadcrumb.css({'visibility': 'hidden'});
        $searchBreadcrumbFilters.css({'visibility': 'hidden'});
      }
    },

    updateSearchTermSummary: function () {
      var $summary = $('#cu-search-breadcrumb__searchterm');
      var $value = $('#cu-search-breadcrumb__searchterm-value');

      if (exports.getSearchQuery() !== '' && exports.getSearchQuery() !== '*') {
        var $removeLink = $('<a />');
        $removeLink
          .attr('href', '#')
          .attr('class', 'cu-search-breadcrumb__filter-remove')
          .text(exports.getSearchQuery())
          .append('<i class="icon icon-cancel" aria-hidden="true"></i>');

        $removeLink.on('click.' + exports.eventNamespace, function (event) {
          event.preventDefault();
          exports.resetSearchField();
        });
        
        $value.html($removeLink);
        $summary.show();
      } else {
        $summary.hide();
        $value.html('');
      }
    },

    updateBounceToGlobal: function () {
      var $bounceToGlobal = $('.cu-search__bounce-to-global'),
          $link = $('[data-bounce-url]');
      var $searchTermTarget = $('[data-bounce-search-term]');
      if (exports.getSearchQuery() !== '' && exports.getSearchQuery() !== '*') {
        $searchTermTarget.text(exports.getSearchQuery());
        $link.attr('href', $link.attr('data-bounce-url') + '?q=' + exports.getSearchQuery() +
          '&L=' + $link.attr('data-language'));
        $searchTermTarget.text(exports.getSearchQuery());
        $bounceToGlobal.show();
      } else {
        $bounceToGlobal.hide();
      }
    },

    /**
     * Needed for consistent height of right-hand filter panel
     */
    fixUpContainerHeight: function () {
      var minHeight = $(window).height() - $itemWrapperParent.outerHeight() - $footer.outerHeight();
      $itemWrapperParent.css({'min-height': minHeight});
    },

    updateLayout: function () {
      dtag.emit('cu_search_tiles_layout');
      window.dtag.svgInjector.inject();
      this.fixUpContainerHeight();

      // Adjust action button layout
      $itemWrapper.find('.action-buttons').each(function () {
        $(this).closest(exports.itemSelector).addClass('has-actions');
      });
    },

    /**
     * Return and creates bloodhound object for typehead
     *
     * https://github.com/twitter/typeahead.js/blob/master/doc/bloodhound.md
     *
     * @param url string
     * @param returnPrivate bool
     * @returns object
     */
    getTypeaheadSource: function (url, returnPrivate) {

      var getSuggsetSource = function (url) {
        return new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          identify: function (obj) {
            return obj.value;
          },
          remote: {
            url: url,
            prepare: function (query, settings) {
              return $.extend(settings, {
                data: exports.getSearchParameter(query, 0)
              });
            },
            filter: function (data) {
              return $.map(data, function (count, value) {
                return {
                  value: value,
                  count: count
                };
              });
            },
            rateLimitWait: exports.typeTimeOut / 3
          },
          sufficient: 5,
          indexRemote: true
        });
      };
      if (typeof url === 'string') {
        if (returnPrivate === true) {
          return getSuggsetSource(url);
        } else {
          if (exports.suggestSource === null) {
            exports.suggestSource = getSuggsetSource(url);
          }
          return exports.suggestSource;
        }
      }

    },

    addItemEvents: function () {
      $itemWrapper.on('click.assetpool-detail', '[data-assetpool-layer-trigger]', function (event) {
        // Allow STRG + click for new tab
        if (event.metaKey === true) {
          return;
        }

        event.preventDefault();
        dtag.emit('tx_xtbassetpool_detail_open', [$(this).attr('data-href'), event]);
      });
    },

    hideLoadMoreButton: function () {
      var $loadMoreButton = $('#tx_xtbassetpool_load_more');
      $loadMoreButton.fadeTo(0, 0);
    },

    processLoadMoreButton: function () {
      exports.addLoadMoreButtonIfMissing();
      var $loadMoreButton = $('#tx_xtbassetpool_load_more');
      exports.updatedLoadMoreButtonText();
      $loadMoreButton.off('click').on('click', function (event) {
        event.preventDefault();
        $loadMoreButton.fadeTo(333, 0.3);
        dtag.emit('tx_xtbassetpool_list_load_more', exports.getSearchQuery());
        exports.search(null, exports.currentPage + 1, function (data) {
          exports.updatedLoadMoreButtonText();
        });
      });
    },

    updatedLoadMoreButtonText: function () {
      var $loadMoreButton = $('#tx_xtbassetpool_load_more');
      var assetsToBeloadedInNextStep = exports.itemsPerPage;
      var possiblyLoadedAssets = exports.itemsPerPage * (exports.currentPage + 1);
      if (possiblyLoadedAssets > exports.numFound) {
        possiblyLoadedAssets = exports.numFound
      }
      if (exports.numFound < exports.itemsPerPage) {
        assetsToBeloadedInNextStep = 0;
      } else if (exports.numFound < (possiblyLoadedAssets + exports.itemsPerPage)) {
        assetsToBeloadedInNextStep = (exports.numFound - possiblyLoadedAssets);
      }
      if (assetsToBeloadedInNextStep < 1) {
        $loadMoreButton.fadeTo(333, 0).css({
          'pointer-events': 'none',
          'height': '0',
          'cursor': 'default'
        });
      } else {
        $loadMoreButton.fadeTo(333, 1).css({
          'pointer-events': 'inherit',
          'height': 'auto',
          'cursor': 'pointer'
        });
      }

      if (parseInt(siteLanguageId) === 0) {
        $('#tx_xtbassetpool_load_more_info').text(possiblyLoadedAssets + ' of ' + exports.numFound);
        $loadMoreButton.text('Show more');
      } else {
        $('#tx_xtbassetpool_load_more_info').text(possiblyLoadedAssets + ' von ' + exports.numFound);
        $loadMoreButton.text('Mehr anzeigen');
      }
    },

    addLoadMoreButtonIfMissing: function () {
      if ($('#tx_xtbassetpool_load_more_wrapper').length === 0) {
        $itemWrapper.after('<div id="tx_xtbassetpool_load_more_wrapper">' +
          '<div id="tx_xtbassetpool_load_more_info"></div>' +
          '<a id="tx_xtbassetpool_load_more" href="#" class="btn btn-brand btn-large">' +
          '</a>' +
          '</div>');
        exports.updatedLoadMoreButtonText();
      }
    },

    /**
     * Add support for suggestions and search
     *
     * https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md
     *
     * @todo Probably want to use https://github.com/corejavascript/typeahead.js
     * as the original Twitter branch seems unmaintained
     */
    addSearchEvents: function () {
      var timeout;

      $searchField
      // Add typeahead for search suggestions
        .typeahead({}, {
          name: exports.eventNamespace + '-suggestions',
          display: 'value',
          source: exports.getTypeaheadSource(exports.searchUrl + '&mode=suggest').ttAdapter()
        })
        .bind('typeahead:select typeahead:autocomplete', function (event, data) {
          window.clearTimeout(timeout);
          // When an item is selected or auto-completed (using tab)
          exports.search(data.value);
        })
        // Using custom throttle functionality typehead() callback events seems broken
        .on('keydown.' + exports.eventNamespace, function (event) {
          exports.toggleSearchResetButton();
          if (event.which === 9 || event.keyCode === 9) {
            // do not search on leaving search field with tab key
            return true;
          }
          window.clearTimeout(timeout);
          timeout = window.setTimeout(function () {
            if (exports.getSearchQuery() === '' || exports.getSearchQuery() === '*') {
              exports.search();
            }
          }, exports.typeTimeOut);
          if (event.which === 13 || event.keyCode === 13) {
            $searchField.typeahead('close');
          }
        })
        .focus();

      // Catch search form submit
      $searchForm.on('submit.' + exports.eventNamespace, function (event) {
        window.clearTimeout(timeout);
        exports.search();
        event.preventDefault();
      });
    },

    resetSearchField: function () {
      $searchField.val('');
      $searchField.typeahead('val', '');
      $searchField.trigger('change');

      exports.toggleSearchResetButton();
      exports.search();
    },

    addSearchResetButton: function () {
      // @todo Add translation
      exports.searchResetButton = $('<a>', {
        'class': 'search-box__reset-btn btn btn-clean btn-minimal btn-icon',
        'href': '#',
        'html': '<i class="icon icon-cancel" aria-hidden="true"></i>' +
        '<span class="sr-only">Delete</span>'
      })
        .on('click.' + exports.eventNamespace, function (event) {
          event.preventDefault();
          exports.resetSearchField();
        })
        .appendTo('.cu-search__search-box');
    },

    toggleSearchResetButton: function () {
      exports.searchResetButton.toggle(($searchField.val() !== ''));
    },

    addCriteriaEvents: function () {
      $assetCriteriaForm.on('change.' + exports.eventNamespace, 'input', function () {
        exports.filter();
      });
    },

    addSearchLinkEvents: function () {
      $(document).on('click.' + exports.eventNamespace, 'a.assetpool-search-link', function (event) {
        var data = $(event.target).data('assetpool-search-query');

        if (data) {
          $.fn.xtbModal().close();

          $searchField.typeahead('val', data.replace(' ', '+'));
          exports.search();

          event.preventDefault();
        }
      });
    },

    handleBrowserHistory: function (parameterQuery, parameter) {
      var elements;

      parameter = convertArrayToSearchQuery(parameter);

      if (exports.initialHistoryState) {
        // Add current search state
        dtag.history.pushState({
          url: exports.basePath + '?' + parameter,
          data: parameter
        });
      } else {
        // Replace initial state without changing URL
        dtag.history.replaceState({
          data: parameter
        });
        exports.initialHistoryState = true;
      }

      // Remember this state in order to reload it on state change
      dtag.history.on('search.assetpool.' + parameterQuery, function (event, state) {
        // console.log(event, state);
        // Add search string
        $searchField.typeahead('val', (state.q === '*') ? '' : state.q);

        // Reset and process filter checkboxes
        elements = $criteriaFilter.find('input').prop('checked', false);
        if (state.filter.length > 0) {
          $.each(state.filter, function (i, item) {
            elements.filter('input[name="' + item.name + '"][value="' + item.value + '"]').prop('checked', true);
          });
        }

        // Start old search but do not change state
        exports.searchByParameter(state, $.noop);
      });
    },

    initialize: function () {
      // Init search events before firing initial search
      exports.addSearchEvents();

      // Add button for search term removal
      exports.addSearchResetButton();
      exports.toggleSearchResetButton();

      // Add events
      exports.addItemEvents();
      exports.addCriteriaEvents();
      exports.addSearchLinkEvents();

      if ($wrapper.is('[data-fire-search-on-init]')) {
        exports.search();
      }
    }
  };

  exports.initialize();

});

/*global siteLanguageId */

/**
 * Event for building facette filter (called from
 * xtb_assetpool/Resources/Public/JavaScript/List.js after solr response)
 *
 * @param {object} list the exports scope from 'tx_xtbassetpool_list_init'
 *
 */
dtag.on('tx_xtbassetpool_facettes_build', function (event, list) {

  'use strict';

  /**
   * The criteria filter wrapper
   *
   * @type {*|jQuery|HTMLElement}
   */
  var $criteriaFilter = $('#criteria_filter'),
    $criteriaFilterSearchResultTypes = $('#criteria_filter__searchResultTypes'),
    $criteriaFilterType = $('#criteria_filter__type'),
    exports = {

      isInitialBuild: false,

      helpers: {
        /**
         *
         * @param {string} key
         * @returns {string}
         */
        shortenKey: function (key) {
          var shortened = key.replace('criteria_', '');
          shortened = shortened.replace('_stringS', '');
          shortened = shortened.replace('_stringM', '');
          return shortened.charAt(0).toUpperCase() + shortened.slice(1);
        }
      },

      /**
       * {object} The active filters
       */
      activeFilters: $.noop(),
      setActiveFilters: function () {
        var parameters = list.getSearchParameter();
        this.activeFilters = parameters.filter;
      },

      /**
       * Compile single option
       *
       * @param {string} value
       * @param {int} count
       * @param {string} key
       * @returns {string}
       */
      compileSingleOption: function (value, count, key) {
        // var count = facetOptions[value];
        var checkedString = ' data-checked="false"';
        for (var k in this.activeFilters) {
          if (value === this.activeFilters[k].value
            && key === this.activeFilters[k].name) {
            checkedString = ' data-checked="true" checked="checked"';
          }
        }
        var filters = '';
        if (value !== '_empty_') {
          filters += '<div class="criteria__radio criteria-radio">' +
            '<input class="sr-only criteria-radio__input" ' + checkedString + ' type="radio" value="' + value + '" id="' + key + '_' + value + '" name="' + key + '" />' +
            '<label class="criteria-radio__label" for="' + key + '_' + value + '">' +
            exports.localize(value, key) +
            '<span class="criteria-radio__enum enum"><span>' + count + '</span>' +
            '</span>' +
            '</label></div>';
        }

        return filters;
      },

      /**
       * Compile options block
       *
       * @param {string} key
       * @returns {string}
       */
      compileOptions: function (key) {
        var filters = '<div id="criteria-filter__options--' + this.helpers.shortenKey(key) + '" class="criteria-filter__options">';
        var facetOptions = list.facets.facet_fields[key];
        if (key === 'searchResultType_stringS') {
          var sum = 0;
          for (var k in facetOptions) {
            sum += parseInt(facetOptions[k]);
          }
          // for technical reasons list.numFound MAY be higher than
          // the sum of all options
          if (list.numFound > sum) {
            sum = list.numFound;
          }
          filters += this.compileSingleOption('', sum, key);
        }
        for (var value in facetOptions) {
          filters += this.compileSingleOption(value, facetOptions[value], key);
        }
        filters += '</div>';
        return filters;
      },

      /**
       * Compile a single filter
       *
       * @param {string} key
       * @returns {string}
       */
      compileSingleFilter: function (key, forceDropdown) {
        var facetOptions = list.facets.facet_fields[key];
        var filterStyle = 'plain';
        forceDropdown = forceDropdown || false;
        if (forceDropdown || Object.keys(facetOptions).length > 4) {
          filterStyle = 'dropdown';
        }
        var filters = '<div data-filter-key="' + this.helpers.shortenKey(key) + '" id="dynamic_filter__' + key + '" ' +
          'class="criteria-filter criteria-filter--' + filterStyle + '">';
        filters += '<a href="#criteria-filter__options--' + this.helpers.shortenKey(key) + '" ' +
          'class="criteria-filter__label criteria-filter-label" data-criteria-filter-label="' + exports.localize(key) + '">' +
          '<span class="criteria-filter-label__text">' +
          exports.localize(key) +
          '</span>' +
          '<span class="criteria-filter-label__icon icon icon-navigation-down"></span>' +
          '</a>';
        filters += this.compileOptions(key);
        filters += '</div>';
        return filters;
      },

      /**
       * Coimpile filters block
       */
      compileFilters: function () {
        var criteriaFilters = '';
        var searchResultTypeFilters = '';
        var forceDropdown = false;

        if (typeof list.facets === 'undefined' || $.isEmptyObject(list.facets.facet_fields) === true) {
          $criteriaFilter.hide();
        } else {
            $criteriaFilter.show();
            forceDropdown = Object.keys(list.facets.facet_fields).length > 1;

            for (var key in list.facets.facet_fields) {
                if (key.indexOf('criteria') !== -1 || key.indexOf('categor') !== -1 || key === 'tileType_stringS') {
                    if (Object.keys(list.facets.facet_fields[key]).length > 0) {
                        criteriaFilters += this.compileSingleFilter(key, forceDropdown);
                    }
                } else {
                    if (Object.keys(list.facets.facet_fields[key]).length > 0) {
                        if (key === 'searchResultType_stringS') {
                            searchResultTypeFilters += this.compileSingleFilter(key, forceDropdown);
                        }
                    }
                }
            }
        }

        $criteriaFilterSearchResultTypes.html(searchResultTypeFilters);

        $criteriaFilterSearchResultTypes.find('label').removeClass('btn').removeClass('btn-option')
          .addClass('btn-search-result-type');
        if ($criteriaFilterSearchResultTypes.find(':checked').length === 0) {
          $criteriaFilterSearchResultTypes.find('input').first()
            .attr('checked', true)
            .attr('data-checked', 'true');
        }

        if (criteriaFilters !== '') {
          $criteriaFilterType.html(criteriaFilters);
          $criteriaFilter.addClass('criteria-filter--type-populated');
        } else {
          $criteriaFilter.removeClass('criteria-filter--type-populated');
          setTimeout(function () {
            $criteriaFilterType.html('');
          }, 500);
        }

      },

      /**
       * Attach filter button events
       */
      attachFilterButtonEvents: function () {
        if (exports.isInitialBuild === true) {
          var $activeFilterButtons = $criteriaFilter.find('input[type="radio"][data-checked="true"]');
          $activeFilterButtons.not('#searchResultType_stringS_').each(function (index, radio) {
            var $radio = $(radio);
            dtag.emit('tx_xtbassetpool_facette_active_on_load', $radio);
          });
        }

        $('body').off('click').on('click', '.cu-search-breadcrumb__active-filter-remove', function (e) {
          e.preventDefault();
          var label = $(this).data('remove');
          var $checkedRadios = $('.criteria-radio').find(':checked');
          var matchingElements = 0;
          $checkedRadios.each(function (item, radio) {
            var $radio = $(radio);
            if (label === $radio.attr('value')) {
              matchingElements++;

              $radio.trigger('click');
              $radio.removeAttr('checked');
              $radio.trigger('change');

              dtag.emit('tx_xtbassetpool_facette_removed_via_summary', $radio);
            }
          });
          if (matchingElements === 0) {
            $checkedRadios.removeAttr('checked');
            // $checkedRadios.trigger('change');
          }
        });

      },

      localize: function (key, prefix) {
        if (key == '') {
          key = 'All';
        }
        var localization;
        if (typeof TYPO3.lang[key] === 'object') {
          localization = TYPO3.lang[key];
        } else if (typeof prefix === 'string' && typeof(TYPO3.lang[prefix + '.' + key] === 'object')) {
          localization = TYPO3.lang[prefix + '.' + key];
        }
        for (var k in localization) {
          return localization[k].target;
        }
        return key;
      },

      /**
       * Pooulate filter summary
       */
      populateFilterSummary: function () {
        var $summary = $('#cu-search-breadcrumb__filters');
        var summaryText = '';
        for (var k in this.activeFilters) {
          if (summaryText === '') {
            summaryText += '<span>' + exports.localize('header.search.results.filter.label') + ' </span>';
          }
          summaryText += '<a class="cu-search-breadcrumb__filter-remove cu-search-breadcrumb__active-filter-remove" ' +
            'href="#" data-remove="' + this.activeFilters[k].value + '">';
          summaryText += exports.localize(this.activeFilters[k].value, this.activeFilters[k].name);
          summaryText += '<i class="icon icon-cancel" aria-hidden="true"></i>';
          summaryText += '</a>';
        }
        $summary.html(summaryText);
      },

      /**
       * Apply "active" state to single filter wrapper if necessary
       */
      applyActiveStateIfNecessary: function () {
        $criteriaFilter.find(':checked').each(function (index, item) {
          $(item).closest('.criteria-filter--single').addClass('criteria-filter--single-active');
        });
      },

      /**
       * Apply "empty" state to single filter wrapper if necessary
       */
      applyEmptyStateIfNecessary: function () {
        $criteriaFilter.find('.criteria-filter__options').each(function (index, item) {
          if ($(item).children().length === 0) {
            $(item).closest('.criteria-filter--single').addClass('criteria-filter--single-no-children');
          }
        });
        $criteriaFilter.find('.enum').each(function (index, item) {
          if (parseInt($.trim($(item).text(), 10)) === 0) {
            $(item).closest('.dynamic-radio').addClass('criteria-filter--single-no-result');
          }
        });
      },

      /**
       * Extracts facet_fields from solr response & builds filter options out of it
       */
      processFacets: function () {

        if ($criteriaFilter.find('input[type="radio"]').length === 0) {
          exports.isInitialBuild = true;
        }

        this.setActiveFilters();
        this.populateFilterSummary();
        this.compileFilters();
        this.attachFilterButtonEvents();
        this.applyActiveStateIfNecessary();
        this.applyEmptyStateIfNecessary();

        dtag.emit('cu_search_filter_update');
      }
    };

  exports.processFacets();

});

/**
 * @fileOverview Extension: tx_xtbiconlibrary
 * @module       extensions/tx_xtbiconlibrary
 * @exports      extensions/tx_xtbiconlibrary
 * @requires     jQuery
 * @author       mehrwert <typo3@mehrwert.de>
 */

/*global plupload */

dtag.on('tx_xtbiconlibrary_upload_init', function () {
  'use strict';

  var exports = {

    init: function () {

      // attach callbacks for FileUploaded and Error
      function attachCallbacks(uploader) {
        // after a file added to the upload area
        // do a prevalidation of the file name
        uploader.bind('FilesAdded', function (up, filesArray) {

          var path = $(location).attr('pathname'), // @todo generate path properly - query string is not evaluated here!
            url,
            fileName;

          $.each(filesArray, function (idx, file) {

            fileName = file.name;

            // @todo: set uri from extbase
            url = path + '?tx_xtbiconlibrary_upload[action]=prevalidate' +
              '&tx_xtbiconlibrary_upload[controller]=Upload' +
              '&no_cache=1' +
              '&tx_xtbiconlibrary_upload[filename]=' + encodeURIComponent(fileName);

            $.ajax({
              url: url,
              cache: false,
              dataType: 'json',
              success: function (response) {
                if (response.state === 'error') {
                  up.removeFile(file);
                }
                addMessage(response);
              },
              error: function () {
                var response = [];
                response.state = 'error';
                response.message = 'Error adding file "' + file.name + '": Server error!';
                up.removeFile(file);
                addMessage(response);
              }
            });
          });
        });
        // intialization before upload starts
        uploader.bind('BeforeUpload', function (up, file) {
          up.settings.multipart_params = {
            original_filename: file.name,
            type: 1533650212
          };
        });
        // info after each chunk upload
        // @todo consist response format
        uploader.bind('ChunkUploaded', function (up, file, response) {
          if (typeof response.response !== 'undefined') {
            response = jQuery.parseJSON(response.response);
          } else {
            response.response = {
              error: {
                code: 500,
                message: 'Unknown error'
              }
            };
          }

          if (response.state === 'error') {
            addMessage(response);
            $('#' + file.id).attr('class', 'plupload_failed').find('a').css('display', 'block').attr('title', response.message);
            file.status = plupload.FAILED;
          }
          if (response.state === 'progress') {
            addMessage(response);
          }


        });
        // response after file upload
        // todo consist response format
        uploader.bind('FileUploaded', function (up, file, response) {

          if (typeof response.response !== 'undefined') {
            response = jQuery.parseJSON(response.response);
          } else {
            response.response = {
              error: {
                code: 500,
                message: 'Unknown error'
              }
            };
          }

          if (response.state === 'error') {
            response.message = 'Error uploading file "' + file.name + '": ' + response.message + ' (' + response.code + ')';

            $('#' + file.id).attr('class', 'plupload_failed').find('a').css('display', 'block').attr('title', response.message);
            file.status = plupload.FAILED;
          }
          addMessage(response);
        });

      }

      var messagesSelector = '#tx_xtbiconlibrary_plupload_messages',
          $messages = $(messagesSelector);

      function addMessage(response) {
        if (response.state === 'progress') {
          if ($messages.find('li.progress').length === 0) {
            $messages.prepend('<li class="progress"></li>');
          }
          $('li.progress').append('. ');
        } else {
          $('li.progress').remove();

          dtag.emit('tx_xtb_upload_add_message', {
            target: messagesSelector,
            message: response.message,
            error: response.state
          });
        }
      }

      $('#uploader').pluploadQueue({
        // General settings
        // @todo: set uri from extbase
        url: '?tx_xtbiconlibrary_upload[action]=handleUpload&tx_xtbiconlibrary_upload[controller]=Upload&no_cache=1',
        runtimes: 'gears,html5',
        chunk_size: '1mb',
        unique_names: true,
        file_data_name: 'tx_xtbiconlibrary',
        multiple_queues: true,

        // Specify what files to browse for
        filters: {
          // Maximum file size
          max_file_size: '60mb'
        },
        preinit: attachCallbacks
      });
    }
  };

  (function () {
    exports.init();
  })();

});


dtag.on('ready', function () {
  'use strict';

  if ($('#tx_xtbiconlibrary_plupload').length === 1) {
    dtag.emit('tx_xtbiconlibrary_upload_init');
  }
});

/**
 * Helper for plupload usage: add message
 */
dtag.on('tx_xtb_upload_add_message', function (event, args) {
  'use strict';

  var exports = {
    /**
     * Used as based for find()
     */
    context: $('body'),

    /**
     * Used as selector for find all form elements
     */
    target: '.notification',

    /**
     * Init function
     */
    init: function () {
      // Use arguments if set
      if (args) {
        if (args.context) {
          this.context = args.context;
        }

        if (args.target) {
          this.target = args.target;
        }

        if (typeof args.error !== 'string') {
          var error = parseInt(args.error, 10);

          if (isNaN(error)) {
            error = 1;
          }

          if (error > 0) {
            args.error = 'error';
          } else if (error < 0) {
            args.error = 'notice';
          } else {
            args.error = 'success';
          }
        }
      }

      this.target = this.context.find(this.target);
      this.addMessage(args.message, args.error);
      this.target.show();
    },

    /**
     * Process form fields
     */
    addMessage: function (message, error) {
      // default is 'error'
      var statusClass = 'text-negative';

      if (error === 'notice') {
        statusClass = 'text-warning';
      }

      if (error === 'success') {
        statusClass = 'text-positive';
      }

      this.target.prepend('<li class="' + statusClass + '">' + message + '</li>');
    }
  };

  (function () {
    exports.init();
  }());
});
