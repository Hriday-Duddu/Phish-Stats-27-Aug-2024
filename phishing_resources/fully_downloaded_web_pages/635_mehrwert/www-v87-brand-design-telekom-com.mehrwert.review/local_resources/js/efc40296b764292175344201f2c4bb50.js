dtag.on('tx_xtbassetpool_detail_init', function (parentEvent, originalEvent) {

  var $assetWrapper = $('.asset-wrapper'),
    $modalBody = $assetWrapper.children('.modal-body'),
    $assetCriteriaForm = $assetWrapper.find('#criteria_filter');

  var exports = {

    // @todo refactor! consider this as loose prototype!
    addAddtionalOptionsPanel: function () {
      // $assetCriteriaForm.append('<a class="terminal-animation-asset-panel-additional-options-trigger" href="#">Other resolution</a>');

      var $trigger = $('#tx_dtaganimationlibrary_order_button');

      $trigger.on('click', function (event) {
        event.preventDefault();

        var $visibleAssetItem = $trigger.closest('.asset-wrapper').find('.asset-item.terminal-animation-item:visible').first();
        var selectedData = $visibleAssetItem.data();

        dtag.off('tx_dtaganimationlibrary_order_dialog_ready');
        dtag.on('tx_dtaganimationlibrary_order_dialog_ready', function () {

          var $brandSelectbox = $('[name="tx_dtaganimationlibrary_orderview[orderAnimation][brand]"]');
          var brandValue = $brandSelectbox.find('option:contains(' + selectedData.criteriaBrand + ')').attr('value');
          $brandSelectbox.val(brandValue);

          var $usageTypeSelectbox = $('[name="tx_dtaganimationlibrary_orderview[orderAnimation][animationType]"]');
          var usageTypeValue = $usageTypeSelectbox.find('option:contains(' + selectedData.criteriaUsageType + ')').attr('value');
          $usageTypeSelectbox.val(usageTypeValue);

          var $fileTypeSelectbox = $('[name="tx_dtaganimationlibrary_orderview[orderAnimation][fileType]"]');
          var fileTypeValue = $fileTypeSelectbox.find('option:contains(' + selectedData.criteriaFileType + ')').attr('value');
          $fileTypeSelectbox.val(fileTypeValue);

          var $soundSelectbox = $('[name="tx_dtaganimationlibrary_orderview[orderAnimation][sound]"]');
          if (selectedData.criteriaSound === false) {
            $soundSelectbox.val(0);
          } else if (selectedData.criteriaSound === true) {
            $soundSelectbox.val(1);
          }

          // $('[data-dismiss="modal"]').on('click', function(event) {
          // 	event.preventDefault();
          // 	$(originalEvent.currentTarget).trigger('click');
          //
          // });

        });

        dtag.emit('tx_dtaganimationlibrary_order');

      });

    },

    initialize: function () {

      if ($modalBody.parent('.asset-wrapper.terminal-animation-asset').length > 0) {
        exports.addAddtionalOptionsPanel();
      }

      if (
        $modalBody.parent('.asset-wrapper.terminal-animation-asset').length === 0 ||
        !( originalEvent && originalEvent.currentTarget )
      ) {
        return;
      }

    }
  };

  exports.initialize();

});
