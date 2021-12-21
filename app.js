


// mỗi khi khách chọn menu S, M, L bạn lại đổi giá trị properties của nó

// object lưu trữ thông tin sản phẩm
var gSelectedMenuStructure = {
    menuName: "...", // S, M, L
    duongKinhCM: 0,
    suonNuong: 0,
    saladGr: 0,
    drink: 0,
    priceVND: 0,
}
// object lưu trữ thông tin đặt hàng
var gOrderInfo = {
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    voucher: "",
    discount: 0,
    priceAfterDiscount: 0,
    drinkType: ""
}
// bạn có thể dùng để lưu loại pizza đươc chọn, mỗi khi khách chọn, bạn lại đổi giá trị cho nó
var gSelectedPizzaType = "..."

// danh sách các mã giảm giá
var gDiscountVouchers = [{
    voucherID: "A1",
    percentDiscount: 20
}, // mã giảm giá là A1, phần trăm giảm giá 20%
{
    voucherID: "A2",
    percentDiscount: 10
},
{
    voucherID: "A3",
    percentDiscount: 5
},
{
    voucherID: "A4",
    percentDiscount: 30
},
{
    voucherID: "A5",
    percentDiscount: 20
},
{
    voucherID: "B1",
    percentDiscount: 25
},
{
    voucherID: "B2",
    percentDiscount: 15
},
{
    voucherID: "B3",
    percentDiscount: 5
},
{
    voucherID: "B4",
    percentDiscount: 30
},
{
    voucherID: "B5",
    percentDiscount: 40
}
];


// function xử lí đổi màu

var btnS = document.getElementById("size-s");
var btnM = document.getElementById("size-m");
var btnL = document.getElementById("size-l");

var type1 = document.getElementById("type-1");
var type2 = document.getElementById("type-2");
var type3 = document.getElementById("type-3");

// 3 hàm để đổi màu chữ và update thông tin cho những object được cho sẵn
function changeColorSizeSClick() {
    btnS.classList.add("btn-warning");
    btnS.classList.remove("btn-success");
    btnM.classList.add("btn-success");
    btnM.classList.remove("btn-warning");
    btnL.classList.add("btn-success")
    btnL.classList.remove("btn-warning");

    gSelectedMenuStructure.menuName = "S";
    gSelectedMenuStructure.duongKinhCM = 20;
    gSelectedMenuStructure.suonNuong = 2
    gSelectedMenuStructure.saladGr = 200;
    gSelectedMenuStructure.drink = 2;
    gSelectedMenuStructure.priceVND = 150000;
}

function changeColorSizeMClick() {
    btnM.classList.add("btn-warning");
    btnM.classList.remove("btn-success");
    btnS.classList.add("btn-success");
    btnS.classList.remove("btn-warning");
    btnL.classList.add("btn-success")
    btnL.classList.remove("btn-warning");

    gSelectedMenuStructure.menuName = "M";
    gSelectedMenuStructure.duongKinhCM = 25;
    gSelectedMenuStructure.suonNuong = 4;
    gSelectedMenuStructure.saladGr = 300;
    gSelectedMenuStructure.drink = 3;
    gSelectedMenuStructure.priceVND = 200000;
}

function changeColorSizeLClick() {
    btnS.classList.add("btn-success");
    btnS.classList.remove("btn-warning");
    btnM.classList.add("btn-success");
    btnM.classList.remove("btn-warning");
    btnL.classList.add("btn-warning")
    btnL.classList.remove("btn-success");

    gSelectedMenuStructure.menuName = "L";
    gSelectedMenuStructure.duongKinhCM = 30;
    gSelectedMenuStructure.suonNuong = 8;
    gSelectedMenuStructure.saladGr = 500;
    gSelectedMenuStructure.drink = 4;
    gSelectedMenuStructure.priceVND = 250000;
}

function changeColorType1() {
    type1.classList.add("btn-warning");
    type1.classList.remove("btn-success");
    type2.classList.add("btn-sucess");
    type2.classList.remove("btn-warning");
    type3.classList.add("btn-success");
    type3.classList.remove("btn-warning");

    gSelectedPizzaType = "Loại 1";
}


// 3 hàm để đổi màu button và update loại pizza bằng cách thên class dùng classLIst
function changeColorType2() {
    type2.classList.add("btn-warning");
    type2.classList.remove("btn-success");
    type1.classList.add("btn-sucess");
    type1.classList.remove("btn-warning");
    type3.classList.add("btn-success");
    type3.classList.remove("btn-warning");

    gSelectedPizzaType = "Loại 2";
}

function changeColorType3() {
    type3.classList.add("btn-warning");
    type3.classList.remove("btn-success");
    type2.classList.add("btn-sucess");
    type2.classList.remove("btn-warning");
    type1.classList.add("btn-success");
    type1.classList.remove("btn-warning");

    gSelectedPizzaType = "Loại 3";
}

// Hàm chính
function sendOrder() {

    // Update thông tin cho object
    gOrderInfo.name = document.getElementById("inp-fullname").value;
    gOrderInfo.email = document.getElementById("inp-email").value;
    gOrderInfo.phone = document.getElementById("inp-dien-thoai").value;
    gOrderInfo.address = document.getElementById("inp-dia-chi").value;
    gOrderInfo.message = document.getElementById("inp-message").value;
    gOrderInfo.voucher = document.getElementById("inp-vouncher").value;

    if (gOrderInfo.name == "") {
        alert("Bạn chưa điển tên đầy đủ");
    } else if (gOrderInfo.email == "") {
        alert("Bạn chưa điền email");
    } else if (gOrderInfo.phone == "") {
        alert("Bạn chưa điền số điện thoại");
    } else if (gOrderInfo.address == "") {
        alert("Bạn chưa điền địa chỉ");
    } else if (gOrderInfo.email.indexOf("@") == -1) {
        alert("Email không hợp lệ")
    } else if (isNaN(gOrderInfo.phone) == true) {
        alert("Số điện thoại không được chứa ký tự")
    } else if (gOrderInfo.phone.length < 10 || gOrderInfo.phone.length > 13) {
        alert("Số điện thoại phải có từ 10 tới 13 ký tự");
    }


    // check xem mã giảm giá có tồn tại hay không
    if (gOrderInfo.voucher != "") {
        var foundVoucher = false;
        for (voucher of gDiscountVouchers) {
            if (voucher.voucherID == gOrderInfo.voucher) {
                gOrderInfo.voucher = voucher.voucherID;
                gOrderInfo.discount = voucher.percentDiscount;
                foundVoucher = true;
            }
        }

        if (foundVoucher == false) {
            alert("Mã giảm giá không tồn tại!");
        }
    }

    gOrderInfo.priceAfterDiscount = gSelectedMenuStructure.priceVND -
        (gSelectedMenuStructure.priceVND * gOrderInfo.discount) / 100;

    document.getElementById("div-container-order").style.display = "block";
    document.getElementById("orderTen").innerHTML = gOrderInfo.name;
    document.getElementById("orderEmail").innerHTML = gOrderInfo.email;
    document.getElementById("orderDiaChi").innerHTML = gOrderInfo.address;
    document.getElementById("orderDienThoai").innerHTML = gOrderInfo.phone;
    document.getElementById("orderLoiNhan").innerHTML = gOrderInfo.message;
    document.getElementById("orderKichCo").innerHTML = gSelectedMenuStructure.menuName;
    document.getElementById("orderDuongKinh").innerHTML = gSelectedMenuStructure.duongKinhCM;
    document.getElementById("orderSuonNuong").innerHTML = gSelectedMenuStructure.suonNuong;
    document.getElementById("orderSalad").innerHTML = gSelectedMenuStructure.saladGr;
    document.getElementById("nuocNgot").innerHTML = gSelectedMenuStructure.drink;
    document.getElementById("orderLoaiPizza").innerHTML = gSelectedPizzaType;
    document.getElementById("orderMaVoucher").innerHTML = gOrderInfo.voucher;
    document.getElementById("orderGiaVND").innerHTML = gSelectedMenuStructure.priceVND;
    document.getElementById("orderDiscount").innerHTML = gOrderInfo.discount;
    document.getElementById("orderPhaiThanhToan").innerHTML = gOrderInfo.priceAfterDiscount;
}