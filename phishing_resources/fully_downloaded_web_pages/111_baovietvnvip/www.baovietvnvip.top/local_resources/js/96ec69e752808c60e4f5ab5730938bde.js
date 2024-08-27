
//let getMegaMenu = {
//    listData: '',
//    menuHtml: '',
//    menuHtml2: '',
//    getListData: () => {
//        $.ajax({
//            method: "GET",
//            url: "/Service/GetAllProduct",
//            data: {},
//        }).done(data => {
//            getMegaMenu.listData = data;
//            $(".jsDataId").each(function () {
//                getMegaMenu.setHtml($(this).data('id'), $(this).data('class'));
//            })
//        }).fail(error => {
//            console.error("error", error)

//        })
//    },
//    getData: (blockId) => {
//        let dataLv2 = getMegaMenu.listData.filter(x => x.prO_LEVEL === 2 && x.blockproducT_ID === blockId)
//        getMegaMenu.menuHtml = '';
//        if (dataLv2.length > 0) {
//            for (let i = 0; i < dataLv2.length; i++) {
//                if (dataLv2[i].prO_LEVEL === 2) {
//                    getMegaMenu.getDatalv2(dataLv2[i].id)
//                    getMegaMenu.menuHtml += `<div class="col-4">
//                                                <ul class="sub-menu-level-1">
//                                                    <li class="menu-item">
//                                                        <a href="/Service/ServiceChil?id=${dataLv2[i].id}"><img src="${dataLv2[i].prO_ICON}" alt="">${dataLv2[i].title}</a>
//                                                        <ul class="sub-menu-level-2">
//                                                            ${getMegaMenu.menuHtml2}
//                                                        </ul>
//                                                    </li>
//                                                </ul>
//                                            </div>`;
//                }
//            }
//        }
//    },
//    getDatalv2: (parentId) => {
//        let dataLv3 = getMegaMenu.listData.filter(x => x.prO_LEVEL === 3 && x.parenT_ID === parentId)
//        getMegaMenu.menuHtml2 = '';
//        if (dataLv3.length > 0) {
//            for (let i = 0; i < dataLv3.length; i++) {
//                if (dataLv3[i].prO_LEVEL === 3) {
//                    getMegaMenu.menuHtml2 += `<li class="menu-item"><a href="/Service/ViewDetail/${dataLv3[i].id}">${dataLv3[i].title}</a></li>`;
//                }
//                if (i === 2) {
//                    getMegaMenu.menuHtml2 += `<li class="menu-item read-more"><a href="/Service/ServiceChil?id=${parentId}">Xem tất cả dịch vụ</a></li>`
//                    break;
//                }
//            }
//        }
//    },
//    setHtml: (parentId, className) => {
//        getMegaMenu.getData(parentId);
//        $(`.${className} + .mega-sub-menu > .sub-menu-top`).html(getMegaMenu.menuHtml);
//    }


//}
// Hàm replace tiêu đề thành chuỗi không dấu cách nhau bằng dấu gạch dưới
let replaceVietNamese = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    //Loại bỏ tất cả các kí tự không phải chữ cái và số
    str = str.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, '');
    // space => '_'
    str = str.replace(/\s+/g, '_');
    // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của xâu
    str.trim();
    return str;
}
let replaceNet = (str) => {
    if (str.indexOf('Huyện') > -1 || str.indexOf('Quận') > -1) {
        str = str.replace('Huyện', '');
        str = str.replace('Quận', '');
        str = str + ' District';
    }
    if (str.indexOf('Thị xã') > -1 || str.indexOf('Thị trấn') > -1) {
        str = str.replace('Thị xã', '');
        str = str.replace('Thị trấn', '');
        str = str + ' Town';
    }
    if (str.indexOf('Thành phố') > -1) {
        str = str.replace('Thành phố', '') + ' City';
    }
    if (str.indexOf('Tỉnh') > -1) {
        str = str.replace('Tỉnh', '') + ' Province';
    }
    if (str.indexOf('Phường') > -1) {
        str = str.replace('Phường', '') + ' Ward';
    }
    if (str.indexOf('Xã') > -1) {
        str = str.replace('Xã', '') + ' Commune';
    }
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    //Loại bỏ tất cả các kí tự không phải chữ cái và số
    str = str.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, '');
    // space => '_'
    //str = str.replace(/\s+/g, '_');
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của xâu
    str.trim();
    
    return str;
}
/*
 * điều kiện sử dụng hàm này: 
- Viết cấu trúc html vào hàm addView :
VD : let addView = (data, i , dataPress) => {
                return `<div class="col-lg-4 col-md-6 col-sm-6" id="focus-${dataPress}-${i}">
                                                <div class="item">
                                                    <div class="image">
                                                        <a href="${ "/vn/" + data.coN_ALIAS}"><img src="${data.img}"></a>
                                                    </div>
                                                    <div class="content">
                                                        <h3 class="title"><a href="${ "/vn/" + data.coN_ALIAS}">${data.title}</a></h3>
                                                        <p class="desc">
                                                            ${data.introtext}
                                                        </p>
                                                        <a class="btn-link-1" href="${ "/vn/" + data.coN_ALIAS}"><span>Xem chi tiết</span></a>
                                                    </div>
                                                </div>
                                            </div>`
        }
- có class jsRenderContent để in Html vào
- button xem thêm có class jsViewMore, có data-count = tổng số bản ghi có ở db, data-id là id của nhóm tin đáy
- import file JCommon.js vào trang muốn sử dụng
- truyền vào url api lấy dữ liệu dưới db lên
-vd set số bản ghi hiển thị mỗi lần load ( mặc định là 9)
    viewContentGroup.displayNew = 6;
- vd Gọi khi load trang 
    viewContentGroup.getListNewByViewMore('/AdContent/getListNewByViewMore');
- vd gọi khi click nút xem thêm
    $(document).on('click', '.jsViewMore', function () {
        viewContentGroup.getListNewByViewMore('/AdContent/getListNewByViewMore');
      })
- Lưu ý: khi gọi 3 hàm trên nên gọi theo thứ tự trên

  */

let viewContentGroup = {
    viewMore: 'Xem thêm',
    nameLoading : 'Đang tải',
    displayNew: 9,
    dataPress: 0,
    getListNewByViewMore(urlApi, urlFilter, status) {
        
        let countAll = $('.jsViewMore').data('count');
        if ($('.filterClick.active .jCountFil').length > 0) {
            countAll = parseInt($('.filterClick.active .jCountFil').text());
        }
        console.log(countAll);
        let skipIdx = viewContentGroup.displayNew * viewContentGroup.dataPress;
        let parentId = $('.jsViewMore').data('id');
        let filter = $('.filterClick.active>a').data('id');
        console.log(filter);
        let url;
        let params;
        if (filter !== 'all' && filter) {
            params = {
                parentId: parentId,
                takeIdx: viewContentGroup.displayNew,
                skipIdx: skipIdx,
                filter: filter
            }
            url = urlFilter;
        } else {
            url = urlApi;
            params = {
                parentId: parentId,
                takeIdx: viewContentGroup.displayNew,
                skipIdx: skipIdx
            }
        }
        console.log(url);
        $.ajax({
            method: 'GET',
            url: url,
            data: params,
            beforeSend: function () {
                
                $('.jsViewMore').show();
                $('.jsViewMore').html(`<span disabled>${viewContentGroup.nameLoading}...<i class="fas fa-spinner custom-loading"></i></span>`);
                $('.div-loading').addClass('show-loading');
            }
        }).done(data => {
            
            console.log(data);
            if (data.length > 0) {

                let strHtml = '';
                for (let i = 0; i < data.length; i++) {
                    strHtml += addView(data[i], i, viewContentGroup.dataPress);
                }

                if (countAll - skipIdx <= viewContentGroup.displayNew) {
                    $('.jsViewMore').hide();
                }
                viewContentGroup.dataPress++;
                $('.jsRenderContent').append(strHtml);
                $('.jsViewMore').html(`<span>${viewContentGroup.viewMore}<i class="far fa-angle-right"></span>`);
            } else $('.jsViewMore').hide();
            // Ẩn hiệu ứng
            $('.div-loading').removeClass('show-loading');
            // Focus vào bản ghi mới load ra
            console.log(viewContentGroup.dataPress);
            //if (status == 'click') {
                if (viewContentGroup.dataPress > 1) {
                    $('html, body').animate({
                        scrollTop: $(`#focus-${viewContentGroup.dataPress - 1}-0`).offset().top - 90
                    }, '500');
                }
            //}
            //else {
            //    window.scrollTo(0, 0);
            //}
        }).fail(err => {
            console.error(err);
        })
    },
    formatDate(date) {
        return `${('0' + date.getDate()).slice(-2) + '/'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '/'
            + date.getFullYear()}`
    }
}

// Hàm thêm dấu phẩy vào số tiền nhập
let convertNumberToMoney = (number) => {
    if (!number) return '';
    var str = number.toString().indexOf('.') > -1 ? number.toFixed(2).split('.') : number.toString().split('.');
        
    if (str[0].length >= 4) {
        //add comma every 3 digits befor decimal
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    /* Optional formating for decimal places
    if (str[1] && str[1].length >= 4) {
        //add space every 3 digits after decimal
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }*/
    return str.join('.');
}
// Thêm class jsCovertMoney vào ô input nhập số tiền để sử dụng
$(document).on('keyup','.jsCovertMoney', function(){
    let numberMon = convertMoneyToNumber($(this).val());
    $(this).val(convertNumberToMoney(numberMon));    
})

let convertMoneyToNumber = (money)=>{
    return money.replace(/,/g, "");
}

let setTempdataCompare=(parentId)=>{
    $.ajax({
        async: false,
        method: 'GET',
        url: '/CompareProduct/SetTempdata',
        data: {
            parentId: parentId
        }
    }).done(data => {
        

    })
}
// So sánh sản phẩm
$(document).on('click', '.compare-checkbox', function () {
    let $box = $(this);
    if ($box.is(":checked")) {
        $('.compare-checkbox').prop("checked", false);
        $box.prop("checked", true);
        $('#bvb-compare-modal .modal-title span').text(`${$box.data('title')}`);
        console.log("$box.data('id')", $box.data('id'))
        $('#bvb-compare-modal .jsLinkCompare').attr('data-id', $box.data('id'));
        $('#bvb-compare-modal .jsLinkCompare').attr('data-parent', $box.data('parent'));
        $('#bvb-compare-modal').modal();
    } else {
        $box.prop("checked", false);
    }
})
$(document).on('click', '#bvb-compare-modal .jsLinkCompare', function () {
    let productId = $(this).data('id');
    let parentId = $(this).data('parent');
    localStorage.setItem("id_compare", productId);
    localStorage.setItem("id_parent", parentId);
    setTempdataCompare(parentId);
    if (langCodeJs === 'vn') {
        window.location.replace('/vn/so-sanh-san-pham');
    } else {
        window.location.replace('/en/compare-product');
    }
})

let checkModalHome = () => {
    if (!sessionStorage.getItem('checkModal')) {
        $('#modalHome').modalHome();
        sessionStorage.setItem('checkModal', true);
    }

}

$(document).on('click', '#bvb-datepicker .input-group.date > input + span', function () {
    $('#bvb-datepicker .input-group.date > input').trigger('focus');
})


//window.onunload = () => {
//    // Clear the local storage
//    localStorage.clear()
//}

