// Bài 1: Tìm số nguyên dương nhỏ nhất 
/*
input:
- Đầu tiên ta cần khai báo soN là số nguyên cần tìm và sum là tổng các phần tử từ 1 đến soN sao cho sum > 10000.
handle:
- Sử dụng vòng lặp while với điều kiện sum < 10000, bước nhảy của vòng lặp là soN++ nghĩa là sau mỗi vòng lặp thì soN tăng lên một.
Output:
- Sau khi thoát vòng lặp thì ta được soN là số nhỏ nhất cần tìm.
*/
document.getElementById("btnTinh").onclick = sum1;

var sum = 0;
var soN = 0;
function sum1() {
    while (sum < 10000) {
        soN++;
        sum = sum + soN;
    }
    document.getElementById("ketQua1").innerHTML = soN;
}


// Bài 2: 
/*
Input:
    - Người dùng nhập 2 số
Handle:
    - khởi tạo biến inputNum1,inputNum2 để lấy giá trị người dùng nhập vào
    - Khởi tạo sumNo2 để tính tổng của dãy trên
    - Khởi tạo biến luythua để tìm lũy thừa x^1… x^n
    - Gán cho sumNo2 = 0,luythua = 1;
    - Sử dụng vòng lặp for và while lồng bên trong để xác định luythua và sumNo2
Output:
    - xuất ra kết quả
    */

document.getElementById("btnKetQua").onclick = sumNo2;

function sumNo2() {
    var inputNum1 = parseInt(document.getElementById("dataInNo2__num1").value);
    var inputNum2 = parseInt(document.getElementById("dataInNo2__num2").value);
    var sumNo2 = 0;
    var luythua = 1;
    for (var i = 1; i <= inputNum2; i++) {
        var luythua = 1;
        var j = 1;
        while (j <= i) {
            luythua *= inputNum1;
            j++;
        }
        sumNo2 += luythua;
    }
    document.getElementById("ketQua2").innerHTML = sumNo2;
}

// Bài 3: 
/*
input:
    - Người dùng nhập vào 1 số
Handle:
    - Ta sử dụng prompt cho phép người dùng nhập số vào
    - Sử dụng vòng lặp for với điều kiện i <= n
    - Kết thúc vòng lặp ta được giaiThua = giaiThua * i. 
Output:
    - Xuất ra kết quả
*/
function EnterN() {
    n = prompt('Nhập giá trị N:');
    document.getElementById('N').innerHTML = n;
}
function Done() {
    giaiThua = 1;
    for (i = 1; i <= n; i++) {
        giaiThua = giaiThua * i;
    }
    document.getElementById('End').innerHTML = n + '! = ' + giaiThua;
}

// Bài 4:
/*
input:
    - Thẻ chẵn thì in màu đỏ,thẻ lẻ thì in màu lẻ thì in màu xanh 
handle:
    - Sử dụng vòng lặp for với điều kiện i < div.length (nghĩa là i < độ dài của divs)
    - Nếu chẵn ((i + 1) % 2 == 0) thì sẽ cho ra kết quả màu đỏ
    - Nếu lẻ thì cho ra màu xanh 
Output:
    in ra kết quả 
*/
ketQuaHienRa.style.display = 'none';
function change_backgroud() {
    var divs = document.getElementsByClassName('list');
    for (var i = 0; i < divs.length; i++) {
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0) {
            divs[i].style.background = "red";
        }
        else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
        }
    }
    ketQuaHienRa.style.display = 'block';
}