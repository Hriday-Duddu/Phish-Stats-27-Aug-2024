dtag.on('tx_xtbassetpool_detail_init', function (parentEvent, originalEvent) {

  var $assetWrapper = $('.asset-wrapper');

  // if detail page is already opened we have to address the wrapper
  // in the dialog layer
  if ($assetWrapper.length > 1 && $('#dialog .asset-wrapper').length === 1) {
    $assetWrapper = $('#dialog .asset-wrapper');
  }

  var $modalBody = $assetWrapper.children('.modal-body'),
    $assetCriteriaForm = $assetWrapper.find('#criteria_filter');

  var exports = {

    activeVariation: '',

    // @todo refactor! consider this as loose prototype!
    addAddtionalOptionsPanel: function () {

      var $assetColumnRight = $assetWrapper.find('.asset-col-right');
      $assetColumnRight.append('<a class="icon-asset-panel-additional-options-trigger" href="#">' +
        dtag.localize('Icon.AssetItem.CustomSizes') +
        '</a>');

      var $trigger = $assetColumnRight.find('.icon-asset-panel-additional-options-trigger');

      $assetColumnRight.wrapInner('<div class="asset-col-inner-wrapper"></div>');
      var $wrapper = $assetWrapper.find('.asset-col-inner-wrapper');

      var $variationFilter = $('.criteria-filter-option-Variation').find('input[name="Variation"]');
      exports.activeVariation = $variationFilter.filter(':checked').val();

      var $downloadButtons = $('.criteria-filter-option-Size').find('a');
      var $downloadButtonslabel = $('.criteria-filter-option-Size').find('label');
      var updateDownloadButtons = function () {
        $downloadButtons.hide();
        $downloadButtonslabel.hide();

        var $buttonsToActivate = $downloadButtons.filter('[data-criteria-variation="' + exports.activeVariation + '"]');
        $buttonsToActivate.show();
        if ($buttonsToActivate.length > 0) {
          $downloadButtonslabel.show();
        }

      };

      // The 'change' event will not fire as the inputs are hidden and will not receive changes.
      // $variationFilter.on('change', function() {
      // 	exports.activeVariation = $variationFilter.filter(':checked').val();
      // 	updateDownloadButtons();
      // });

      // Listen to the 'click' event on the parant button instead
      $variationFilter.parent('button').on('click', function () {
        exports.activeVariation = $(this).find($variationFilter).val();
        updateDownloadButtons();
      });
      updateDownloadButtons();

      var $bottomWrapper = $('.asset-item-bottom');
      $trigger.on('click', function (event) {
        event.preventDefault();

        var offset = $bottomWrapper.position().top - $('.asset-item-top').outerHeight();
        offset = offset - 100;

        if ($wrapper.hasClass('sized-downloads-visible')) {
          $wrapper.removeClass('sized-downloads-visible');
          $bottomWrapper.css({
            'transform': 'translateY(0)'
          });
          $trigger.text(dtag.localize('Icon.AssetItem.CustomSizes'));

        } else {
          $wrapper.addClass('sized-downloads-visible');
          $bottomWrapper.css({
            'bottom': 'auto',
            'top': $bottomWrapper.position().top,
            'transform': 'translateY(-' + offset + 'px)'
          });
          $trigger.text(dtag.localize('Icon.AssetItem.CustomSizes.Back'));

        }

      });

      $('.icon-asset-other-sizes-notabene').find('[data-trigger-download]').on('click', function (event) {
        event.preventDefault();
        $anchor = $(this);

        $assetCriteriaForm.find('.criteria-filter-option-FileType')
          .find('button:contains(' + $anchor.attr('data-trigger-download') + ')')
          .click();

        setTimeout(function () {
          var $downloadButton = $('.asset-item-download-container').find('a.download');

          // trigger piwik/tracking events – JS event as "real" mouse interaction doest NOT work
          // due to nebulous reasons
          $downloadButton.trigger('click');
          // force download:
          window.location = $downloadButton.attr('href');
        }, 50)
      });

    },

    setActiveVariation: function (key) {
      if (key) {
        // Enable variation given by list view
        setTimeout(function () {
          $assetCriteriaForm.find('.btn-variation-' + key).click();
        }, 50);

      }
    },

    initialize: function () {

      if ($modalBody.parent('.asset-wrapper.icon-asset').length > 0) {
        exports.addAddtionalOptionsPanel();
      }

      if (
        $modalBody.parent('.asset-wrapper.icon-asset').length === 0 ||
        !( originalEvent && originalEvent.currentTarget )
      ) {
        return;
      }

      if ($('body').attr('data-variation-active') !== '') {
        exports.setActiveVariation(
          $('body').attr('data-variation-active')
        );
      } else {
        exports.setActiveVariation(
          $(originalEvent.currentTarget).closest('.item-wrapper').data('variation')
        );
      }

    }
  };

  exports.initialize();

});
