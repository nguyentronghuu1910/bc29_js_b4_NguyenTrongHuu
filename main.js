// Bài tập 1:
/**
 * - Đầu vào: nhập vào 3 số nguyên bất kỳ ;
 *
 * - Xử lý:
 *   + nếu so_3 > so_2 & so_2 > so_1 => thì so_3 lớn nhất, so_1 nhỏ nhất ;
 *   + nếu so_2 > so_3 & so_3 > so_1 => thì so_2 lớn nhất, so_1 nhỏ nhất ;
 *   + nếu so_1 > so_3 & so_3 > so_2 => thì so_1 lớn nhất, so_2 nhỏ nhất ;
 *   + nếu so_3 > so_1 & so_1 > so_2 => thì so_3 lớn nhất, so_2 nhỏ nhất ;
 *   + nếu so_2 > so_1 & so_1 > so_3 => thì so_2 lớn nhất, so_3 nhỏ nhất ;
 *   + nếu so_1 > so_2 & so_2 > so_3 => thì so_1 lớn nhất, so_3 nhỏ nhất ;
 *
 * - Đầu ra: Show ra 3 số theo giá trị tăng dần ;
 *
 */
document.getElementById("tinhSoTangDan").onclick = function () {
  //Đầu vào
  var so_1 = parseInt(document.getElementById("so_1").value * 1);
  var so_2 = parseInt(document.getElementById("so_2").value * 1);
  var so_3 = parseInt(document.getElementById("so_3").value * 1);

  // Xử lý & so sánh các số

  //Giả sử 1 => 1 < 2 < 3

  if (so_3 > so_2 && so_2 > so_1) {
    var ketQua =
      "3 số có giá trị tăng dần : " + so_1 + " , " + so_2 + " , " + so_3;
  }
  //Giả sử 2 => 1 < 3 < 2
  else if (so_2 > so_3 && so_3 > so_1) {
    var ketQua =
      "3 số có giá trị tăng dần : " + so_1 + " , " + so_3 + " , " + so_2;
  }
  //Giả sử 3 => 2 < 3 < 1
  else if (so_1 > so_3 && so_3 > so_2) {
    var ketQua =
      "3 số có giá trị tăng dần : " + so_2 + " , " + so_3 + " , " + so_1;
  }
  //Giả sử 4 => 2 < 1 < 3
  else if (so_3 > so_1 && so_1 > so_2) {
    var ketQua =
      "3 số có giá trị tăng dần : " + so_2 + " , " + so_1 + " , " + so_3;
  }
  //Giả sử 5 => 3 < 1 < 2
  else if (so_2 > so_1 && so_1 > so_3) {
    var ketQua =
      "3 số có giá trị tăng dần : " + so_3 + " , " + so_1 + " , " + so_2;
  }
  //Giả sử 6 => 3 < 2 < 1
  else if (so_1 > so_2 && so_2 > so_3) {
    var ketQua =
      "3 số có giá trị tăng dần : " + so_3 + " , " + so_2 + " , " + so_1;
  }
  //Giả sử còn lại
  else {
    var ketQua = "Hãy nhập lại 3 số nguyên khác nhau";
  }
  // Show kết quả
  document.getElementById("footerGtTangDan").innerHTML = ketQua;
  document.getElementById("footerGtTangDan").classList.add("alert-success");
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 2:
/**
 * - Đầu vào:
 *   + nhập vai vế người dùng : bố, mẹ, anh, em ;
 *
 * - Xử lý:
 *   + nếu người dùng chọn là bố => "Xin chào Bố" ;
 *   + nếu người dùng chọn là mẹ => "Xin chào Mẹ" ;
 *   + nếu người dùng chọn là anh => "Xin chào Anh Trai" ;
 *   + nếu người dùng chọn là em => "Xin chào Em Gái" ;
 *
 * - Đầu ra: Show ra kết quả ;
 */
document.getElementById("btnloiChao").onclick = function () {
  // Đầu vào
  var nguoiDung = document.getElementById("nguoiDung").value;
  var loiChao = "";
  // Xử lý
  if (nguoiDung == "Bố") {
    loiChao = "Xin Chào Bố!";
  } else if (nguoiDung == "Mẹ") {
    loiChao = "Xin Chào Mẹ!";
  } else if (nguoiDung == "Anh") {
    loiChao = "Xin Chào Anh Trai!";
  } else if (nguoiDung == "Em") {
    loiChao = "Xin Chào Em Gái!";
  } else {
    loiChao = "Bạn không được cấp quyền truy cập";
  }
  // Show kết quả
  document.getElementById("footerloiChao").innerHTML = loiChao;
  document.getElementById("footerloiChao").classList.add("alert-success");
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 3:
/**
 * - Đầu vào: Nhập vào 3 số nguyên ;
 *
 * - Xử lý:
 *
 * - Đầu ra: Show ra kết quả ;
 */
document.getElementById("btnTinhChanLe").onclick = function () {
  // Đầu vào
  var soNguyen1 = parseInt(document.getElementById("soNguyen1").value * 1);
  var soNguyen2 = parseInt(document.getElementById("soNguyen2").value * 1);
  var soNguyen3 = parseInt(document.getElementById("soNguyen3").value * 1);

  // Xử lý

  var soChan = 0;
  var soLe = 0;

  // xử lý số nguyên 1 :
  if (soNguyen1 % 2 == 0) {
    ++soChan;
  } else {
    ++soLe;
  }

  // xử lý số nguyên 2 :
  if (soNguyen2 % 2 == 0) {
    ++soChan;
  } else {
    ++soLe;
  }

  // xử lý số nguyên 3 :
  if (soNguyen3 % 2 == 0) {
    ++soChan;
  } else {
    ++soLe;
  }

  // Show kết quả
  document.getElementById("footerTinhChanLe").innerHTML =
    "Kết quả là : " + soChan + " Số Chẵn " + soLe + " Số Lẻ ";
  document.getElementById("footerTinhChanLe").classList.add("alert-success");
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 4:
/**
 * - Đầu vào: người dùng nhập số đo 3 cạnh ( a, b, c ) ;
 *
 * - Xử lý:
 *    + tam giác đều: 3 cạnh bằng nhau
 *      (Nếu a = b = c => tam giác đều)
 *    + tam giác cân: cạnh kề và cạnh đối chiều dài bằng nhau
 *
 * + tam giác vuông: cạnh huyền = tổng bình phuong hai canh góc vuông
 * - Đầu ra:
 */
document.getElementById("btnTinhTamGiac").onclick = function () {
  // Đầu vào
  var canh_a = document.getElementById("canh_a").value * 1;
  var canh_b = document.getElementById("canh_b").value * 1;
  var canh_c = document.getElementById("canh_c").value * 1;

  // Xử lý
  //tam giác đều
  if (canh_a == canh_b && canh_b == canh_c) {
    raKetQua = "Tam Giác Đều";
  }
  //tam giác cân
  else if (canh_a == canh_b || canh_a == canh_c || canh_b == canh_c) {
    raKetQua = "Tam Giác Cân";
  }
  //tam giác vuông
  else if (
    canh_a == Math.sqrt(Math.pow(canh_b, 2) + Math.pow(canh_c, 2)) ||
    canh_b == Math.sqrt(Math.pow(canh_c, 2) + Math.pow(canh_a, 2)) ||
    canh_c == Math.sqrt(Math.pow(canh_a, 2) + Math.pow(canh_b, 2))
  ) {
    raKetQua = "Tam Giác Vuông";
  }
  document.getElementById("footerTinhTamGiac").innerHTML =
    " Kết quả là: " + raKetQua;
  document.getElementById("footerTinhTamGiac").classList.add("alert-success");
};
