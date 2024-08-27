dtag.on('tx_xtbassetpool_detail_init', function (parentEvent, originalEvent) {

  var $assetWrapper = $('.asset-wrapper'),
    $modalBody = $assetWrapper.children('.modal-body'),
    $filterWrapper = $modalBody.find('#criteria_filter');

  var exports = {

    initialize: function () {

      if ($modalBody.parent('.asset-wrapper.language-asset').length > 0) {

        // activate current page's language
        var pageLanguage = $('html').attr('lang').toUpperCase();
        $filterWrapper.find('[name=Language][value="' + pageLanguage + '"]').attr('checked', 'true');
        $filterWrapper.find('.btn').removeClass('active');
        var $activeButton = $filterWrapper.find('.btn[title="' + pageLanguage + '"]');
        $activeButton.addClass('active').prependTo($activeButton.parent());

      }

      if (
        $modalBody.parent('.asset-wrapper.language-asset').length === 0 ||
        !( originalEvent && originalEvent.currentTarget )
      ) {
        return;
      }

    }
  };

  exports.initialize();

});
