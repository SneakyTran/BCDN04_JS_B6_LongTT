/**
 * todo Tìm số nguyên dương nhỏ nhất sao cho:
 * todo 1 + 2 + … + n > 10000
 */

/**
 * ?Khối 1:
 * sum, count
 *
 * ?Khối 2:
 * while
 *  count++
 *  sum += count
 *  Nếu sum >= 10000
 *      dừng vòng lặp(break)
 *      =>count là số nhỏ nhất thỏa mãn đề
 *
 *  Thông báo kết quả ra màn hình
 *
 * ?Khối 3:
 * Số nguyên nhỏ nhất
 */
function findMinBasedOnCondition() {
    var sum = 0;
    var count = 1;
    //?C1: Dùng while
    while (true) {
        sum += count;
        if (sum >= 10000) {
            break;
        }
        count++;
    }
    //?C2: Dùng for
    // for (let i = 1; i < 10000; i++) {
    //     sum += i;
    //     if(sum >= 10000){
    //         count = i;
    //         break;
    //     }
    // }
    document.getElementById("txtMinResult").innerHTML =
        "Số nguyên dương nhỏ nhất: " + count;
}
findMinBasedOnCondition();

//todo Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n

/**
 * ?Khối 1:
 * x,n,count,sum
 *
 * ?Khối 2:
 * Nếu n < 0
 *      thông báo lỗi
 * Ngược lại nếu n == 0 || n == 1
 *      sum = x
 * Ngược lại
 * todo Vòng while
 *      while(count <= n)
 *          sum += Math.pow(x, count)
 *          count++
 * todo Vòng for
 *      for(let i = 0; i <= n; i++)
 *          sum += Math.pow(x, i);
 * Thông báo kết quả ra màn hình
 *
 * ?Khối 3:
 * Tổng S
 *
 */
function calcTotal() {
    var x = Number(document.getElementById("txtX").value);
    var n = Number(document.getElementById("txtN").value);
    var count = 1;
    var sum = 0;
    if (n < 0) {
        alert("n phải là số dương");
        return;
    } else if (n == 0 || n == 1) {
        sum = x;
    } else {
        //?C1: Dùng while
        // while (count <= n) {
        //     sum += Math.pow(x, count);
        //     count++;
        // }

        //?C2: Dùng for
        for (let i = 1; i <= n; i++) {
            sum += Math.pow(x, i);
        }
    }
    console.log(sum);
}
document.getElementById("btnCalc").onclick = calcTotal;

//todo Nhập vào n. Tính giai thừa 1*2*...n
/**
 * Khối 1:
 * sum,count,n
 *
 * Khối 2:
 * Nếu n < 0
 *      thông báo lỗi
 * Ngược lại nếu n == 0
 *      sum = 0
 * Ngược lại
 *      sum = 1
 *      count = 1
 * todo vòng while
 *      while(count <= n)
 *          sum *= count;
 *          count++
 * todo vòng for
 *      for(let i = 0; i <= n; i++)
 *          sum *= i
 * Khối 3:
 * Giai thừa từ 1 -> n
 */
function calcFactorial() {
    var n = Number(document.getElementById("txtNumber").value);
    var count = 1;
    var total = 1;
    if (n < 0) {
        alert("n phải là số nguyên dương! Hãy nhập lại!");
    } else if (n == 0) {
        total = 0;
    } else if (n > 0) {
        //todo vòng lặp while
        // while (count <= n) {
        //     total *= count;
        //     count++;
        // }
        //todo vòng lặp for
        for (let i = 1; i <= n; i++) {
            total *= i;
        }
    }
    document.getElementById("txtTotalResult").innerHTML = total;
}
document.getElementById("btnCalcTotal").onclick = calcFactorial;
